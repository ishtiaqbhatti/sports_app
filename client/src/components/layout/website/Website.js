import React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Website = props => {
  console.log("Website Component Loaded");
  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <main>{props.children}</main>
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Website;
