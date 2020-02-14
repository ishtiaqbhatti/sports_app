import React from "react";
import InputGroup from "components/CustomInput/InputGroup";
const ClubName = ({ clubName, onChange }) => {
  return (
    <div className="row">
      <div className="form-group col-md-10 pl-10">
        <label htmlFor="clubName">Enter your Club Name</label>
        <InputGroup name="clubName" value={clubName} onChange={onChange} />
      </div>
    </div>
  );
};

export default ClubName;
