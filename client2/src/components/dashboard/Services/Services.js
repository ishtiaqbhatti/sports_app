import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addVendorServices,
  getVendorServices
} from "../../../actions/vendorActions";
import { toast } from "react-toastify";
import ServicesView from "./ServicesView";
import Spinner from "../../common/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import isEmpty from "../../../utils/is-empty";
import { onClickSave, onClickEdit } from "../../../actions/buttonActions";

class Services extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false,
      formdisabled: "disabled",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      title6: "",
      title7: "",
      title8: "",
      title9: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
      desc6: "",
      desc7: "",
      desc8: "",
      desc9: "",
      loading: true
    },
    loading: false,
    errors: {},
    featuresCompleted: false
  };

  componentDidMount = () => {
    const { profile } = this.props;
    if (profile.user.featuresCompleted) {
      this.setState({ featuresCompleted: true });
      this.props.getVendorServices();
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log("CWRCP hit");
    const services = nextProps.services;

    if (services) {
      services.title1 = !isEmpty(services.title1) ? services.title1 : "";
      services.title2 = !isEmpty(services.title2) ? services.title2 : "";
      services.title3 = !isEmpty(services.title3) ? services.title3 : "";
      services.title4 = !isEmpty(services.title4) ? services.title4 : "";
      services.title5 = !isEmpty(services.title5) ? services.title5 : "";
      services.title6 = !isEmpty(services.title6) ? services.title6 : "";
      services.title7 = !isEmpty(services.title7) ? services.title7 : "";
      services.title8 = !isEmpty(services.title8) ? services.title8 : "";
      services.title9 = !isEmpty(services.title9) ? services.title9 : "";

      services.desc1 = !isEmpty(services.desc1) ? services.desc1 : "";
      services.desc2 = !isEmpty(services.desc2) ? services.desc2 : "";
      services.desc3 = !isEmpty(services.desc3) ? services.desc3 : "";
      services.desc4 = !isEmpty(services.desc4) ? services.desc4 : "";
      services.desc5 = !isEmpty(services.desc5) ? services.desc5 : "";
      services.desc6 = !isEmpty(services.desc6) ? services.desc6 : "";
      services.desc7 = !isEmpty(services.desc7) ? services.desc7 : "";
      services.desc8 = !isEmpty(services.desc8) ? services.desc8 : "";
      services.desc9 = !isEmpty(services.desc9) ? services.desc9 : "";

      this.setState({
        data: {
          ...this.state.data,
          title1: services.title1,
          title2: services.title2,
          title3: services.title3,
          title4: services.title4,
          title5: services.title5,
          title6: services.title6,
          title7: services.title7,
          title8: services.title8,
          title9: services.title9,
          desc1: services.desc1,
          desc2: services.desc2,
          desc3: services.desc3,
          desc4: services.desc4,
          desc5: services.desc5,
          desc6: services.desc6,
          desc7: services.desc7,
          desc8: services.desc8,
          desc9: services.desc9,
          loading: false
        }
      });
    }
  }

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onClickEdit = e => {
    this.props.onClickEdit();
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.data.title1 && !this.state.data.desc1) {
      toast.error("You must need to add First Service");
    } else {
      let serviceFields = {};

      const {
        title1,
        title2,
        title3,
        title4,
        title5,
        title6,
        title7,
        title8,
        title9,
        desc1,
        desc2,
        desc3,
        desc4,
        desc5,
        desc6,
        desc7,
        desc8,
        desc9
      } = this.state.data;

      serviceFields.title1 = title1;
      serviceFields.title2 = title2;
      serviceFields.title3 = title3;
      serviceFields.title4 = title4;
      serviceFields.title5 = title5;
      serviceFields.title6 = title6;
      serviceFields.title7 = title7;
      serviceFields.title8 = title8;
      serviceFields.title9 = title9;
      serviceFields.desc1 = desc1;
      serviceFields.desc2 = desc2;
      serviceFields.desc3 = desc3;
      serviceFields.desc4 = desc4;
      serviceFields.desc5 = desc5;
      serviceFields.desc6 = desc6;
      serviceFields.desc7 = desc7;
      serviceFields.desc8 = desc8;
      serviceFields.desc9 = desc9;

      const { featuresCompleted } = this.props.profile.user;
      this.props.addVendorServices(
        serviceFields,
        featuresCompleted,
        this.props.history
      );
      toast.success("Succesfully Updated the Services");
      this.onClickSave();
    }
  };

  render() {
    const { data } = this.state;
    const { t } = this.props;
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <ServicesView
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        data={data}
        button={this.props.button}
        featuresCompleted={this.state.featuresCompleted}
        t={t}
      />
    );
  }
}

const mapStateToProps = state => ({
  services: state.vendor.services,
  profile: state.profile.profile,
  button: state.button,
  t: state.common.dashboardLabels
});

export default connect(
  mapStateToProps,
  { addVendorServices, getVendorServices, onClickEdit, onClickSave }
)(withRouter(Services));
