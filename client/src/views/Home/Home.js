import React, { Component } from "react";
import HomeBackground from "assets/img/home-background.jpg";

import "./Home1.css";

class Home extends Component {
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

export default Home;
