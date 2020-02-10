import React, { Component } from "react";
import { connect } from "react-redux";
import { registerPlanner } from "../../../actions/plannerActions";
import {
  getUnBlockedAfricanCountries,
  getStatesOptions,
  getCityOptions,
  getRevenueOptions
} from "../../../actions/optionActions";
import Form from "../../common/form";

import Joi from "joi-browser";
import { withRouter } from "react-router-dom";
import AboutPlannerView from "./AboutPlannerView";

class AboutPlanner2 extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      phoneNo1: "",
      streetAdress1: "",
      city: "",
      st: "",
      country: "",
      currentRevenue: "$0 (Beginner)",
      cateringCapacity: "200"
    },
    optional: {
      streetAdress2: "",
      apiSuite: "",
      zipCode: "",
      website: ""
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .alphanum()
      .min(3)
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    streetAdress1: Joi.string()
      .min(8)
      .required()
      .label("Street Adress 1"),
    currentRevenue: Joi.string().label("Current Revenue"),
    cateringCapacity: Joi.string().label("Catering"),
    phoneNo1: Joi.string()
      .min(6)
      .required()
      .label("PhoneNo1"),
    country: Joi.string()
      .required()
      .label("Country"),
    st: Joi.string()
      .required()
      .label("State"),
    city: Joi.string()
      .required()
      .label("City")
  };

  componentDidMount() {
    this.props.getUnBlockedAfricanCountries();
    this.props.getRevenueOptions();
  }

  onSelectCountry = countryCode => {
    let code = countryCode;
    const label = {
      code: code
    };
    this.setState({ data: { ...this.state.data, country: countryCode } });
    console.log("I am in selected Country");
    this.props.getStatesOptions(label);
  };

  onSelectState = e => {
    e.preventDefault();
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;

    this.setState({ data: { ...this.state.data, st: label } });

    let stateValue = e.target.value;
    const data = {
      code: stateValue
    };

    this.props.getCityOptions(data);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  doSubmit = () => {
    const aboutPlanner = {
      lang: this.props.lang,
      firstName: this.state.data.firstName,
      lastName: this.state.data.lastName,
      phoneNo1: this.state.data.phoneNo1,
      streetAdress1: this.state.data.streetAdress1,
      streetAdress2: this.state.optional.streetAdress2,
      apiSuite: this.state.optional.apiSuite,
      st: this.state.data.st,
      city: this.state.data.city,
      zipCode: this.state.optional.zipCode,
      country: this.state.data.country,
      website: this.state.optional.website,
      currentRevenue: this.state.data.currentRevenue,
      cateringCapacity: this.state.data.cateringCapacity
    };
    console.log(aboutPlanner);
    this.props.registerPlanner(aboutPlanner, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const { data, optional } = this.state;
    const {
      unBlockedAfricanCountriesOptions,
      stateOptions,
      cityOptions,
      cateringOptions,
      revenueOptions,
      t
    } = this.props;

    return (
      <AboutPlannerView
        t={t}
        data={data}
        optional={optional}
        onChange={this.handleChange}
        handleOptional={this.handleOptional}
        onSubmit={this.handleSubmit}
        errors={errors}
        unBlockedAfricanCountriesOptions={unBlockedAfricanCountriesOptions}
        stateOptions={stateOptions}
        cityOptions={cityOptions}
        cateringOptions={cateringOptions}
        revenueOptions={revenueOptions}
        onSelectCountry={this.onSelectCountry}
        onSelectState={this.onSelectState}
        validate={this.validate}
      />
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors.errors,
  auth: state.auth,
  unBlockedAfricanCountriesOptions:
    state.options.unBlockedAfricanCountriesOptions,
  cityOptions: state.options.cityOptions,
  stateOptions: state.options.stateOptions,
  cateringOptions: state.options.cateringOptions,
  revenueOptions: state.options.revenueOptions,
  lang: state.common.language
});

export default connect(
  mapStateToProps,
  {
    registerPlanner,
    getUnBlockedAfricanCountries,
    getStatesOptions,
    getCityOptions,
    getRevenueOptions
  }
)(withRouter(AboutPlanner2));
