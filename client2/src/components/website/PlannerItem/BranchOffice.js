import React from "react";
import getCountryName from "../../../utils/getCountryName";

const BranchOffice = ({
  boStr,
  boStr2,
  boApi,
  boZip,
  boCountry,
  boCity,
  boMobile,
  boTele,
  boTele2,
  t
}) => {
  return (
    <div className="office-location">
      <h6>{t.branchOffice}</h6>
      <address className="address-bar">
        <strong>{t.address + ":"}</strong>
        <br />
        {boStr ? (
          <p>
            S {t.streetAddress + " 1 : "}
            {boStr}
          </p>
        ) : null}
        {boStr2 ? (
          <p>
            {" "}
            {t.streetAddress + " 2 : "} {boStr2}
          </p>
        ) : null}
      </address>
      <div className="row" style={{ display: "flex" }}>
        <div className="col">
          {boApi ? (
            <div className="address-bar">
              <strong>Api,Suite,etc :</strong>
              <br />
              {boApi}
            </div>
          ) : null}
          {boCity ? (
            <div className="address-bar">
              <strong>{t.city + " :"}</strong>
              <br />
              {boCity}
            </div>
          ) : null}
          {boZip ? (
            <div className="address-bar">
              <strong>{t.zipCode + " :"}</strong>
              <br />
              {boZip}
            </div>
          ) : null}
          {boCountry ? (
            <div className="address-bar">
              <strong>{t.country + " :"}</strong>
              <br />
              {getCountryName(boCountry)}
            </div>
          ) : null}
        </div>
      </div>
      <div className="row">
        {boMobile && (
          <div className="col">
            <div className="address-bar">
              <strong>{t.mobileNo + " :"}</strong>
              <br />
              {boMobile}
            </div>
          </div>
        )}

        {boTele && (
          <div className="col">
            <div className="address-bar">
              <strong>{t.phoneNumber + " :"}</strong>
              <br />
              {boTele}
            </div>
          </div>
        )}

        {boTele2 && (
          <div className="col">
            <div className="address-bar">
              <strong>{t.phoneNumber + " :"}</strong>
              <br />
              {boTele2}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BranchOffice;
