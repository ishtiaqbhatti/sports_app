import React, { Component } from "react";
import { connect } from "react-redux";

// import setAuthToken from "./utils/setAuthToken";
// import jwt_decode from "jwt-decode";

import "./styles/dashboard.css";
import "./App.css";
import "./styles/old.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Website from "./components/layout/website/index";
import { Home } from "./components/website/index";

// //Dashboard Imports
// import {
//   Dashboard,
//   DashboardToggler,
//   AdminDashboard
// } from "./components/layout/dashboard/index";
// import { getAdminData } from "./actions/adminActions";

// //Admin Imports
// import {
//   Search,
//   Noticeboard,
//   UniquePackages,
//   Category,
//   AboutUs,
//   Terms,
//   PrivacyPolicy,
//   Images,
//   EventType,
//   Catering,
//   BlockContinent,
//   BlockCountries,
//   UserStats,
//   ChangeTargetMarket
// } from "./components/admin/index";

//Dashboard Imports
// import {
//   DashBoardNoticeboard,
//   Profile,
//   Packages,
//   Office,
//   UploadImages,
//   Keywords,
//   Services,
//   Setting
// } from "./components/dashboard/index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//MiddleWare Code
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ImageGaller from "./components/testing/imageGallery";
import "./styles/image-gallery.css";

import ManagerAuth from "./components/auth/ManagerAuth";
import Journey from "./components/auth/journey/Journey";
class App extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props.lang);
    return (
      <Router>
        <React.Fragment>
          <ToastContainer />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Website>
                  <Home t={this.props.t} />
                </Website>
              )}
            />

            <Route exact path="/user-journey" render={() => <Journey />} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loadingfromAdmin: state.common.loadingfromAdmin,
  websiteBg: state.admin.admin.websiteBg,
  t: state.common.translatedLabels,
  lang: state.common.language
});

export default connect(mapStateToProps, {})(App);
