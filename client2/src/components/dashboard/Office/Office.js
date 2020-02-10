import React, { Component } from "react";
import { connect } from "react-redux";
import OfficeView from "./OfficeView";
import isEmpty from "../../../utils/is-empty";
import {
  getUnBlockedContinentsOptions,
  getUnBlockedAfricanCountries,
  getCountriesByContinentOptions,
  getBranch1Countries,
  getBranch2Countries,
  getBranch3Countries,
  getStatesOptions,
  getBranch1States,
  getBranch2States,
  getBranch3States,
  getCityOptions,
  getBranch1City,
  getBranch2City,
  getBranch3City
} from "../../../actions/optionActions";
import { onClickSave, onClickEdit } from "../../../actions/buttonActions";
import { addPlannerOffice } from "../../../actions/plannerActions";
import {
  addVendorOffice,
  clearLocationOptions
} from "../../../actions/vendorActions";
import Spinner from "../../common/Spinner/Spinner";
import { toast } from "react-toastify";

class Office extends Component {
  state = {
    officeData: {
      streetAdress1: "",
      streetAdress2: "",
      apiSuite: "",
      zipCode: "",
      continent: "",
      country: "",
      st: "",
      city: "",
      officeMobileNo: "",
      phoneNo2: "",
      phoneNo3: "",
      fbAdress: "",
      instaAdress: "",
      twitterAdress: "",
      youtubeAdress: "",
      linkdnAdress: ""
    },
    branchOfficeData1: {
      firstBtn: true,
      firstForm: false,
      bo1StreetAdress1: "",
      bo1StreetAdress2: "",
      bo1ApiSuite: "",
      bo1ZipCode: "",
      bo1Continent: "",
      bo1Country: "",
      bo1State: "",
      bo1City: "",
      bo1MobileNo: "",
      bo1Tele1: "",
      bo1Tele2: ""
    },
    branchOfficeData2: {
      secondBtn: false,
      secondForm: false,
      bo2StreetAdress1: "",
      bo2StreetAdress2: "",
      bo2ApiSuite: "",
      bo2City: "",
      bo2ZipCode: "",
      bo2Continent: "",
      bo2Country: "",
      bo2State: "",
      bo2MobileNo: "",
      bo2Tele1: "",
      bo2Tele2: ""
    },
    branchOfficeData3: {
      thirdBtn: false,
      thirdForm: false,
      bo3StreetAdress1: "",
      bo3StreetAdress2: "",
      bo3ApiSuite: "",
      bo3City: "",
      bo3ZipCode: "",
      bo3Continent: "",
      bo3Country: "",
      bo3State: "",
      bo3MobileNo: "",
      bo3Tele1: "",
      bo3Tele2: ""
    },
    firstBtn: true,
    firstForm: false,
    secondBtn: false,
    secondForm: false,
    thirdBtn: false,
    thirdForm: false,
    branchOffice1: false,
    branchOffice2: false,
    branchOffice3: false
  };

  componentDidMount() {
    this.populateData();
    this.props.clearLocationOptions();
    if (this.props.auth.user.type === "planner") {
      this.props.getUnBlockedAfricanCountries();
      this.props.getUnBlockedContinentsOptions();
    } else {
      this.props.getUnBlockedContinentsOptions();
    }
  }

