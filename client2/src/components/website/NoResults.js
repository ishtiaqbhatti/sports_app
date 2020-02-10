import React from "react";
import { withRouter, Link } from "react-router-dom";

const NoResults = ({ history, pathname, seeAll }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="error-container">
            <h1 className="error-title">No Results Found</h1>
            <div className="buttons">
              <Link to={pathname}>
                <button onClick={seeAll} className="btn btn-primary">
                  See All
                </button>
              </Link>
              <button
                onClick={() => history.push("/")}
                className="btn btn-secondary"
              >
                {" "}
                Take me to Homepage
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoResults);
