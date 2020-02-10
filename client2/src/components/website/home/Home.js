import React, { Component } from "react";
import { connect } from "react-redux";
import { resetResults } from "../../../actions/common";
import HomeBackground from "../../../img/home-background.jpg";

import "./Home1.css";
import isEmpty from "../../../utils/is-empty";

import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "",
      results: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!isEmpty(this.props.websiteBg)) {
      this.setState({ backgroundImage: this.props.websiteBg });
    }
    this.props.resetResults();
  }

  handleSubmit(query, btnType) {
    let searchFields = {};
    searchFields.query = query;
    searchFields.btnType = btnType;
    this.props.searchProfiles(searchFields, this.props.history);
  }

  render() {
    const { t } = this.props;
    return (
      <section
        className="d-flex align-items-center flex-column justify-content-center h-100"
        style={{
          backgroundImage: "url(" + HomeBackground + ")",
          backgroundPosition: "center",
          opacity: 0.9
        }}
      >
        <div className="home-search-banner">
          <div className="search-banner-head text-center">
            <h4>
              <span style={{ fontSize: "50px", fontWeight: "800" }}>
                Welcome
              </span>
              <span>
                <p
                  style={{
                    fontSize: "25px",
                    marginTop: "20px",
                    fontWeight: "200"
                  }}
                >
                  To the Sports Management
                </p>
              </span>
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  websiteBg: state.admin.admin.websiteBg
});

export default connect(mapStateToProps, { resetResults })(withRouter(Home));
