import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="copyright-footer fixed-bottom" style={{ zIndex: "5" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <ul className="short-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="contact-list social-list text-right">
                <li>
                  <a href="/facebook" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/twitter" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/insta" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/linkdn" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
