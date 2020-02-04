import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUnBlockedContinentsOptions,
  getCountriesByContinentOptions,
  getStatesOptions,
  getCityOptions,
  getRevenueOptions
} from "../../../actions/optionActions";
import { registerVendor } from "../../../actions/vendorActions";
import { withRouter } from "react-router-dom";

import AboutVendorView from "./AboutVendorView";

class AboutVendor extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      phoneNo1: "",
      streetAdress1: "",
      streetAdress2: "",
      apiSuite: "",
      zipCode: "",
      website: "",
      continent: "",
      country: "",
      st: "",
      city: "",
      currentRevenue: "$0"
    },
    erorrs: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  async componentDidMount() {
    await this.props.getUnBlockedContinentsOptions();
    await this.props.getRevenueOptions();
  }

  getCountriesbyContint = e => {
    e.preventDefault();
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    const continents = {
      continent: e.target.value
    };
    this.props.getCountriesByContinentOptions(continents);
  };

  getStatesbyCountry = e => {
    e.preventDefault();
    let code = e.target.value;
    const label = {
      code: code
    };
    this.setState({ data: { ...this.state.data, country: code } });

    this.props.getStatesOptions(label);
  };

  getCities = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    const stValue = {
      label: label
    };
    this.setState({ data: { ...this.state.data, st: stValue.label } });

    let stateValue = e.target.value;
    const data = {
      code: stateValue
    };

    this.props.getCityOptions(data);
  };

  canBeSubmitted() {
    const {
      firstName,
      lastName,
      streetAdress1,
      city,
      country,
      continent,
      phoneNo1,
      st
    } = this.state.data;
    return (
      firstName.length > 2 &&
      lastName.length > 2 &&
      streetAdress1.length > 8 &&
      city.length > 0 &&
      country.length > 0 &&
      continent.length > 0 &&
      st.length > 0 &&
      phoneNo1.length > 8
    );
  }

  onSubmit = e => {
    e.preventDefault();
    const aboutVendor = {
      lang: this.props.lang,
      firstName: this.state.data.firstName,
      lastName: this.state.data.lastName,
      phoneNo1: this.state.data.phoneNo1,
      streetAdress1: this.state.data.streetAdress1,
      streetAdress2: this.state.data.streetAdress2,
      apiSuite: this.state.data.apiSuite,
      city: this.state.data.city,
      continent: this.state.data.continent,
      st: this.state.data.st,
      zipCode: this.state.data.zipCode,
      country: this.state.data.country,
      website: this.state.data.website,
      currentRevenue: this.state.data.currentRevenue
    };
    this.props.registerVendor(aboutVendor, this.props.history);
  };

  render() {
    const { data } = this.state;
    const {
      unBlockedContinentOptions,
      countriesByContinentOptions,
      stateOptions,
      cityOptions,
      revenueOptions,
      t
    } = this.props;

    const isEnabled = this.canBeSubmitted();

    return (
      <AboutVendorView
        t={t}
        websiteBg={this.props.websiteBg}
        data={data}
        continentOptions={unBlockedContinentOptions}
        countryOptions={countriesByContinentOptions}
        stateOptions={stateOptions}
        cityOptions={cityOptions}
        revenueOptions={revenueOptions}
        getCountriesbyContint={this.getCountriesbyContint}
        getStatesbyCountry={this.getStatesbyCountry}
        getCities={this.getCities}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        isEnabled={isEnabled}
        history={this.props.history}
      />
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors.errors,
  auth: state.auth,
  unBlockedContinentOptions: state.options.unBlockedContinentOptions,
  countriesByContinentOptions: state.options.countriesByContinentOptions,
  stateOptions: state.options.stateOptions,
  cityOptions: state.options.cityOptions,
  revenueOptions: state.options.revenueOptions,
  lang: state.common.language
});

export default connect(
  mapStateToProps,
  {
    getUnBlockedContinentsOptions,
    getCountriesByContinentOptions,
    getStatesOptions,
    getCityOptions,
    getRevenueOptions,
    registerVendor
  }
)(withRouter(AboutVendor));
