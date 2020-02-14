import React from "react";
import InputGroup from "components/CustomInput/InputGroup";
import SelectListGroup from "components/CustomInput/SelectListGroup";

const ClubDetails = ({ data, onChange }) => {
  return (
    <div className="row">
      <div className="form-group col-md-12 pl-10">
        <label htmlFor="inputEmail4">Club Name</label>
        <InputGroup name="clubName" value={data.clubName} />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputState">Club Activity</label>
        <SelectListGroup
          name="clubActivity"
          value={data.clubActivity}
          onChange={onChange}
          options={[
            { label: "Football", value: "Footabll" },
            { label: "Rugby", value: "Rugby" },
            { label: "Squash", value: "Squash" }
          ]}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputState">Country</label>
        <SelectListGroup
          name="clubCountry"
          value={data.clubCountry}
          onChange={onChange}
          options={data.countryOptions}
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">City</label>
        <InputGroup
          name="clubCity"
          placeholder="Enter City Name"
          value={data.clubCity}
          onChange={onChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Phone Number</label>
        <InputGroup
          name="phoneNumber"
          placeholder="+country-code xxx xxx xxx"
          value={data.phoneNumber}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ClubDetails;
