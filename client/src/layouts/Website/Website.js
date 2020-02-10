import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import routes from "routes.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

const Website = props => {
  console.log("Website Component Loaded");
  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <main>{switchRoutes}</main>
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Website;
