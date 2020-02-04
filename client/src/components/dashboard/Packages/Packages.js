import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "../../../utils/is-empty";
import { withRouter } from "react-router-dom";
import { getPackages, addPackages } from "../../../actions/plannerActions";

import Spinner from "../../common/Spinner/Spinner";
import { toast } from "react-toastify";

import PackagesView from "./Packages-View";

import { onClickSave, onClickEdit } from "../../../actions/buttonActions";

class Packages extends Component {
  state = {
    data: {
      p1IsEnable: false,
      p1Description: "",
      p1Offer1: "",
      p1Offer1Price: "",
      p1Ofr1: false,
      p1Offer2: "",
      p1Offer2Price: "",
      p1Ofr2: false,
      p1Offer3: "",
      p1Offer3Price: "",
      p1Ofr3: false,

      p2IsEnable: false,
      p2Description: "",
      p2Offer1: "",
      p2Offer1Price: "",
      p2Ofr1: false,
      p2Offer2: "",
      p2Offer2Price: "",
      p2Ofr2: false,
      p2Offer3: "",
      p2Offer3Price: "",
      p2Ofr3: false,
      p3IsEnable: false
    },
    featuresCompleted: false,
    p1Title: "",
    p2Title: "",
    p3Title: "",
    cwrcp: 0
  };

  componentDidMount() {
    this.assignPacakgeTitles();

    this.props.getPackages();
  }

  assignPacakgeTitles = () => {
    if (this.props.profile) {
      console.log("Profiel hit in CWRCP");
      const profile = this.props.profile;
      if (profile.user.featuresCompleted) {
        this.setState({ featuresCompleted: true });
      }
      if (profile.targetMarket === "stream") {
        this.setState({
          p1Title: "Gold",
          p2Title: "Silver",
          p3Title: "Custom"
        });
      } else if (profile.targetMarket === "up") {
        profile.p1Title = "Diamond";
        profile.p2Title = "Platinum";
        profile.p3Title = "Bespoke";
        console.log("UP hit");
        this.setState({
          p1Title: "Diamond",
          p2Title: "Platinum",
          p3Title: "Bespoke"
        });
      } else if (profile.targetMarket === "mix") {
        console.log("Mix hit");
        this.setState({
          p1Title: "Silver",
          p2Title: "Bronze",
          p3Title: "Custom"
        });
      }
    }
  };
  // componentWillMount = () => {
  //   this.props.getAdminData();
  // };

  componentWillReceiveProps = nextProps => {
    console.log("CWRCP in Packages is Fired");
    console.log(nextProps);

    if (nextProps.packages) {
      const packages = nextProps.packages;

      packages.p1Desecription = !isEmpty(packages.p1Description)
        ? packages.p1Description
        : "";
      packages.p2Desecription = !isEmpty(packages.p2Description)
        ? packages.p2Description
        : "";

      packages.p1Offer1 = !isEmpty(packages.p1Offer1) ? packages.p1Offer1 : "";
      packages.p1Offer2 = !isEmpty(packages.p1Offer2) ? packages.p1Offer2 : "";
      packages.p1Offer3 = !isEmpty(packages.p1Offer3) ? packages.p1Offer3 : "";
      packages.p2Offer1 = !isEmpty(packages.p2Offer1) ? packages.p2Offer1 : "";
      packages.p2Offer2 = !isEmpty(packages.p2Offer2) ? packages.p2Offer2 : "";
      packages.p2Offer3 = !isEmpty(packages.p2Offer3) ? packages.p2Offer3 : "";

      packages.p1Offer1Price = !isEmpty(packages.p1Offer1Price)
        ? packages.p1Offer1Price
        : "";
      packages.p1Offer2Price = !isEmpty(packages.p1Offer2Price)
        ? packages.p1Offer2Price
        : "";
      packages.p1Offer3Price = !isEmpty(packages.p1Offer3Price)
        ? packages.p1Offer3Price
        : "";
      packages.p2Offer1Price = !isEmpty(packages.p2Offer1Price)
        ? packages.p2Offer1Price
        : "";
      packages.p2Offer2Price = !isEmpty(packages.p2Offer2Price)
        ? packages.p2Offer2Price
        : "";
      packages.p2Offer3Price = !isEmpty(packages.p2Offer3Price)
        ? packages.p2Offer3Price
        : "";

      this.setState({
        data: {
          ...this.state.data,
          p1IsEnable: packages.p1IsEnable,
          p2IsEnable: packages.p2IsEnable,
          p3IsEnable: packages.p3IsEnable,
          p1Ofr1: packages.p1Ofr1,
          p1Ofr2: packages.p1Ofr2,
          p1Ofr3: packages.p1Ofr3,
          p2Ofr1: packages.p2Ofr1,
          p2Ofr2: packages.p2Ofr2,
          p2Ofr3: packages.p2Ofr3,
          p1Description: packages.p1Description,
          p2Description: packages.p2Desecription,
          p1Offer1: packages.p1Offer1,
          p1Offer2: packages.p1Offer2,
          p1Offer3: packages.p1Offer3,
          p2Offer1: packages.p2Offer1,
          p2Offer2: packages.p2Offer2,
          p2Offer3: packages.p2Offer3,
          p1Offer1Price: packages.p1Offer1Price,
          p1Offer2Price: packages.p1Offer2Price,
          p1Offer3Price: packages.p1Offer3Price,
          p2Offer1Price: packages.p2Offer1Price,
          p2Offer2Price: packages.p1Offer1Price,
          p2Offer3Price: packages.p2Offer3Price,
          loading: false
        }
      });
    }
  };

