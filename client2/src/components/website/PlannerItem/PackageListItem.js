import React from "react";

const PackageListItem = ({ offer, price, bundle }) => {
  return (
    <li className="list-group-item">
      <h5
        style={{
          marginBottom: "10px",
          textTransform: "uppercase",
          textAlign: "left",
          fontSize: "20px"
        }}
      >
        {bundle}
      </h5>
      <span>{offer}</span>
      <span
        style={{
          display: "block",
          fontSize: "1.5rem",
          fontWeight: "500"
        }}
      >
        {price}
      </span>
    </li>
  );
};

export default PackageListItem;
