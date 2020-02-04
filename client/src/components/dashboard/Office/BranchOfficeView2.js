import React, { Fragment } from "react";
import Input from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import isEmpty from "../../../utils/is-empty";
const BranchOfficeView = ({
  bo2,
  onClickRemoveButton,
  onChange,
  continentOptions,
  countryOptions,
  stateOptions,
  cityOptions,
  getCountriesbyContint,
  getStatesbyCountryV,
  getCities,
  button
}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col text-left align-self-center">
          <h4 className="font-18 mb-0 tabs-title">
            Branch Office<sup className="text-danger">*</sup>
          </h4>
        </div>
        <div className="col text-right">
          <button
            type="cancel"
            id="second_form"
            disabled={button.disabled}
            onClick={onClickRemoveButton}
            class="os-btn cancel-btn waves-effect waves-light"
          >
            Remove Branch Office
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Street Address 1</b>
            </h6>
            <Input
              name="bo2StreetAdress1"
              value={bo2.bo2StreetAdress1}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Street Address 2</b>
            </h6>
            <Input
              name="bo2StreetAdress2"
              value={bo2.bo2StreetAdress2}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Apt,suite,etc.(optional)</b>
            </h6>
            <Input
              name="bo2ApiSuite"
              value={bo2.bo2ApiSuite}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Continent</b>
            </h6>
            <SelectListGroup
              placeholder="Continet"
              name="bo2Continent"
              value={bo2.bo2Continent}
              onChange={getCountriesbyContint}
              options={continentOptions ? continentOptions : []}
            />
          </div>
        </div>
        {!isEmpty(countryOptions) ? (
          <div className="form-group col-md-4">
            <div className="m-t-20">
              <h6 className="text-muted">
                <b>Country</b>
              </h6>
              <SelectListGroup
                placeholder="Country"
                name="bo2Country"
                value={bo2.bo2Country}
                onChange={getStatesbyCountryV}
                options={countryOptions ? countryOptions : []}
              />
            </div>
          </div>
        ) : null}
        {!isEmpty(stateOptions) ? (
          <div className="form-group col-md-4">
            <div className="m-t-20">
              <h6 className="text-muted">
                <b>State</b>
              </h6>
              <SelectListGroup
                placeholder="st"
                name="bo2State"
                selected={bo2.bo2State}
                onChange={getCities}
                options={stateOptions ? stateOptions : []}
              />
            </div>
          </div>
        ) : null}

        {!isEmpty(cityOptions) ? (
          <div className="form-group col-md-4">
            <div className="m-t-20">
              <h6 className="text-muted">
                <b>City</b>
              </h6>
              <SelectListGroup
                placeholder="city"
                name="bo2City"
                value={bo2.bo2City}
                onChange={onChange}
                options={cityOptions ? cityOptions : []}
              />
            </div>
          </div>
        ) : null}

        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>zip/postal code</b>
            </h6>
            <Input
              name="bo2ZipCode"
              value={bo2.bo2ZipCode}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Mobile no</b>
            </h6>
            <Input
              name="bo2MobileNo"
              value={bo2.bo2MobileNo}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Telephone (optional)</b>
            </h6>
            <Input name="bo2Tele1" value={bo2.bo2Tele1} onChange={onChange} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="m-t-20">
            <h6 className="text-muted">
              <b>Telephone (optional)</b>
            </h6>
            <Input name="bo2Tele2" value={bo2.bo2Tele2} onChange={onChange} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BranchOfficeView;