  populateData = () => {
    const profile = this.props.profile;
    if (profile) {
      profile.streetAdress1 = !isEmpty(profile.streetAdress1)
        ? profile.streetAdress1
        : "";
      profile.streetAdress2 = !isEmpty(profile.streetAdress2)
        ? profile.streetAdress2
        : "";
      profile.apiSuite = !isEmpty(profile.apiSuite) ? profile.apiSuite : "";
      profile.zipCode = !isEmpty(profile.zipCode) ? profile.zipCode : "";
      profile.continent = !isEmpty(profile.continent) ? profile.continent : "";
      profile.country = !isEmpty(profile.country) ? profile.country : "";
      profile.st = !isEmpty(profile.st) ? profile.st : "";
      profile.city = !isEmpty(profile.city) ? profile.city : "";
      profile.phoneNo2 = !isEmpty(profile.phoneNo2) ? profile.phoneNo2 : "";
      profile.phoneNo3 = !isEmpty(profile.phoneNo3) ? profile.phoneNo3 : "";
      profile.officeMobileNo = !isEmpty(profile.officeMobileNo)
        ? profile.officeMobileNo
        : "";
      profile.fbAdress = !isEmpty(profile.fbAdress) ? profile.fbAdress : "";
      profile.instaAdress = !isEmpty(profile.instaAdress)
        ? profile.instaAdress
        : "";
      profile.youtubeAdress = !isEmpty(profile.youtubeAdress)
        ? profile.youtubeAdress
        : "";
      profile.linkdnAdress = !isEmpty(profile.linkdnAdress)
        ? profile.linkdnAdress
        : "";
      profile.twitterAdress = !isEmpty(profile.twitterAdress)
        ? profile.twitterAdress
        : "";
      this.setState({
        officeData: {
          ...this.state.officeData,
          streetAdress1: profile.streetAdress1,
          streetAdress2: profile.streetAdress2,
          apiSuite: profile.apiSuite,
          zipCode: profile.zipCode,
          continent: profile.continent,
          country: profile.country,
          st: profile.st,
          city: profile.city,
          officeMobileNo: profile.officeMobileNo,
          phoneNo2: profile.phoneNo2,
          phoneNo3: profile.phoneNo3,
          fbAdress: profile.fbAdress,
          instaAdress: profile.instaAdress,
          youtubeAdress: profile.youtubeAdress,
          twitterAdress: profile.twitterAdress,
          linkdnAdress: profile.linkdnAdress
        }
      });
    }

    if (profile.branchOffice1) {
      this.setState({
        branchOfficeData1: {
          ...this.state.branchOfficeData1,
          firstBtn: !profile.branchOffice1,
          firstForm: profile.branchOffice1,
          bo1StreetAdress1: profile.branchOfficeData1.bo1StreetAdress1,
          bo1StreetAdress2: profile.branchOfficeData1.bo1StreetAdress2,
          bo1ApiSuite: profile.branchOfficeData1.bo1ApiSuite,
          bo1ZipCode: profile.branchOfficeData1.bo1ZipCode,
          bo1Continent: profile.branchOfficeData1.bo1Continent,
          bo1Country: profile.branchOfficeData1.bo1Country,
          bo1State: profile.branchOfficeData1.bo1State,
          bo1City: profile.branchOfficeData1.bo1City,
          bo1MobileNo: profile.branchOfficeData1.bo1MobileNo,
          bo1Tele1: profile.branchOfficeData1.bo1Tele1,
          bo1Tele2: profile.branchOfficeData1.bo1Tele2
        }
      });
    }

    if (profile.branchOffice2) {
      this.setState({
        branchOfficeData2: {
          ...this.state.branchOfficeData2,
          secondBtn: !profile.branchOffice2,
          secondForm: profile.branchOffice2,
          bo2StreetAdress1: profile.branchOfficeData2.bo2StreetAdress1,
          bo2StreetAdress2: profile.branchOfficeData2.bo2StreetAdress2,
          bo2ApiSuite: profile.branchOfficeData2.bo2ApiSuite,
          bo2ZipCode: profile.branchOfficeData2.bo2ZipCode,
          bo2Continent: profile.branchOfficeData2.bo2Continent,
          bo2Country: profile.branchOfficeData2.bo2Country,
          bo2State: profile.branchOfficeData2.bo2State,
          bo2City: profile.branchOfficeData2.bo2City,
          bo2MobileNo: profile.branchOfficeData2.bo2MobileNo,
          bo2Tele1: profile.branchOfficeData2.bo2Tele1,
          bo2Tele2: profile.branchOfficeData2.bo2Tele2
        }
      });
    }

    if (profile.branchOffice3) {
      this.setState({
        branchOfficeData3: {
          ...this.state.branchOfficeData3,
          thirdBtn: !profile.branchOffice3,
          thirdForm: profile.branchOffice3,
          bo3StreetAdress1: profile.branchOfficeData3.bo3StreetAdress1,
          bo3StreetAdress2: profile.branchOfficeData3.bo3StreetAdress2,
          bo3ApiSuite: profile.branchOfficeData3.bo3ApiSuite,
          bo3ZipCode: profile.branchOfficeData3.bo3ZipCode,
          bo3Continent: profile.branchOfficeData3.bo3Continent,
          bo3Country: profile.branchOfficeData3.bo3Country,
          bo3State: profile.branchOfficeData3.bo3State,
          bo3City: profile.branchOfficeData3.bo3City,
          bo3MobileNo: profile.branchOfficeData3.bo3MobileNo,
          bo3Tele1: profile.branchOfficeData3.bo3Tele1,
          bo3Tele3: profile.branchOfficeData3.bo3Tele2
        }
      });
    }
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  onChange = e => {
    this.setState({
      officeData: {
        ...this.state.officeData,
        [e.target.name]: e.target.value
      }
    });
  };

  onChange1 = e => {
    this.setState({
      branchOfficeData1: {
        ...this.state.branchOfficeData1,
        [e.target.name]: e.target.value
      }
    });
  };

  onChange2 = e => {
    this.setState({
      branchOfficeData2: {
        ...this.state.branchOfficeData2,
        [e.target.name]: e.target.value
      }
    });
  };

  onChange3 = e => {
    this.setState({
      branchOfficeData3: {
        ...this.state.branchOfficeData3,
        [e.target.name]: e.target.value
      }
    });
  };

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  getCountriesbyContint = e => {
    e.preventDefault();
    this.setState({
      officeData: { ...this.state.officeData, continent: e.target.value }
    });

    const continents = {
      continent: e.target.value
    };
    this.props.getCountriesByContinentOptions(continents);
  };

  getBranch1Countries = e => {
    e.preventDefault();
    this.setState({
      branchOfficeData1: {
        ...this.state.branchOfficeData1,
        bo1Continent: e.target.value
      }
    });

    const continents = {
      continent: e.target.value
    };
    this.props.getBranch1Countries(continents);
  };

  getBranch2Countries = e => {
    e.preventDefault();
    this.setState({
      branchOfficeData2: {
        ...this.state.branchOfficeData2,
        bo2Continent: e.target.value
      }
    });

    const continents = {
      continent: e.target.value
    };
    this.props.getBranch2Countries(continents);
  };

  getBranch3Countries = e => {
    e.preventDefault();
    this.setState({
      branchOfficeData3: {
        ...this.state.branchOfficeData3,
        bo3Continent: e.target.value
      }
    });

    const continents = {
      continent: e.target.value
    };
    this.props.getBranch3Countries(continents);
  };

  getStatesbyCountry = countryCode => {
    let code = countryCode;
    const label = {
      code: code
    };
    this.setState({
      officeData: { ...this.state.officeData, country: countryCode }
    });
    console.log(label);

    this.props.getStatesOptions(label);
  };

  getStatesbyCountryV = e => {
    e.preventDefault();
    let code = e.target.value;
    const label = {
      code: code
    };
    this.setState({ officeData: { ...this.state.officeData, country: code } });

    this.props.getStatesOptions(label);
  };

  getBranch1States = e => {
    e.preventDefault();
    let code = e.target.value;
    const label = {
      code: code
    };
    this.setState({
      branchOfficeData1: { ...this.state.branchOfficeData1, bo1Country: code }
    });

    this.props.getBranch1States(label);
  };

  getBranch2States = e => {
    e.preventDefault();
    let code = e.target.value;
    const label = {
      code: code
    };
    this.setState({
      branchOfficeData2: { ...this.state.branchOfficeData2, bo2Country: code }
    });

    this.props.getBranch2States(label);
  };

  getBranch3States = e => {
    e.preventDefault();
    let code = e.target.value;
    const label = {
      code: code
    };
    this.setState({
      branchOfficeData3: { ...this.state.branchOfficeData3, bo3Country: code }
    });

    this.props.getBranch3States(label);
  };

  getCities = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    const stValue = {
      label: label
    };
    this.setState({
      officeData: { ...this.state.officeData, st: stValue.label }
    });

    let stateValue = e.target.value;
    const data = {
      code: stateValue
    };

    this.props.getCityOptions(data);
  };

