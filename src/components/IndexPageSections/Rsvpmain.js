import React from "react"
import styled from "styled-components"

// Components
import {layoutDims} from "../Layout/Layout.js"
import AttendanceForm from "../AttendanceForm.js"

// Media Queries
import mediaQueries from "../../util/mediaQueries.js"

const headerAndFooterHeights = `
  ${layoutDims.runnerWidthCssStr} *
  ${layoutDims.headerImgAR} *
  ${layoutDims.overlayedHeaderHeightPerc}
  + ${layoutDims.runnerWidthCssStr} * ${layoutDims.footerImgAR}`

const FlexContainer = styled.div`
  // height: calc( 100vh - (${headerAndFooterHeights}) );
`

export const StatusMessageDiv = styled.div`
  background-color: ${props => props.backCo};
  color: ${props => props.textCo};
  border-radius: 11px;
  padding: 2%;
  width: 90%;
  margin: auto;
  font-size: 1em;
  ${mediaQueries("", undefined, "1em")};
`

// Handle the rsvp submission status
class RsvpMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      successfulUpdate: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  } // constructor()

  async handleSubmit(guestData) {

    console.log("RsvpMain handleSubmit()")

    this.setState({
      isSubmitting: true,
    });

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({guestData: guestData}),
      });

      const status = await response.json();

      if (status) {
        // Successful update!
        this.setState({
          isSubmitting: false,
          successfulUpdate: true,
        });
      } else {
        // Unsuccessful update
        this.setState({
          isSubmitting: false,
          successfulUpdate: false,
        });
      }

    } catch(err) {
      console.error(err);
      this.setState({
        isSubmitting: false,
        successfulUpdate: false,
      });
      // alert("There was an error submitting the rsvp information.");
    }

  } // handleSubmit

  render() {

    let statusMessage;

    // Show a loading message while submitting
    if (this.state.isSubmitting) {
      statusMessage =
        <StatusMessageDiv backCo="#FFEB9C" textCo="#9C6500">
          Submitting...
        </StatusMessageDiv>
    }
    else {

      // If rsvp is succesful, display a timestamp and success message
      // If unsuccessful, display an error message
      // If no attempt has been made, don't display anything.
      if (this.state.successfulUpdate === null) {
        statusMessage = <></>;
      }
      else if (this.state.successfulUpdate === true) {
        const currentDateTime = new Date();
        statusMessage =
          <StatusMessageDiv backCo="#C6EFCE" textCo="#006100">
            {`Successfully submitted on ${currentDateTime.toDateString()}, at ${currentDateTime.toLocaleTimeString()}`}
          </StatusMessageDiv>;
      }
      else {
        statusMessage =
          <StatusMessageDiv backCo="#FFC7CE" textCo="#9C0006">
            Something went wrong with the rsvp submission. Please contact your host for support.
          </StatusMessageDiv>
      }
    } // if submitting

    return(
      <FlexContainer>
        <AttendanceForm
          guestData={this.props.guestData}
          handleSubmit={this.handleSubmit}
        />
        {statusMessage}
      </FlexContainer>
    );
  } // render()
}

export default RsvpMain;