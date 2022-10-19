import React from "react"
import styled from "styled-components"

// Media Queries
import mediaQueries, {fontSizes} from "../util/mediaQueries.js"

const CardBody = styled.div`
  border-radius: 7px;
  padding: 30px;
  // display: flex;
  // flex-flow: row nowrap;
`

const GuestGroupTable = styled.table`
  border: none;
  margin: 1em;
  font-family: "Goudy Old Style", serif;
  // flex: 1 1 auto;
  width: 100%;
`;

const NameCell = styled.td`
  height: 2em;
  font-size: 1.7em;
  ${mediaQueries("", undefined, "1.7em")}
`;

const NameCol = styled.th`
  width: 70%;
`

  // & td {
  //   padding: 0.5em;
  // }

/**
- Handle individual attendance information
- props:
  - guestData: object with the following props
    name, sheetRow, rsvp, diet
  - handleInputChange: event handler for input elements
**/
class AttendanceCard extends React.Component {

  constructor(props) {
    super(props);

    // TODO make sure the RSVP text is either "yes" or "no"

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // event.preventDefault();
    this.props.handleInputChange(event.target);
  }

  render() {

    /* Debug */
    // console.log(`Rendering the AttendanceCard`)
    // console.log(this.props)

    return(
      <>
        <tr>
          <NameCell>{this.props.guestData.name}</NameCell>

          {/*RSVP Radio Button Input*/}
          <td rowSpan="2" style={{textAlign: "center"}}>
            {/*<fieldset>*/}

              <div>
                <input type="radio"
                  id="yes" value="yes"
                  name={this.props.guestData.name}
                  data-guestidx={this.props.guestIndex}
                  onChange={this.handleInputChange}
                  checked={this.props.guestData.rsvp.toLowerCase() === "yes"}/>
                <label htmlFor="yes">LFGOO</label>
              </div>

              <div>
                <input type="radio"
                  id="no" value="no"
                  name={this.props.guestData.name}
                  data-guestidx={this.props.guestIndex}
                  onChange={this.handleInputChange}
                  checked={this.props.guestData.rsvp.toLowerCase() === "no"}/>
                <label htmlFor="no">Nah</label>
              </div>
            {/*</fieldset>*/}
          </td>

        </tr>
        <tr>
          {/*Dietary Restriction Input*/}
          <td>
            <label htmlFor="dietaryRestriction">Dietary Restriction: </label>
            <input type="text" id="dietaryRestriction"
              value={this.props.guestData.diet}
              data-guestidx={this.props.guestIndex}
              onChange={this.handleInputChange} />
          </td>
        </tr>
      </>
    );
  } // render()

} // AttendanceCard class

class AttendanceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {guestData: props.guestData};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  /**
  * Pass this method to form elements (AttendanceCard component) which
  * updates this component's state with the dietary restriction text
  * and/or the RSVP status that was adjusted in the child AttendanceCard
  * component.
  **/
  handleChange(element) {

    /* Debug */
    // console.log(element);

    // Determine which guest the element belongs to
    const guestIdx = +element.dataset.guestidx;

    // Check whether the event was generated from the dietary
    // restriction input or the rsvp radio button
    const guestDataProp = element.id === "dietaryRestriction" ?
      "diet" : "rsvp";

    /* Debug */
    // console.log(`Guest Index: ${guestIdx}`)
    // console.log(`Guests Data Prop: ${guestDataProp}`)

    // Update the correct guestData index corresponding to the
    // correct guest.
    this.setState((prevState) => {
      console.log(`Previous State: ${prevState.guestData[guestIdx][guestDataProp]}`)
      prevState.guestData[guestIdx][guestDataProp] = element.value;
      return ({
        guestData: prevState.guestData,
      });
    });

  } // handleChange()

  render() {

    const cards = this.state.guestData.map((guestInfo, ind) => {
      // Supply a guestIndex to each AttendanceCard so we know which one was
      // updated by the user
      return(
        <AttendanceCard key={ind} guestData={guestInfo}
          guestIndex={ind} handleInputChange={this.handleChange} />
      );
    })

    return(
      <CardBody>

        <form onSubmit={this.handleSubmit}>
          <GuestGroupTable>
            <thead>
              <tr>
                <NameCol />
                <th>Attending?</th>
              </tr>
            </thead>
            <tbody>

              {/*<AttendanceCard guestData={guestData} />*/}
              {cards}

            </tbody>
          </GuestGroupTable>

          <input type="submit" value="Submit" />
        </form>


      </CardBody>
    );
  } // render()

} // AttendanceForm class

export default AttendanceForm;