  getBranch1City = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    const stValue = {
      label: label
    };
    this.setState({
      branchOfficeData1: {
        ...this.state.branchOfficeData1,
        bo1State: stValue.label
      }
    });

    let stateValue = e.target.value;
    const data = {
      code: stateValue
    };

    this.props.getBranch1City(data);
  };

  getBranch2City = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    const stValue = {
      label: label
    };
    this.setState({
      branchOfficeData2: {
        ...this.state.branchOfficeData2,
        bo2State: stValue.label
      }
    });

    let stateValue = e.target.value;
    const data = {
      code: stateValue
    };

    this.props.getBranch2City(data);
  };

  getBranch3City = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    const stValue = {
      label: label
    };
    this.setState({
      branchOfficeData3: {
        ...this.state.branchOfficeData3,
        bo3State: stValue.label
      }
    });

    let stateValue = e.target.value;
    const data = {
      code: stateValue
    };

    this.props.getBranch3City(data);
  };

  onClickAddButton = e => {
    const { id } = e.target;
    if (id === "first_add_btn") {
      this.setState({
        branchOfficeData1: {
          ...this.state.branchOfficeData1,
          firstBtn: false,
          firstForm: true
        }
      });
    } else if (id === "second_add_btn") {
      this.setState({
        branchOfficeData2: {
          ...this.state.branchOfficeData2,
          secondBtn: false,
          secondForm: true
        }
      });
    } else {
      this.setState({
        branchOfficeData3: {
          ...this.state.branchOfficeData3,
          thirdBtn: false,
          thirdForm: true
        }
      });
    }
  };

  onClickRemoveBtn = e => {
    console.log("I am hit in onClickRemoveBtn");
    const { id } = e.target;
    if (id === "first_form") {
      this.setState({
        branchOfficeData1: {
          ...this.state.branchOfficeData1,
          firstBtn: true,
          firstForm: false
        }
      });
    } else if (id === "second_form") {
      this.setState({
        branchOfficeData2: {
          ...this.state.branchOfficeData2,
          secondBtn: true,
          secondForm: false
        }
      });
    } else {
      this.setState({
        branchOfficeData3: {
          ...this.state.branchOfficeData3,
          thirdBtn: true,
          thirdForm: false
        }
      });
    }
  };

  check() {
    const { firstForm } = this.state.branchOfficeData1;
    const { secondForm } = this.state.branchOfficeData2;
    const { thirdForm } = this.state.branchOfficeData3;
    if (firstForm) return true;
    if (secondForm) return true;
    if (thirdForm) return true;
    return false;
  }

  onSubmit = e => {
    e.preventDefault();
    const { firstForm } = this.state.branchOfficeData1;
    const { secondForm } = this.state.branchOfficeData2;
    const { thirdForm } = this.state.branchOfficeData3;
    const { officeData } = this.state;

    const { type } = this.props.auth.user;
    if (type === "vendor") {
      this.props.addVendorOffice(officeData);
    } else {
      officeData.branchOffice = this.check();

      if (firstForm) {
        officeData.branchOffice1 = true;
        officeData.branchOfficeData1 = this.state.branchOfficeData1;
      }
      if (secondForm) {
        officeData.branchOffice2 = true;
        officeData.branchOfficeData2 = this.state.branchOfficeData2;
      }
      if (thirdForm) {
        officeData.branchOffice3 = true;
        officeData.branchOfficeData3 = this.state.branchOfficeData3;
      }

      this.props.addPlannerOffice(officeData);
    }

    this.onClickSave();
    this.props.getUnBlockedContinentsOptions();
    toast.success("Successfully Updated the Office");
  };

  render() {
    const {
      officeData,
      branchOfficeData1,
      branchOfficeData2,
      branchOfficeData3
    } = this.state;
    const {
      button,
      unBlockedContinentOptions,
      countriesByContinentOptions,
      stateOptions,
      cityOptions,
      unBlockedAfricanCountriesOptions
    } = this.props;
    const { type } = this.props.auth.user;
    const { t } = this.props;

    return (
      <OfficeView
        officeData={officeData}
        onClickAddBtn={this.onClickAddButton}
        onClickRemoveBtn={this.onClickRemoveBtn}
        branchOfficeData1={branchOfficeData1}
        branchOfficeData2={branchOfficeData2}
        branchOfficeData3={branchOfficeData3}
        button={button}
        onChange={this.onChange}
        onChange1={this.onChange1}
        onChange2={this.onChange2}
        onChange3={this.onChange3}
        type={type}
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
        getCountriesbyContint={this.getCountriesbyContint}
        getStatesbyCountry={this.getStatesbyCountry}
        getStatesbyCountryV={this.getStatesbyCountryV}
        getCities={this.getCities}
        continentOptions={unBlockedContinentOptions}
        ubAfricanCountryOptions={unBlockedAfricanCountriesOptions}
        countryOptions={countriesByContinentOptions}
        stateOptions={stateOptions}
        cityOptions={cityOptions}
        addBtn={this.state.addBtn}
        onSubmit={this.onSubmit}
        getBranch1Countries={this.getBranch1Countries}
        getBranch2Countries={this.getBranch2Countries}
        getBranch3Countries={this.getBranch3Countries}
        getBranch1States={this.getBranch1States}
        getBranch2States={this.getBranch2States}
        getBranch3States={this.getBranch3States}
        getBranch1City={this.getBranch1City}
        getBranch2City={this.getBranch2City}
        getBranch3City={this.getBranch3City}
        bo1Co={this.props.bo1Co}
        bo2Co={this.props.bo2Co}
        bo3Co={this.props.bo3Co}
        bo1St={this.props.bo1St}
        bo2St={this.props.bo2St}
        bo3St={this.props.bo3St}
        bo1Ci={this.props.bo1Ci}
        bo2Ci={this.props.bo2Ci}
        bo3Ci={this.props.bo3Ci}
        t={t}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  office: state.planner.office,
  profile: state.profile.profile,
  unBlockedContinentOptions: state.options.unBlockedContinentOptions,
  countriesByContinentOptions: state.options.countriesByContinentOptions,
  bo1Co: state.options.countriesByContinentBranch1,
  bo2Co: state.options.countriesByContinentBranch2,
  bo3Co: state.options.countriesByContinentBranch3,
  stateOptions: state.options.stateOptions,
  bo1St: state.options.stateBranch1,
  bo2St: state.options.stateBranch2,
  bo3St: state.options.stateBranch3,
  bo1Ci: state.options.cityBranch1,
  bo2Ci: state.options.cityBranch2,
  bo3Ci: state.options.cityBranch3,

  cityOptions: state.options.cityOptions,
  unBlockedAfricanCountriesOptions:
    state.options.unBlockedAfricanCountriesOptions,
  button: state.button,
  loading: state.common.loading,
  t: state.common.dashboardLabels
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
    onClickSave,
    onClickEdit,
    clearLocationOptions,
    getBranch1Countries,
    getBranch2Countries,
    getBranch3Countries,
    getBranch1States,
    getBranch2States,
    getBranch3States,
    getBranch1City,
    getBranch2City,
    getBranch3City
  }
)(Office);
