import React from "react";
import { withRouter } from "react-router-dom";

const AboutPlannerPopUp = ({ close, history }) => {
  return (
    <div className="modals">
      <div className="modal-header text-center">
        <h3 style={{ color: "red" }} className="modal-title w-100 red-cl">
          Warning
        </h3>
      </div>
      <div className="content">
        <h5>
          Store front creation is not complete! <br /> You have 24 hours to
          complete your registration
        </h5>
      </div>
      <div className="actions">
        <button
          type="button"
          className="small-os-btn small-ok-btn text-uppercase"
          onClick={() => history.push("/")}
        >
          {" "}
          OK
        </button>

        <button
          type="button"
          style={{ marginLeft: "1rem" }}
          className="small-os-btn small-cancel-button text-uppercase "
          onClick={() => close()}
        >
          {" "}
          Cancel
        </button>
      </div>
    </div>
  );
};

export default withRouter(AboutPlannerPopUp);
