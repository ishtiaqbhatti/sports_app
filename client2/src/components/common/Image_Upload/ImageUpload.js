import React from "react";
import TickIcon from "../../../../src/img/tick.png";
import "./UploadImage.css";

const ImageUpload = ({
  onClick,
  onChange,
  label,
  disabled,
  type,
  id,
  data
}) => {
  return (
    <div className="row" style={{ paddingTop: "30px" }}>
      <input
        style={{ border: "5px solid black" }}
        type="file"
        id="idofinput"
        className="hidden"
        accept="image/png, image/jpeg"
        onChange={onChange}
        disabled={disabled}
      />
      {/* <label for="idofinput">Fuck</label> */}
      <button
        type={type}
        disabled={disabled}
        id={id}
        className="uploadButton"
        onClick={onClick}
      >
        {label}
      </button>
      {data ? (
        <img style={{ paddingLeft: "5px" }} src={TickIcon} alt="Tick Icon" />
      ) : null}
    </div>
  );
};

export default ImageUpload;
