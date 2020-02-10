import React from "react";

const handleEnvelope = title => {
  window.location.href = `mailto:address@dmail.com?subject=Inquiry on ${title} services`;
};

const ServiceItem = ({ desc, title }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="text-block">
        <div className="text-caption">
          <h5 style={{ textDecoration: "underline" }} className="title">
            {title.toUpperCase()}
          </h5>

          {/* <h6 className="title">Description:</h6> */}
          <p>{desc}</p>
        </div>
        <a className="msg-btn" href="#">
          <button
            style={{ backgroundColor: "white", border: "none" }}
            onClick={() => handleEnvelope(title)}
          >
            <span className="envelope-icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ServiceItem;

//1 - 12
//2 - 6
//3 - 4
//4 - 6
//5 - 4
//6 - 4
//7 - 4
//8
