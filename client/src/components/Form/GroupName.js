import React from "react";
import InputGroup from "components/CustomInput/InputGroup";

const GroupName = ({ groupName, onChange }) => {
  return (
    <div className="row">
      <div className="form-group col-md-10 pl-10">
        <label htmlFor="inputEmail4">Create your First Group</label>
        <InputGroup name="groupName" value={groupName} onChange={onChange} />
      </div>
    </div>
  );
};

export default GroupName;
