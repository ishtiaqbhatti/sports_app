import React from "react";
import InputGroup from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import ReactFlagsSelect from "react-flags-select";

import "react-flags-select/css/react-flags-select.css";

const AboutPlannerForm = ({
  data,
  optional,
  handleOptional,
  onChange,
  revenueOptions,
  cateringOptions,
  unBlockedAfricanCountriesOptions,
  stateOptions,
  cityOptions,
  onSelectState,
  onSelectCountry,
  errors,
  t
}) => {
  return (
    <div className="row">
      <div className="form-group col-md-4">
        <label htmlFor="inputState">{t.iAm}</label>
        <select name="type" className="form-control">
          <option selected>{t.eventPlanner}</option>
        </select>
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputState">{t.wIsCurrent}</label>
        <SelectListGroup
          placeholder="Your Current Revenue"
          name="currentRevenue"
          value={data.currentRevenue}
          onChange={onChange}
          options={revenueOptions}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputState">{t.cateringCapacity}</label>
        <SelectListGroup
          placeholder="Catering Capacity"
          name="cateringCapacity"
          value={data.cateringCapacity}
          onChange={onChange}
          options={cateringOptions}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">{t.firstName}</label>
        <InputGroup
          name="firstName"
          value={data.firstName}
          onChange={onChange}
          error={errors.firstName}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">{t.lastName}</label>
        <InputGroup
          name="lastName"
          value={data.lastName}
          onChange={onChange}
          error={errors.lastName}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">{t.phoneNumber}</label>
        <InputGroup
          name="phoneNo1"
          placeholder="+country-code xxx xxx xxx"
          value={data.phoneNo1}
          onChange={onChange}
          error={errors.phoneno1}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">{`${t.streetAddress} 01`}</label>
        <InputGroup
          name="streetAdress1"
          value={data.streetAdress1}
          onChange={onChange}
          error={errors.streetAdress1}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">
          {" "}
          {`${t.streetAddress} 02 (${t.optional})`}
        </label>
        <InputGroup
          name="streetAdress2"
          value={optional.streetAdress2}
          onChange={handleOptional}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">apt,suite,etc(optional)</label>
        <InputGroup
          name="apiSuite"
          value={optional.apiSuite}
          onChange={handleOptional}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputState">{t.country}</label>
        {/* <SelectListGroup
           placeholder="Country"
           name="country"
           value={data.country}
           onChange={onChange}
           options={africanCountryOptions}
         /> */}
        <ReactFlagsSelect
          className="menu-flags"
          alignOptions="left"
          name="country"
          value={data.country}
          selectedSize={17}
          optionsSize={17}
          countries={unBlockedAfricanCountriesOptions}
          onSelect={onSelectCountry}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputState">{t.state}</label>
        <SelectListGroup
          name="st"
          selected={data.st}
          onChange={onSelectState}
          options={stateOptions ? stateOptions : []}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputState">{t.city}</label>
        <SelectListGroup
          name="city"
          value={data.city}
          onChange={onChange}
          options={cityOptions ? cityOptions : []}
        />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">{t.zipCode}</label>
        <InputGroup
          name="zipCode"
          value={optional.zipCode}
          onChange={handleOptional}
        />
      </div>

      <div className="form-group col-md-4">
        <label htmlFor="inputState">
          {`${t.businessWebsite} (${t.optional})`}
        </label>
        <InputGroup
          name="website"
          value={optional.website}
          onChange={handleOptional}
        />
      </div>
    </div>
  );
};

export default AboutPlannerForm;
