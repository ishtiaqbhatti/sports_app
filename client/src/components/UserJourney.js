import React, { Component } from "react";
import Multistep from "react-multistep";
import ManagerAuth from "../components/auth/ManagerAuth";

class UserJourney extends Component {
  render() {
    return <Multistep showNavigation={true} steps={steps} />;
  }
}

const steps = [
  { name: "StepOne", component: <ManagerAuth /> },
  { name: "StepTwo", component: <ManagerAuth /> },
  { name: "StepThree", component: <ManagerAuth /> },
  { name: "StepFour", component: <ManagerAuth /> }
];

export default UserJourney;
