import React, { Component } from "react";
import { connect } from "react-redux";
import PackageItem from "./PackageItem";
import isEmpty from "../../../utils/is-empty";
import Spinner from "../../common/Spinner/Spinner";

class Packages extends Component {
  handleEnvelope = pTitle => {
    window.location.href = `mailto:address@dmail.com?subject=Inquiry on ${pTitle} package`;
  };

  packageStyling = () => {
    const pack = this.props.plannerItemPackages;
    const array = [pack.p1IsEnable, pack.p2IsEnable, pack.p3IsEnable];
    const packages = this.findtotalPackages(array);
    let classNam = "";
    if (packages === 1) classNam = "col-md-12";
    if (packages === 2) classNam = "col-md-6";
    if (packages === 3) classNam = "col-md-4";

    console.log(classNam);
    return classNam;
  };

  findtotalPackages = array => {
    let packages = 0;
    for (var i = 0; i < 3; i++) {
      if (array[i] === true) {
        packages = packages + 1;
      }
    }
    return packages;
  };

  render() {
    const packages = this.props.plannerItemPackages;
    if (isEmpty(packages)) return <Spinner />;
    else
      return (
        <div
          className="tab-pane"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="form-row">
            {packages.p1IsEnable ? (
              <PackageItem
                t={this.props.t}
                classNam={this.packageStyling()}
                pTitle={packages.p1Title}
                pDesc={packages.p1Description}
                isOfr1Enable={packages.p1Ofr1}
                isOfr2Enable={packages.p1Ofr2}
                isOfr3Enable={packages.p2Ofr3}
                offer1={packages.p1Offer1}
                offer2={packages.p1Offer2}
                offer3={packages.p1Offer3}
                offer1Price={packages.p1Offer1Price}
                offer2Price={packages.p1Offer2Price}
                offer3Price={packages.p1Offer3Price}
                handleEnvelope={this.handleEnvelope}
              />
            ) : null}
            {packages.p2IsEnable ? (
              <PackageItem
                t={this.props.t}
                classNam={this.packageStyling()}
                pTitle={packages.p2Title}
                pDesc={packages.p2Description}
                isOfr1Enable={packages.p2Ofr1}
                isOfr2Enable={packages.p2Ofr2}
                isOfr3Enable={packages.p2Ofr3}
                offer1={packages.p2Offer1}
                offer2={packages.p2Offer2}
                offer3={packages.p2Offer3}
                offer1Price={packages.p2Offer1Price}
                offer2Price={packages.p2Offer2Price}
                offer3Price={packages.p2Offer3Price}
                handleEnvelope={this.handleEnvelope}
              />
            ) : null}

            {packages.p3IsEnable ? (
              <PackageItem
                t={this.props.t}
                adminPackage="adminPackage"
                classNam={this.packageStyling()}
                handleEnvelope={this.handleEnvelope}
                pTitle={packages.p3Title}
                pDesc={
                  packages.p3Title === "Bespoke"
                    ? this.props.adminPackage.bespoke
                    : this.props.adminPackage.custom
                }
              />
            ) : null}
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  adminPackage: state.admin.admin.packages
});

export default connect(
  mapStateToProps,
  null
)(Packages);
