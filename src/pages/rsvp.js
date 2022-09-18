import React from "react"

// Components
import Layout from "../components/Layout/Layout.js"
import RsvpMain from "../components/IndexPageSections/Rsvpmain.js"
import Login from "../components/Login.js"

// Util
import { isLoggedIn } from "../services/auth.js"

export default class Rsvp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: isLoggedIn(),
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState( state => {
      if (state.isLoggedIn === isLoggedIn())
        return null; // Don't render if the login state didn't change
      else {
        return { isLoggedIn: isLoggedIn() };
      }
    });
  }


  render() {

    let componentToRender
    if (this.state.isLoggedIn) {
      componentToRender = <RsvpMain />;
    }
    else {
      componentToRender = <Login handleLogin={this.handleLogin} />;
    }

    return (
      <Layout>
        {componentToRender}
      </Layout>
    );
  }

}
