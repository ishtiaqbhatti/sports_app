import React from "react";
import Loader from "react-loader-spinner";
// import Spinner from "./spinner1.gif";

export default () => {
  return (
    // <div style={{ textAlign: "center" }}>
    //   <img
    //     src={Spinner}
    //     style={{ width: "200px", margin: "auto", display: "inline" }}
    //     alt="Loading..."
    //   />
    // </div>
    <div className="centered">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        //3 secs
      />
    </div>
  );
};
