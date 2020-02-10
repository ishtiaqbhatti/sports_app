import React from "react";

import SmallDeleteBtn from "../../../ui/Buttons/SmallDeleteBtn";
import { Link } from "react-router-dom";
import ReactSelect from "../../../common/SelectListGroup";
import ReactFlagsSelect from "react-flags-select";

const Filters = ({
  country,
  acountry,
  st,
  city,
  categories,
  targetMarket,
  eventType,
  onChange,
  onSelectCountry,
  onSelectState,
  africanCountriesOptions,
  countriesOptions,
  stateOptions,
  cityOptions,
  categoryOptions,
  targetMarketOptions,
  eventTypeOptions,
  clearFilters,
  pathname,
  filtersExist,
  t
}) => {
  return (
    //aside-area, filter-title
    <div className="aside-area">
      <h5 className="filter-title">
        <i className="fas fa-sliders-h" /> {t.filterBy}
      </h5>
      <form>
        {pathname === "/vendors" ? (
          <div className="form-group">
            <ReactSelect
              name="country"
              options={countriesOptions}
              value={country}
              onChange={onChange}
            />
          </div>
        ) : null}
        {pathname === "/planners" ? (
          <div className="form-group">
            <ReactSelect
              name="acountry"
              options={africanCountriesOptions}
              value={acountry}
              onChange={onSelectCountry}
            />
          </div>
        ) : null}

        {acountry ? (
          <div className="form-group">
            <ReactSelect
              name="st"
              options={stateOptions}
              selected={st}
              onChange={onSelectState}
            />
          </div>
        ) : null}
        {st ? (
          <div className="form-group">
            <ReactSelect
              name="city"
              options={cityOptions}
              value={city}
              onChange={onChange}
              placeholder="Select City"
            />
          </div>
        ) : null}

        <div className="form-group">
          <ReactSelect
            name="categories"
            value={categories}
            onChange={onChange}
            options={categoryOptions}
          />
        </div>
        <div className="form-group">
          <ReactSelect
            name="targetMarket"
            value={targetMarket}
            onChange={onChange}
            options={targetMarketOptions}
          />
        </div>
        {pathname === "/planners" ? (
          <div className="">
            <ReactSelect
              name="eventType"
              value={eventType}
              onChange={onChange}
              options={eventTypeOptions}
            />
          </div>
        ) : null}
        {filtersExist() ? (
          <button
            onClick={clearFilters}
            style={{
              color: "blue",
              border: "none",
              cursor: "pointer",
              display: "inline-block",
              backgroundColor: "inherit",
              paddingTop: "10px",
              paddingLeft: "30px",
              fontSize: "18px"
            }}
          >
            {t.clearFilters}
          </button>
        ) : null}
        {/* <SmallDeleteBtn
          label="Clear Filters"
          type="button"
          onClick={clearFilters}
        /> */}
      </form>
    </div>
  );
};

export default Filters;
