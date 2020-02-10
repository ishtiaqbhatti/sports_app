import React from "react";
import EditButton from "../../ui/Buttons/EditButton";
import isEmpty from "../../../utils/is-empty";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import Input from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import ButtonGroup from "../../common/ButtonGroup/ButtonGroup";
import BranchOfficeView1 from "./BranchOfficeView1";
import BranchOfficeView2 from "./BranchOfficeView2";
import BranchOfficeView3 from "./BranchOfficeView3";
import getCountryName from "../../../utils/getCountryName";
import {
  getUnBlockedAfricanCountries,
  getUnBlockedContinentsOptions
} from "../../../actions/optionActions";

const OfficeView = ({
  branchOfficeData1,
  branchOfficeData2,
  branchOfficeData3,
  officeData,
  onClickEdit,
  onClickSave,
  onChange,
  onChange1,
  onChange2,
  onChange3,
  onSubmit,
  onClickAddBtn,
  ubcOptions,
  cbcOptions,
  onClickRemoveBtn,
  button,
  continentOptions,
  countryOptions,
  stateOptions,
  cityOptions,
  getStatesbyCountry,
  getStatesbyCountryV,
  getCountriesbyContint,
  getCities,
  ubAfricanCountryOptions,
  type,
  getBranch1Countries,
  getBranch2Countries,
  getBranch3Countries,
  getBranch1States,
  getBranch2States,
  getBranch3States,
  getBranch1City,
  getBranch2City,
  getBranch3City,
  bo1Co,
  bo2Co,
  bo3Co,
  bo1St,
  bo2St,
  bo3St,
  bo1Ci,
  bo2Ci,
  bo3Ci,
  t
}) => {
  const code = officeData.country;
  const countryName = getCountryName(code);
  console.log(countryName);

  return (
    <div className="tab-pane" id="office" role="tabpanel">
      <div className="row">
        <div className="col text-left align-self-center">
          <h4 className="font-18 mb-0 tabs-title">
            {t.mainOffice}
            <sup className="text-danger">*</sup>
          </h4>
        </div>
        <div className="col text-right">
          <EditButton
            onClick={onClickEdit}
            disabled={button.editdisabled}
            type="Edit"
          >
            {t.edit}
          </EditButton>
        </div>
      </div>
      <form id="office" noValidate>
        <fieldset disabled={button.formdisabled}>
          <div className="row">
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.streetAddress} 01`}</b>
                </h6>
                <Input
                  name="streetAdress1"
                  value={officeData.streetAdress1}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.streetAddress} 02 (${t.optional})`}</b>
                </h6>
                <Input
                  name="streetAdress2"
                  value={officeData.streetAdress2}
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
                  name="apiSuite"
                  value={officeData.apiSuite}
                  onChange={onChange}
                />
              </div>
            </div>
            {type === "vendor" ? (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>{t.continent}</b>
                  </h6>
                  <SelectListGroup
                    placeholder="Continet"
                    name="continent"
                    value={officeData.continent}
                    onChange={getCountriesbyContint}
                    options={continentOptions ? continentOptions : []}
                  />
                </div>
              </div>
            ) : (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>{t.country}</b>
                  </h6>
                  <ReactFlagsSelect
                    className={
                      button.disabled ? "menu-flags-disabled" : "menu-flags"
                    }
                    disabled={button.disabled}
                    alignOptions="left"
                    name="country"
                    defaultCountry={officeData.country}
                    value={officeData.country}
                    placeholder={countryName}
                    selectedSize={17}
                    optionsSize={17}
                    countries={ubAfricanCountryOptions}
                    onSelect={getStatesbyCountry}
                  />
                </div>
              </div>
            )}

            {type === "vendor" && !isEmpty(countryOptions) ? (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>{t.country}</b>
                  </h6>
                  <SelectListGroup
                    placeholder={t.country}
                    name="country"
                    value={officeData.country}
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
                    <b>{t.state}</b>
                  </h6>
                  <SelectListGroup
                    placeholder="st"
                    name="st"
                    value={officeData.st}
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
                    <b>{t.city}</b>
                  </h6>
                  <SelectListGroup
                    placeholder="city"
                    name="city"
                    value={officeData.city}
                    onChange={onChange}
                    options={cityOptions ? cityOptions : []}
                  />
                </div>
              </div>
            ) : null}
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{t.zipCode}</b>
                </h6>
                <Input
                  name="zipCode"
                  value={officeData.zipCode}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{t.mobileNo}</b>
                </h6>
                <Input
                  name="officeMobileNo"
                  value={officeData.officeMobileNo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.telephone} (${t.optional})`}</b>
                </h6>
                <Input
                  name="phoneNo2"
                  value={officeData.phoneNo2}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.telephone} (${t.optional})`}</b>
                </h6>
                <Input
                  name="phoneNo3"
                  value={officeData.phoneNo3}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.facebookAddress} (${t.optional})`}</b>
                </h6>
                <Input
                  name="fbAdress"
                  value={officeData.fbAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.instagramHandle} (${t.optional})`}</b>
                </h6>
                <Input
                  name="instaAdress"
                  value={officeData.instaAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.twitterHandle} (${t.optional})`}</b>
                </h6>
                <Input
                  name="twitterAdress"
                  value={officeData.twitterAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.youTubeAddress} (${t.optional})`}</b>
                </h6>
                <Input
                  name="youtubeAdress"
                  value={officeData.youtubeAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.linkedInaddress} (${t.optional})`}</b>
                </h6>
                <Input
                  name="linkdnAdress"
                  value={officeData.linkdnAdress}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {type === "planner" ? (
            <div className="col-md-12">
              {branchOfficeData1.firstBtn ? (
                <div className="m-t-20">
                  <button
                    id="first_add_btn"
                    className="os-btn waves-effect waves-light"
                    type="save"
                    disabled={button.disabled}
                    onClick={onClickAddBtn}
                  >
                    {t.addBranch}
                  </button>
                </div>
              ) : null}
              {branchOfficeData1.firstForm ? (
                <BranchOfficeView1
                  bo1={branchOfficeData1}
                  button={button}
                  onChange={onChange1}
                  onClickRemoveButton={onClickRemoveBtn}
                  continentOptions={continentOptions}
                  countryOptions={bo1Co}
                  stateOptions={bo1St}
                  cityOptions={bo1Ci}
                  getCountriesbyContint={getBranch1Countries}
                  getStatesbyCountryV={getBranch1States}
                  getCities={getBranch1City}
                />
              ) : null}
              {branchOfficeData1.firstForm && !branchOfficeData2.secondForm ? (
                <div className="m-t-20">
                  <button
                    id="second_add_btn"
                    className="os-btn waves-effect waves-light"
                    type="save"
                    disabled={button.disabled}
                    onClick={onClickAddBtn}
                  >
                    Add Branch Office
                  </button>
                </div>
              ) : null}
              {branchOfficeData2.secondForm ? (
                <BranchOfficeView2
                  bo2={branchOfficeData2}
                  button={button}
                  onChange={onChange2}
                  onClickRemoveButton={onClickRemoveBtn}
                  continentOptions={continentOptions}
                  countryOptions={bo2Co}
                  stateOptions={bo2St}
                  cityOptions={bo2Ci}
                  getCountriesbyContint={getBranch2Countries}
                  getStatesbyCountryV={getBranch2States}
                  getCities={getBranch2City}
                />
              ) : null}
              {branchOfficeData2.secondForm && !branchOfficeData3.thirdForm ? (
                <div className="m-t-20">
                  <button
                    id="third_add_btn"
                    className="os-btn waves-effect waves-light"
                    type="save"
                    onClick={onClickAddBtn}
                    disabled={button.disabled}
                  >
                    Add Branch Office
                  </button>
                </div>
              ) : null}
              {branchOfficeData3.thirdForm ? (
                <BranchOfficeView3
                  bo3={branchOfficeData3}
                  button={button}
                  onChange={onChange3}
                  onClickRemoveButton={onClickRemoveBtn}
                  continentOptions={continentOptions}
                  countryOptions={bo3Co}
                  stateOptions={bo3St}
                  cityOptions={bo3Ci}
                  getCountriesbyContint={getBranch3Countries}
                  getStatesbyCountryV={getBranch3States}
                  getCities={getBranch3City}
                />
              ) : null}
            </div>
          ) : null}
        </fieldset>
      </form>
      <div className="bd-top" />
      <ButtonGroup onSubmit={onSubmit} disabled={button.disabled} />
    </div>
  );
};

export default OfficeView;
