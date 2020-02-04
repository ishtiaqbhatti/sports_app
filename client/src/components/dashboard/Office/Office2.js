import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import isEmpty from "../../../utils/is-empty";
import {
  getUnBlockedContinentsOptions,
  getUnBlockedAfricanCountries,
  getCountriesByContinentOptions,
  getStatesOptions,
  getCityOptions
} from "../../../actions/optionActions";
import { addPlannerOffice } from "../../../actions/plannerActions";
import { addVendorOffice } from "../../../actions/vendorActions";
import { onClickSave, onClickEdit } from "../../../actions/buttonActions";

import { toast } from "react-toastify";
import Spinner from "../../common/Spinner/Spinner";

import OfficeView from "./OfficeView";

class Office extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false,
      formdisabled: "disabled",
      streetAdress1: "",
      streetAdress2: "",
      apiSuite: "",
      zipCode: "",
      continent: "",
      country: "",
      st: "",
      city: "",
      officeMobileNo: "",
      phoneNo1: "",
      phoneNo2: "",
      fbAdress: "",
      instaAdress: "",
      twitterAdress: "",
      youtubeAdress: "",
      linkdnAdress: "",

      addBtn: true,
      removeBtn: false,
      loading: true,
      continentOptions: [],
      countryOptions: [],
      stateOptions: [],
      cityOptions: []
    },
    branchOffice: {
      addBtn1: true,
      addBtn2: false,
      addBtn3: false,

      branchOffice: false,
      branchOffice1: false,
      branchOffice2: false,
      branchOffice3: false,

      bo1StreetAdress1: "",
      bo1StreetAdress2: "",
      bo1ApiSuite: "",
      bo1City: "",
      bo1ZipCode: "",
      bo1Continent: "",
      bo1Country: "",
      bo1MobileNo: "",
      bo1Tele1: "",
      bo1Tele2: "",

      bo2StreetAdress1: "",
      bo2StreetAdress2: "",
      bo2ApiSuite: "",
      bo2City: "",
      bo2ZipCode: "",
      bo2Continent: "",
      bo2Country: "",
      bo2MobileNo: "",
      bo2Tele1: "",
      bo2Tele2: "",

      bo3StreetAdress1: "",
      bo3StreetAdress2: "",
      bo3ApiSuite: "",
      bo3City: "",
      bo3ZipCode: "",
      bo3Continent: "",
      bo3Country: "",
      bo3MobileNo: "",
      bo3Tele1: "",
      bo3Tele2: ""
    },
    loading: false,
    errors: {}
  };

  componentDidMount() {
    this.populateData();
    if (this.props.auth.user.type === "planner") {
      this.props.getUnBlockedAfricanCountries();
    } else {
      this.props.getUnBlockedContinentsOptions();
    }
  }

  populateData() {
    if (this.props.profile.profile) {
      const profile = this.props.profile.profile;
      profile.streetAdress1 = !isEmpty(profile.streetAdress1)
        ? profile.streetAdress1
        : "";
      profile.streetAdress2 = !isEmpty(profile.streetAdress2)
        ? profile.streetAdress2
        : "";
      profile.apiSuite = !isEmpty(profile.apiSuite) ? profile.apiSuite : "";

      profile.zipCode = !isEmpty(profile.zipCode) ? profile.zipCode : "";
      profile.country = !isEmpty(profile.country) ? profile.country : "";
      profile.continent = !isEmpty(profile.continent) ? profile.continent : "";
      profile.st = !isEmpty(profile.st) ? profile.st : "";

      profile.phoneNo1 = !isEmpty(profile.phoneNo1) ? profile.phoneNo1 : "";
      profile.phoneNo2 = !isEmpty(profile.phoneNo2) ? profile.phoneNo2 : "";
      profile.officeMobileNo = !isEmpty(profile.officeMobileNo)
        ? profile.officeMobileNo
        : "";
      profile.fbAdress = !isEmpty(profile.fbAdress) ? profile.fbAdress : "";
      profile.instaAdress = !isEmpty(profile.instaAdress)
        ? profile.instaAdress
        : "";
      profile.twitterAdress = !isEmpty(profile.twitterAdress)
        ? profile.twitterAdress
        : "";
      profile.youtubeAdress = !isEmpty(profile.youtubeAdress)
        ? profile.youtubeAdress
        : "";
      profile.linkdnAdress = !isEmpty(profile.linkdnAdress)
        ? profile.linkdnAdress
        : "";

      this.setState({
        data: {
          ...this.state.data,
          streetAdress1: profile.streetAdress1,
          streetAdress2: profile.streetAdress2,
          apiSuite: profile.apiSuite,
          continent: profile.continent,
          country: profile.country,
          st: profile.st,
          city: profile.city,
          zipCode: profile.zipCode,

          phoneNo1: profile.phoneNo1,
          phoneNo2: profile.phoneNo2,
          officeMobileNo: profile.officeMobileNo,
          fbAdress: profile.fbAdress,
          instaAdress: profile.instaAdress,
          youtubeAdress: profile.youtubeAdress,
          twitterAdress: profile.twitterAdress,
          linkdnAdress: profile.linkdnAdress,
          branchOffice: profile.branchOffice,

          bo1StreetAdress1: profile.bo1StreetAdress1,
          bo1StreetAdress2: profile.bo1StreetAdress2,
          bo1ApiSuite: profile.bo1ApiSuite,
          bo1City: profile.bo1City,
          bo1ZipCode: profile.bo1ZipCode,
          bo1Continent: profile.bo1Continent,
          bo1Country: profile.bo1Country,
          bo1MobileNo: profile.bo1MobileNo,
          bo1Tele1: profile.bo1Tele1,
          bo1Tele2: profile.bo1Tele2,

          bo2StreetAdress1: profile.bo2StreetAdress1,
          bo2StreetAdress2: profile.bo2StreetAdress2,
          bo2ApiSuite: profile.bo2ApiSuite,
          bo2City: profile.bo2City,
          bo2ZipCode: profile.bo2ZipCode,
          bo2Continent: profile.bo2Continent,
          bo2Country: profile.bo2Country,
          bo2MobileNo: profile.bo2MobileNo,
          bo2Tele1: profile.bo2Tele1,
          bo2Tele2: profile.bo2Tele2,

          bo3StreetAdress1: profile.bo3StreetAdress1,
          bo3StreetAdress2: profile.bo3StreetAdress2,
          bo3ApiSuite: profile.bo3ApiSuite,
          bo3City: profile.bo3City,
          bo3ZipCode: profile.bo3ZipCode,
          bo3Continent: profile.bo3Continent,
          bo3Country: profile.bo3Country,
          bo3MobileNo: profile.bo3MobileNo,
          bo3Tele1: profile.bo3Tele1,
          bo3Tele2: profile.bo3Tele2,

          addBtn: !profile.branchOffice,

          loading: false
        }
      });
    }
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

  getStatesbyCountry = countryCode => {
    let code = countryCode;
    const label = {
      code: code
    };
    this.setState({ data: { ...this.state.data, country: countryCode } });

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

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  onClickSave = () => {
    this.setState({
      data: {
        ...this.state.data,
        disabled: !this.state.data.disabled,
        editdisabled: !this.state.data.editdisabled,
        formdisabled: "disabled"
      }
    });
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { type } = this.props.auth.user;
    const officeFields = {};

    const {
      streetAdress1,
      streetAdress2,
      apiSuite,
      city,
      zipCode,
      country,
      continent,
      st,
      officeMobileNo,
      phoneNo1,
      phoneNo2,
      fbAdress,
      instaAdress,
      twitterAdress,
      youtubeAdress,
      linkdnAdress,
      branchOffice,
      bo1StreetAdress1,
      bo1StreetAdress2,
      bo1ApiSuite,
      bo1City,
      bo1ZipCode,
      bo1Continent,
      bo1Country,
      bo1MobileNo,
      bo1Tele1,
      bo1Tele2,

      bo2StreetAdress1,
      bo2StreetAdress2,
      bo2ApiSuite,
      bo2City,
      bo2ZipCode,
      bo2Continent,
      bo2Country,
      bo2MobileNo,
      bo2Tele1,
      bo2Tele2,

      bo3StreetAdress1,
      bo3StreetAdress2,
      bo3ApiSuite,
      bo3City,
      bo3ZipCode,
      bo3Continent,
      bo3Country,
      bo3MobileNo,
      bo3Tele1,
      bo3Tele2
    } = this.state.data;

    if (streetAdress1) officeFields.streetAdress1 = streetAdress1;
    if (streetAdress2) officeFields.streetAdress2 = streetAdress2;
    if (apiSuite) officeFields.apiSuite = apiSuite;
    if (zipCode) officeFields.zipCode = zipCode;
    if (city) officeFields.city = city;
    if (country) officeFields.country = country;
    if (continent) officeFields.continent = continent;
    if (st) officeFields.st = st;
    if (officeMobileNo) officeFields.officeMobileNo = officeMobileNo;
    if (phoneNo1) officeFields.phoneNo1 = phoneNo1;
    if (phoneNo2) officeFields.phoneNo2 = phoneNo2;
    if (fbAdress) officeFields.fbAdress = fbAdress;
    if (instaAdress) officeFields.instaAdress = instaAdress;
    if (twitterAdress) officeFields.twitterAdress = twitterAdress;
    if (youtubeAdress) officeFields.youtubeAdress = youtubeAdress;
    if (linkdnAdress) officeFields.linkdnAdress = linkdnAdress;
    officeFields.branchOffice = branchOffice;

    if (bo1StreetAdress1) officeFields.bo1StreetAdress1 = bo1StreetAdress1;
    if (bo1StreetAdress2) officeFields.bo1StreetAdress2 = bo1StreetAdress2;
    if (bo1ApiSuite) officeFields.bo1ApiSuite = bo1ApiSuite;
    if (bo1City) officeFields.bo1City = bo1City;
    if (bo1ZipCode) officeFields.bo1ZipCode = bo1ZipCode;
    if (bo1Continent) officeFields.bo1Continent = bo1Continent;
    if (bo1Country) officeFields.bo1Country = bo1Country;
    if (bo1Tele1) officeFields.bo1Tele1 = bo1Tele1;
    if (bo1Tele2) officeFields.bo1Tele2 = bo1Tele2;
    if (bo1MobileNo) officeFields.bo1MobileNo = bo1MobileNo;

    if (bo2StreetAdress1) officeFields.bo2StreetAdress1 = bo2StreetAdress1;
    if (bo2StreetAdress2) officeFields.bo2StreetAdress2 = bo2StreetAdress2;
    if (bo2ApiSuite) officeFields.bo2ApiSuite = bo2ApiSuite;
    if (bo2City) officeFields.bo2City = bo2City;
    if (bo2ZipCode) officeFields.bo2ZipCode = bo2ZipCode;
    if (bo2Continent) officeFields.bo2Continent = bo2Continent;
    if (bo2Country) officeFields.bo2Country = bo2Country;
    if (bo2Tele1) officeFields.bo2Tele1 = bo2Tele1;
    if (bo2Tele2) officeFields.bo2Tele2 = bo2Tele2;
    if (bo2MobileNo) officeFields.bo2MobileNo = bo2MobileNo;

    if (bo3StreetAdress1) officeFields.bo3StreetAdress1 = bo3StreetAdress1;
    if (bo3StreetAdress2) officeFields.bo3StreetAdress2 = bo3StreetAdress2;
    if (bo3ApiSuite) officeFields.bo3ApiSuite = bo3ApiSuite;
    if (bo3City) officeFields.bo3City = bo3City;
    if (bo3ZipCode) officeFields.bo3ZipCode = bo3ZipCode;
    if (bo3Continent) officeFields.bo3Continent = bo3Continent;
    if (bo3Country) officeFields.bo3Country = bo3Country;
    if (bo3Tele1) officeFields.bo3Tele1 = bo3Tele1;
    if (bo3Tele2) officeFields.bo3Tele2 = bo3Tele2;
    if (bo3MobileNo) officeFields.bo3MobileNo = bo3MobileNo;

    officeFields.branchOffice = branchOffice;

    console.log(branchOffice);

    if (type === "planner") {
      this.props.addPlannerOffice(officeFields);
    } else if (type === "vendor") {
      this.props.addVendorOffice(officeFields);
    }
  };

  onClickAddButton = () => {
    console.log("I am clicked");
    this.setState({ data: { ...this.state.data, addBtn: false } });
  };

  render() {
    const { data } = this.state;
    const { type } = this.props.auth.user;

    if (this.state.loading) {
      return <Spinner />;
    }

    if (this.state.data.loading) {
      return <Spinner />;
    }

    const {
      unBlockedContinentOptions,
      countriesByContinentOptions,
      stateOptions,
      cityOptions,
      unBlockedAfricanCountriesOptions
    } = this.props;

    return (
      <OfficeView
        data={data}
        type={type}
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        getCountriesbyContint={this.getCountriesbyContint}
        getStatesbyCountry={this.getStatesbyCountry}
        getCities={this.getCities}
        onClickAddButton={this.onClickAddButton}
        onClickRemoveButton={this.onClickRemoveBtn}
        continentOptions={unBlockedContinentOptions}
        ubAfricanCountryOptions={unBlockedAfricanCountriesOptions}
        countryOptions={countriesByContinentOptions}
        stateOptions={stateOptions}
        cityOptions={cityOptions}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  office: state.planner.office,
  profile: state.profile,
  unBlockedContinentOptions: state.options.unBlockedContinentOptions,
  countriesByContinentOptions: state.options.countriesByContinent,
  stateOptions: state.options.stateOptions,
  cityOptions: state.options.cityOptions,
  unBlockedAfricanCountriesOptions:
    state.options.unBlockedAfricanCountriesOptions
});

export default connect(
  mapStateToProps,
  {
    addPlannerOffice,
    addVendorOffice,
    getUnBlockedContinentsOptions,
    getCountriesByContinentOptions,
    getUnBlockedAfricanCountries,
    getStatesOptions,
    getCityOptions,
    onClickEdit,
    onClickSave
  }
)(Office);
