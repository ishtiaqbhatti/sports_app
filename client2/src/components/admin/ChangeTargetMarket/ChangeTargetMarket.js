import React, { Component } from "react";
import SaveButton from "../../ui/Buttons/SaveButton";

import { connect } from "react-redux";
import { changeTargetMarketByAdmin } from "../../../actions/adminActions";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

class ChangeTargetMarket extends Component {
  state = {
    selectedOption: ""
  };

  componentDidMount() {
    const { targetMarket } = this.props.location.state;

    this.setState({
      selectedOption: targetMarket
    });
  }

  handleOptionChange = changeEvent => {
    const selectedOption = changeEvent.target.value;
    this.setState({
      selectedOption: selectedOption
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let data = {};

    data.targetMarket = this.state.selectedOption;
    data.id = this.props.location.state.user_id;
    data.userType = this.props.location.state.userType;

    this.props.changeTargetMarketByAdmin(data);
    toast.success("Successfully Updated the Target Market");
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="tab-pane" role="tabpanel" id="services">
        <div className="row">
          <div className="col-md-12 text-left align-self-center">
            <h4 className="font-18 mb-0 tabs-title">Change Target Market</h4>
          </div>
          <div className="bd-top" />
          <form id="profile" onSubmit={this.onSubmit} noValidate text-center>
            <div className="row">
              <div className="col-md-12">
                {/* <h4 className="font-18 mb-0 tabs-title">Target Market</h4> */}
              </div>
              <div className="col-md-12 m-t-20 custom-xs-center">
                <div className="d-flex input-radio ">
                  <div className="input-container">
                    <label>
                      <span className="radio">
                        <input
                          name="type"
                          value="mix"
                          checked={this.state.selectedOption === "mix"}
                          type="radio"
                          onChange={this.handleOptionChange}
                        />
                        <span
                          className="radio-value-profile"
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className="pop-up-text-icon"
                        aria-label="Available packages are: Silver, Bronze and Custom"
                        style={{ color: "grey", fontSize: "15px" }}
                      >
                        MarketMix
                      </span>
                    </label>
                  </div>
                  <div className="input-container">
                    <label>
                      <span className="radio">
                        <input
                          name="type"
                          value="stream"
                          checked={this.state.selectedOption === "stream"}
                          type="radio"
                          onChange={this.handleOptionChange}
                        />
                        <span
                          className="radio-value-profile"
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className="pop-up-text-icon"
                        aria-label="Available packages are: Gold, Silver and Custom"
                        style={{ color: "grey", fontSize: "15px" }}
                      >
                        MainStream
                      </span>
                    </label>
                  </div>
                  <div className="input-container">
                    <label>
                      <span className="radio">
                        <input
                          name="type"
                          value="up"
                          checked={this.state.selectedOption === "up"}
                          type="radio"
                          onChange={this.handleOptionChange}
                        />
                        <span
                          className="radio-value-profile"
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className="pop-up-text-icon"
                        aria-label="Available packages are: Diamond, Platinum and Bespoke"
                        style={{ color: "grey", fontSize: "15px" }}
                      >
                        UpMarket
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* end row */}
        <div className="bd-top" />
        <div className="osr-btn-group p-b-15 text-center">
          <SaveButton onClick={this.onSubmit} label="Save" type="save" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { changeTargetMarketByAdmin }
)(withRouter(ChangeTargetMarket));
