import React from "react";
import ServiceItem from "./ServiceItem";

import isEmpty from "../../../utils/is-empty";

const Services = vendorItemServices => {
  const {
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
    desc7,
    desc8,
    desc9
  } = vendorItemServices.vendorItemServices;

  return (
    <div
      className="fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
      style={{ backgroundColor: "black" }}
    >
      <div className="form-row">
        {!isEmpty(title1) && !isEmpty(desc1) ? (
          <ServiceItem title={title1} desc={desc1} />
        ) : null}
        {!isEmpty(title2) && !isEmpty(desc2) ? (
          <ServiceItem title={title2} desc={desc2} />
        ) : null}
        {!isEmpty(title3) && !isEmpty(desc3) ? (
          <ServiceItem title={title3} desc={desc3} />
        ) : null}
        {!isEmpty(title4) && !isEmpty(desc4) ? (
          <ServiceItem title={title4} desc={desc4} />
        ) : null}
        {!isEmpty(title5) && !isEmpty(desc5) ? (
          <ServiceItem title={title5} desc={desc5} />
        ) : null}
        {!isEmpty(title6) && !isEmpty(desc6) ? (
          <ServiceItem title={title6} desc={desc6} />
        ) : null}
        {!isEmpty(title7) && !isEmpty(desc7) ? (
          <ServiceItem title={title7} desc={desc7} />
        ) : null}
        {!isEmpty(title8) && !isEmpty(desc8) ? (
          <ServiceItem title={title8} desc={desc8} />
        ) : null}
        {!isEmpty(title9) && !isEmpty(desc9) ? (
          <ServiceItem title={title9} desc={desc9} />
        ) : null}
      </div>
    </div>
  );
};

export default Services;
