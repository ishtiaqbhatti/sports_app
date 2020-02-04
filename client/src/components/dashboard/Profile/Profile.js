import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner/Spinner";
import { toast } from "react-toastify";
import { logoutUser } from "../../../actions/authActions";

import isEmpty from "../../../utils/is-empty";

import { withRouter } from "react-router-dom";
import { registerPlannerProfile } from "../../../actions/plannerActions";
import { registerVendorProfile } from "../../../actions/vendorActions";
// import {
//   getCurrentProfile,
//   addVendorProfile
// } from "../../../reduxController/actions/profileActions";

import ProfileView from "./ProfileView";
import { onClickSave, onClickEdit } from "../../../actions/buttonActions";
import {
  getBusinessTitleOptions,
  getGenderOptions
} from "../../../actions/optionActions";
class Profile extends Component {
  state = {
    data: {
      profileCompleted: false,
      title: "",
      firstName: "",
      lastName: "",
      description: "",
      selectedOption: "",
      cateringCapacity: "200",
      businessTitle: "",
      website: "",
      phoneNo1: ""
    },
    errors: {}
  };

  canBeSubmitted() {
    const {
      title,
      selectedOption,
      firstName,
      description,
      lastName,
      categories,
      eventTypes,
      phoneNo1,
      businessTitle
    } = this.state.data;
    const cat = !isEmpty(categories) ? categories : "";
    const eventT = !isEmpty(eventTypes) ? eventTypes : "";
    return (
      title.length > 1 &&
      selectedOption.length > 0 &&
      firstName.length > 2 &&
      lastName.length > 0 &&
      description.length > 20 &&
      cat.length > 0 &&
      businessTitle.length > 0 &&
      phoneNo1.length > 0
    );
  }

  componentDidMount = () => {
    this.props.getBusinessTitleOptions();
    this.props.getGenderOptions();
  };

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  onLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/login");
  };

  handleCategoriesChange = selectedOption => {
    this.setState(
      { data: { ...this.state.data, categories: selectedOption } },
      () => {
        if (isEmpty(this.state.data.categories)) {
          this.setState({ data: { ...this.state.data, categories: "" } });
        }
      }
    );
  };

  handleEventChange = selectedOption => {
    this.setState(
      { data: { ...this.state.data, eventTypes: selectedOption } },
      () => {
        if (isEmpty(this.state.data.eventTypes)) {
          this.setState({ data: { ...this.state.data, eventTypes: "" } });
        }
      }
    );
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.profile) {
      const profile = nextProps.profile;
      if (profile.user) {
        profile.profileCompleted = profile.user.profileCompleted ? true : false;
      }

      profile.title = !isEmpty(profile.title) ? profile.title : "";
      profile.firstName = !isEmpty(profile.firstName) ? profile.firstName : "";
      profile.lastName = !isEmpty(profile.lastName) ? profile.lastName : "";
      profile.targetMarket = !isEmpty(profile.targetMarket)
        ? profile.targetMarket
        : "";
      profile.description = !isEmpty(profile.description)
        ? profile.description
        : "";
      profile.cateringCapacity = !isEmpty(profile.cateringCapacity)
        ? profile.cateringCapacity
        : "";
      profile.categories = !isEmpty(profile.categories)
        ? profile.categories
        : "";
      profile.eventTypes = !isEmpty(profile.eventTypes)
        ? profile.eventTypes
        : "";
      profile.businessTitle = !isEmpty(profile.businessTitle)
        ? profile.businessTitle
        : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.phoneNo1 = !isEmpty(profile.phoneNo1) ? profile.phoneNo1 : "";

      this.setState({
        data: {
          ...this.state.data,
          title: profile.title,
          firstName: profile.firstName,
          lastName: profile.lastName,
          selectedOption: profile.targetMarket,
          description: profile.description,
          cateringCapacity: profile.cateringCapacity,
          businessTitle: profile.businessTitle,
          website: profile.website,
          phoneNo1: profile.phoneNo1,
          categories: profile.categories,
          eventTypes: profile.eventTypes,
          profileCompleted: profile.profileCompleted
        }
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { type } = this.props.auth.user;

    const { data } = this.state;
    const profile = {};
    profile.title = data.title;
    profile.firstName = data.firstName;
    profile.lastName = data.lastName;
    profile.description = data.description;
    profile.targetMarket = data.selectedOption;
    profile.cateringCapacity = data.cateringCapacity;
    profile.businessTitle = data.businessTitle;
    profile.website = data.website;
    profile.phoneNo1 = data.phoneNo1;
    profile.categories = data.categories;
    profile.eventTypes = data.eventTypes;

    if (type === "planner") {
      this.props.registerPlannerProfile(
        profile,
        this.props.profile.user.profileCompleted,
        this.props.history
      );
    } else if (type === "vendor") {
      this.props.registerVendorProfile(
        profile,
        this.props.profile.user.profileCompleted,
        this.props.history
      );
    }
    this.onClickSave();
  };

  handleOptionChange = changeEvent => {
    // this.setState({
    //   selectedOption: changeEvent.target.value
    // });
    const selectedOption = changeEvent.target.value;
    this.setState({
      data: { ...this.state.data, selectedOption: selectedOption }
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.errors !== prevProps.errors) {
      toast.error("Failed to Save. Please try Again");
    }
    if (this.props.profile !== prevProps.profile) {
      toast.success("Successfully Updated the Profile");
    }
  };

  render() {
    const { data, errors } = this.state;
    const { user } = this.props.auth;

    const {
      cateringOptions,
      button,
      categoriesOptions,
      eventTypeOptions,
      businessTitleOptions,
      genderOptions,
      t
    } = this.props;

    // categoriesOptions.shift();
    // eventTypeOptions.shift();

    const isEnabled = this.canBeSubmitted();

    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <ProfileView
        t={t}
        data={data}
        errors={errors}
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
        onSubmit={this.onSubmit}
        cateringOptions={cateringOptions}
        categoryOptions={categoriesOptions}
        eventTypeOptions={eventTypeOptions}
        businessTitleOptions={businessTitleOptions}
        genderOptions={genderOptions}
        onChange={this.onChange}
        handleCategoriesChange={this.handleCategoriesChange}
        handleEventChange={this.handleEventChange}
        handleOptionChange={this.handleOptionChange}
        user={user}
        button={button}
        isEnabled={isEnabled}
        onLogout={this.onLogout}
      />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  cateringOptions: state.options.cateringOptions,
  categoriesOptions: state.options.categoriesOptions,
  eventTypeOptions: state.options.eventTypeOptions,
  businessTitleOptions: state.options.businessTitleOptions,
  genderOptions: state.options.genderOptions,
  auth: state.auth,
  errors: state.errors.errors,
  button: state.button,
  loading: state.common.loading,
  t: state.common.dashboardLabels
});

export default connect(mapStateToProps, {
  registerPlannerProfile,
  registerVendorProfile,
  onClickEdit,
  onClickSave,
  logoutUser,
  getBusinessTitleOptions,
  getGenderOptions
})(withRouter(Profile));
