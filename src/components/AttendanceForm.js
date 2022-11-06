import React from "react"
import styled from "styled-components"

// Media Queries
import mediaQueries from "../util/mediaQueries.js"

const CardBody = styled.div`
  border-radius: 7px;
  padding: 3%;
`

const GuestRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 2%;
  padding: 2%;
  border-radius: 7px;
`

const GuestHeading = styled.h3`
  font-size: 1.7em;
  ${mediaQueries("", undefined, "1.7em")}
  font-weight: normal;
  margin: 0 0 0.5em;
`

const RsvpButtonsDiv = styled.div`
  margin: 2%;
`

const RsvpInput = styled.input`
  margin: 2%;
  cursor: pointer;
`

const RsvpTextInput = styled.input`
  margin: 0.5em;
  padding: 0.5em;
  width: 90%;
  border-radius: 7px;
  border: 1px solid #bbb;
  color: #313438;
  font-size: 0.8em;
  ${mediaQueries("", undefined, "0.8em")};

  &:focus {
    outline: none;
    border: 1px solid #556673;
  }

  &::placeholder {
    font-style: italic;
  }
`

const SubmitButton = styled.input`
  display: block;
  margin: 5% auto 0;
  border: 1px solid #999;
  border-radius: 7px;
  padding: 0.5em 1em;
  font-family: "Goudy Old Style", serif;
  font-size: 1.2em;
  ${mediaQueries("", undefined, "1.2em")};
  cursor: pointer;

  &:active {
    border-width: 2px 0 0 2px;
    transform: translateY(2px);
  }

  &:hover {
    background-color: #ddd;
  }
`

const InputLabel = styled.label`
  font-size: 1em;
  ${mediaQueries("", undefined, "1em")}
  margin: 0 0.5em;
`

const RadioDiv = styled.div`
  width: 110%;
  margin: 5% 0;
`

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

    return (

      <div>

        <GuestRow>
          <div>
            <GuestHeading>{this.props.guestData.name}</GuestHeading>

            <InputLabel htmlFor="dietaryRestriction">Dietary Restriction: </InputLabel>
            <RsvpTextInput type="text" id="dietaryRestriction"
              placeholder="Ex: vegetarian, allergies etc."
              value={this.props.guestData.diet}
              data-guestidx={this.props.guestIndex}
              onChange={this.handleInputChange} />
          </div>

          <RsvpButtonsDiv>
            <RadioDiv>
              <RsvpInput type="radio"
                id="yes" value="yes"
                name={this.props.guestData.name}
                data-guestidx={this.props.guestIndex}
                onChange={this.handleInputChange}
                checked={this.props.guestData.rsvp.toLowerCase() === "yes"}/>
              <InputLabel htmlFor="yes">Attending</InputLabel>
            </RadioDiv>

            <RadioDiv>
              <RsvpInput type="radio"
                id="no" value="no"
                name={this.props.guestData.name}
                data-guestidx={this.props.guestIndex}
                onChange={this.handleInputChange}
                checked={this.props.guestData.rsvp.toLowerCase() === "no"}/>
              <InputLabel htmlFor="no">Not Attending</InputLabel>
            </RadioDiv>
          </RsvpButtonsDiv>

        </GuestRow>
      </div>

    );
  } // render()

} // AttendanceCard class

/*
Song input component
*/
class SongInput extends React.Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // event.preventDefault();
    this.props.handleInputChange(event.target);
  }

  render() {
    return (
      <>
      <InputLabel htmlFor="song">Song Input: </InputLabel>
      <RsvpTextInput type="text" id="song"
        placeholder="Ex: "
        value={this.props.guestData.song}
        data-guestidx={this.props.guestIndex}
        onChange={this.handleInputChange} />
      </>
    );
  } // render
}

/**
* Grouping of guest AttendanceCard child components.
* Receives the guest data information from the parent component
* and handles the updates from the AttendanceCard child components
* Submits results to its parent component.
* Props:
*  - guestData: array of objects, each one creates an AttendanceCard
*    child component
*  - handleSubmit: function to handle the form submission
**/
// Ref: https://reactjs.org/docs/forms.html
class AttendanceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {guestData: props.guestData};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let guestDataProp;
    switch (element.id) {
      case "dietaryRestriction":
        guestDataProp = "diet";
        break;
      case "yes":
      case "no":
        guestDataProp = "rsvp";
        break;
      case "song":
        guestDataProp = "song";
        break;
      default:
        guestDataProp = "";
        console.error("Handle change in the attendance form did not return an expected result.");
        return;
    }

    /* Debug */
    // console.log(`Guest Index: ${guestIdx}`)
    // console.log(`Guests Data Prop: ${guestDataProp}`)

    // Update the correct guestData index corresponding to the
    // correct guest.
    this.setState((prevState) => {
      /* Debug */
      // console.log(`Previous State: ${prevState.guestData[guestIdx][guestDataProp]}`)
      prevState.guestData[guestIdx][guestDataProp] = element.value;
      return ({
        guestData: prevState.guestData,
      });
    });

  } // handleChange()

  /**
  * Pass this submit logic to the parent component
  **/
  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.guestData);
    this.props.handleSubmit(this.state.guestData);
  } // handleSubmit()

  render() {

    // Save the guest index that has a song listed in the map function below
    let indexOfGuestWithStoredSong;

    const cards = this.state.guestData.map((guestInfo, ind) => {
      // Mark the guest that has the song assigned to them
      if (guestInfo.song.length > 0) {
        indexOfGuestWithStoredSong = ind;
      }

      // Supply a guestIndex to each AttendanceCard so we know which one was
      // updated by the user
      return(
        <AttendanceCard key={ind} guestData={guestInfo}
          guestIndex={ind} handleInputChange={this.handleChange} />
      );
    });

    // Check if any of the guests in the group have a song listed
    // If not, set it to the first guest in the list
    if (indexOfGuestWithStoredSong === undefined) {
      indexOfGuestWithStoredSong = 0;
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <CardBody>
          {cards}
          <SongInput
            guestIndex={indexOfGuestWithStoredSong}
            guestData={this.state.guestData[indexOfGuestWithStoredSong]}
            handleInputChange={this.handleChange}
          />
          <SubmitButton type="submit" value="Save Changes" />
        </CardBody>
      </form>
    );
  } // render()

} // AttendanceForm class

export default AttendanceForm;
