import React from "react"
import styled from "styled-components"

// Components
import Layout, {layoutDims} from "../components/Layout/Layout.js"
import RsvpMain, {StatusMessageDiv} from "../components/IndexPageSections/Rsvpmain.js"
import Login from "../components/Login.js"

const headerAndFooterHeights = `
  ${layoutDims.runnerWidthCssStr} *
  ${layoutDims.headerImgAR} *
  ${layoutDims.overlayedHeaderHeightPerc}
  + ${layoutDims.runnerWidthCssStr} * ${layoutDims.footerImgAR}`

const MinHeightDiv = styled.div`
  min-height: calc( 99.5vh - (${headerAndFooterHeights}) );
`

export default class Rsvp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSubmitting: false,
      failedLoginAttempt: false, // Couldn't find the guest name
      tooManyResults: false, // If the searched name isn't specific enough
      connectionIssue: false, // failed to fetch
      guestData: [],
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(guestName) {

    this.setState({
      isSubmitting: true,
      failedLoginAttempt: false,
      tooManyResults: false,
      connectionIssue: false,
    });

    let guestData;
    try {
      const response = await fetch('http://localhost:3001/guestName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({searchName: guestName}),
      });

      guestData = await response.json();

      // The guest exists and the backend returns the party/group for that guest
      if (guestData.length > 0) {
        this.setState({
          guestData,
          isLoggedIn: true,
          isSubmitting: false,
          failedLoginAttempt: false,
          tooManyResults: false,
          connectionIssue: false,
        });
      }

      // Returned too many matches, alert the user to be more specific
      else if (guestData === -2) {
        this.setState({
          isSubmitting: false,
          failedLoginAttempt: false,
          tooManyResults: true,
          connectionIssue: false,
        });
      }

      // The guest couldn't be found
      else {
        this.setState({
          isSubmitting: false,
          failedLoginAttempt: true,
          tooManyResults: false,
          connectionIssue: false,
        });
      }

    } catch(err) {
      console.error(err);
      this.setState({
        isSubmitting: false,
        failedLoginAttempt: false,
        tooManyResults: false,
        connectionIssue: true,
      });
      // alert("There was an error fetching the information.");
    }

  } // handleLogin()


  render() {

    let componentToRender
    // Pass the group ID to the RsvpMain component
    if (this.state.isLoggedIn) {
      componentToRender = <RsvpMain guestData={this.state.guestData}/>;
    }
    else {
      componentToRender = [<Login handleLogin={this.handleLogin} key={0}/>];

      if (this.state.isSubmitting) {
        componentToRender.push(
          <StatusMessageDiv key={1} backCo="#FFEB9C" textCo="#9C6500">
            Submitting...
          </StatusMessageDiv>
        );
      }

      if (this.state.tooManyResults) {
        componentToRender.push(
          <StatusMessageDiv key={2} backCo="#FFC7CE" textCo="#9C0006">
            Please be more specific.
          </StatusMessageDiv>
        );
      }

      if (this.state.failedLoginAttempt) {
        componentToRender.push(
          <StatusMessageDiv key={3} backCo="#FFC7CE" textCo="#9C0006">
            Couldn't find the guest name.
          </StatusMessageDiv>
        );
      }

      if (this.state.connectionIssue) {
      componentToRender.push(
        <StatusMessageDiv key={4} backCo="#FFC7CE" textCo="#9C0006">
          There was an issue retreiving the data, please contact your host to resolve.
        </StatusMessageDiv>
        );
      }
    } // if logged in

    return (
      <Layout>
        <MinHeightDiv>
          {componentToRender}
        </MinHeightDiv>
      </Layout>
    );
  }

}
