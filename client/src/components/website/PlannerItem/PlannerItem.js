import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SingleItem from "./SingleItem";
import HeadersArea2 from "./HeadersArea2";
import Spinner from "../../common/Spinner/Spinner";
import {
  getPlannerbyId,
  getPlannerItemPackages
} from "../../../actions/plannerActions";
import {
  getVendorbyId,
  getVendorItemServices
} from "../../../actions/vendorActions";
import { resetPackAndServ } from "../../../actions/common";

class PlannerItem extends Component {
  state = { handler: "", id: "" };
  componentDidMount = () => {
    const { pathname: handler } = this.props.location;
    const { id } = this.props.match.params;

    this.setState({ handler, id }, () => {
      if (this.state.handler) this.handleInitialLoading(this.state.handler, id);
    });
  };

  handleInitialLoading = (handler, id) => {
    const { userId } = this.props.location.state;
    if (handler === `/planners/${id}`) {
      this.props.getPlannerbyId(id);
      this.props.getPlannerItemPackages(userId);
    } else if (handler === `/vendors/${id}`) {
      this.props.getVendorbyId(id);
      this.props.getVendorItemServices(userId);
    }
  };

  componentWillUnmount = () => {
    this.props.resetPackAndServ();
  };

  setUser = () => {
    const {
      plannerItem,
      vendorItem,
      plannerItemPackages,
      vendorItemServices
    } = this.props;
    let user = {};
    let userOffer = {};
    if (this.state.handler === `/planners/${this.state.id}`) {
      user = plannerItem;
      userOffer = plannerItemPackages;
      const userType = "planner";
      return {
        user,
        userOffer,
        userType
      };
    } else {
      user = vendorItem;
      userOffer = vendorItemServices;
      const userType = "vendor";
      return {
        user,
        userOffer,
        userType
      };
    }
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { plannerItem, loading, t } = this.props;

    if (this.props.loading) return <Spinner />;
    if (this.props.plannerItemPackages || this.props.vendorItemServices) {
      const { user, userOffer, userType } = this.setUser();
      return (
        <section className="packages-section d-flex justify-content-center">
          <div
            className={userType === "vendor" ? "container vendor" : "container"}
          >
            <div className="packages-area">
              <Link to={{}}>
                <button
                  style={{
                    paddingBottom: "5px",
                    paddingRight: "5px",
                    fontSize: "2.5rem"
                  }}
                  type="button"
                  className="close"
                  onClick={() => this.goBack()}
                >
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">Close</span>
                </button>
              </Link>

              {loading ? (
                <Spinner />
              ) : (
                <div>
                  <SingleItem userType={userType} plannerItem={user} t={t} />
                  <div className="tabs-area">
                    <HeadersArea2
                      userType={userType}
                      userItem={user}
                      userItemOffer={userOffer}
                      t={t}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  plannerItem: state.planner.plannerItem,
  loading: state.common.loading,
  vendorItem: state.vendor.vendorItem,
  plannerItemPackages: state.planner.plannerItemPackages,
  vendorItemServices: state.vendor.vendorItemServices,
  t: state.common.translatedLabels
});

export default connect(mapStateToProps, {
  getPlannerbyId,
  getPlannerItemPackages,
  getVendorbyId,
  getVendorItemServices,
  resetPackAndServ
})(withRouter(PlannerItem));
