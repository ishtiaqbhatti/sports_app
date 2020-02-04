import React from "react";
import getCountryName from "../../../utils/getCountryName";
import BranchOffice from "./BranchOffice";
const Office = props => {
  if (!props.plannerItem) {
    return <div>Loading..</div>;
  }

  const {
    streetAdress1,
    streetAdress2,
    city,
    country,
    apiSuite,
    zipCode,
    branchOffice1,
    branchOffice2,
    branchOffice3,
    branchOfficeData1,
    branchOfficeData2,
    branchOfficeData3
  } = props.plannerItem;
  const { t } = props;

  return (
    <div
      className="tab-pane"
      id="contact"
      role="tabpanel"
      aria-labelledby="contact-tab"
    >
      {/* Office Tabs Start */}
      <div className="offices-tab">
        <div className="office-location">
          <h6>{t.mainOffice}</h6>
          <address className="address-bar">
            <strong>{t.address + ":"}</strong>
            <br />
            <p>
              {t.streetAddress + " 1 : "}
              {streetAdress1}
            </p>
            {streetAdress2 ? (
              <p>
                {t.streetAddress + " 2 : "}
                {streetAdress2}
              </p>
            ) : null}
          </address>
          <div className="row">
            <div className="col">
              {apiSuite ? (
                <div className="address-bar">
                  <strong>Api,Suite,etc :</strong>
                  <br />
                  {apiSuite}
                </div>
              ) : null}
              <div className="address-bar">
                <strong>{t.city + " :"}</strong>
                <br />
                {city}
              </div>
            </div>
            <div className="col">
              <div className="address-bar">
                <strong>{t.country + " :"}</strong>
                <br />
                {getCountryName(country)}
              </div>
            </div>
            {zipCode ? (
              <div className="address-bar">
                <strong>{t.zipCode + " :"}</strong>
                <br />
                {zipCode}
              </div>
            ) : null}
          </div>
        </div>
        {props.userType === "planner" && branchOffice1 ? (
          <BranchOffice
            boStr={branchOfficeData1.bo1StreetAdress1}
            boStr2={branchOfficeData1.bo1StreetAdress2}
            boApi={branchOfficeData1.bo1ApiSuite}
            boZip={branchOfficeData1.bo1ZipCode}
            boCountry={branchOfficeData1.bo1Country}
            boCity={branchOfficeData1.bo1City}
            boMobile={branchOfficeData1.bo1MobileNo}
            boTele={branchOfficeData1.bo1Tele1}
            boTele2={branchOfficeData1.bo1Tele2}
            t={t}
          />
        ) : null}
        {props.userType === "planner" && branchOffice2 ? (
          <BranchOffice
            boStr={branchOfficeData2.bo2StreetAdress1}
            boStr2={branchOfficeData2.bo2StreetAdress2}
            boApi={branchOfficeData2.bo2ApiSuite}
            boZip={branchOfficeData2.bo2ZipCode}
            boCountry={branchOfficeData2.bo2Country}
            boCity={branchOfficeData2.bo2City}
            boMobile={branchOfficeData2.bo2MobileNo}
            boTele={branchOfficeData2.bo2Tele1}
            boTele2={branchOfficeData2.bo2Tele2}
            t={t}
          />
        ) : null}
        {props.userType === "planner" && branchOffice3 ? (
          <BranchOffice
            boStr={branchOfficeData3.bo3StreetAdress1}
            boStr2={branchOfficeData3.bo3StreetAdress2}
            boApi={branchOfficeData3.bo3ApiSuite}
            boZip={branchOfficeData3.bo3ZipCode}
            boCountry={branchOfficeData3.bo3Country}
            boCity={branchOfficeData3.bo3City}
            boMobile={branchOfficeData3.bo3MobileNo}
            boTele={branchOfficeData3.bo3Tele1}
            boTele2={branchOfficeData3.bo3Tele2}
            t={t}
          />
        ) : null}
      </div>
      {/* Office Tabs End */}
    </div>
  );
};

export default Office;