  onClickEdit = e => {
    this.props.onClickEdit();
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  handleInputChange = e => {
    console.log(e.target.value);
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      data: { ...this.state.data, [name]: value }
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

    const {
      p1IsEnable,
      p1Description,
      p1Offer1,
      p1Offer1Price,
      p1Ofr1,
      p1Offer2,
      p1Offer2Price,
      p1Ofr2,
      p1Offer3,
      p1Offer3Price,
      p1Ofr3,

      p2IsEnable,
      p2Description,
      p2Offer1,
      p2Offer1Price,
      p2Ofr1,
      p2Offer2,
      p2Offer2Price,
      p2Ofr2,
      p2Offer3,
      p2Offer3Price,
      p2Ofr3,
      p3IsEnable
    } = this.state.data;
    const { featuresCompleted } = this.props.profile.user;
    const { p1Title, p2Title, p3Title } = this.state;
    if (!p1IsEnable) {
      toast.error("Please Add Initial Package");
    } else {
      const packageFields = {};

      packageFields.p1Title = p1Title;
      packageFields.p1IsEnable = p1IsEnable;
      packageFields.p1Description = p1Description;
      packageFields.p1Offer1 = p1Offer1;
      packageFields.p1Offer1Price = p1Offer1Price;
      packageFields.p1Ofr1 = p1Ofr1;
      packageFields.p1Offer2 = p1Offer2;
      packageFields.p1Offer2Price = p1Offer2Price;
      packageFields.p1Ofr2 = p1Ofr2;
      packageFields.p1Offer3 = p1Offer3;
      packageFields.p1Offer3Price = p1Offer3Price;
      packageFields.p1Ofr3 = p1Ofr3;
      packageFields.p2Title = p2Title;
      packageFields.p2IsEnable = p2IsEnable;
      packageFields.p2Description = p2Description;
      packageFields.p2Offer1 = p2Offer1;
      packageFields.p2Offer1Price = p2Offer1Price;
      packageFields.p2Ofr1 = p2Ofr1;
      packageFields.p2Offer2 = p2Offer2;
      packageFields.p2Offer2Price = p2Offer2Price;
      packageFields.p2Ofr2 = p2Ofr2;
      packageFields.p2Offer3 = p2Offer3;
      packageFields.p2Offer3Price = p2Offer3Price;
      packageFields.p2Ofr3 = p2Ofr3;
      packageFields.p3Title = p3Title;
      packageFields.p3IsEnable = p3IsEnable;
      this.props.addPackages(
        packageFields,
        featuresCompleted,
        this.props.history
      );
      toast.success("Successfully Updated Packages");
      this.onClickSave();
    }
  };

  render() {
    const { adminPackages, button, t } = this.props;

    const { data, p1Title, p2Title, p3Title } = this.state;
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <PackagesView
        adminPackages={adminPackages}
        data={data}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        handleInputChange={this.handleInputChange}
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
        p1Title={p1Title}
        p2Title={p2Title}
        p3Title={p3Title}
        button={button}
        featuresCompleted={this.state.featuresCompleted}
        t={t}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  adminPackages: state.admin.admin.packages,
  profile: state.profile.profile,
  packages: state.planner.packages,
  button: state.button,
  loading: state.common.loading,
  packagesLoaded: state.common.packagesLoaded,
  dummy: state.common.dummy,
  t: state.common.dashboardLabels
});

export default connect(
  mapStateToProps,
  { addPackages, getPackages, onClickEdit, onClickSave }
)(withRouter(Packages));
