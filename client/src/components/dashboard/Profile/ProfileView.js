import React from "react";
import EditButton from "../../ui/Buttons/EditButton";
import Select from "../../common/SelectListGroup";
import Input from "../../common/InputGroup";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import classnames from "classnames";
import ReactSelect from "react-select";

import Popup from "reactjs-popup";
import { limitCategories } from "./utils/limit";

const ProfileView = ({
  data,
  errors,
  onClickEdit,
  onClickSave,
  onChange,
  handleEventChange,
  handleOptionChange,
  handleCategoriesChange,
  onSubmit,
  categoryOptions,
  cateringOptions,
  eventTypeOptions,
  genderOptions,
  businessTitleOptions,
  user,
  button,
  isEnabled,
  onLogout,
  t
}) => {
  console.log(categoryOptions);
  return (
    <div className="tab-pane" role="tabpanel" id="services">
      <div className="row">
        <div className="col text-left align-self-center">
          <h4 className="font-18 mb-0 tabs-title">
            {t.personalInfo}
            <sup className="text-danger">*</sup>
          </h4>
        </div>
        <div className="col text-right">
          <EditButton
            onClick={onClickEdit}
            disabled={!data.profileCompleted ? true : button.editdisabled}
            type="Edit"
          >
            {t.edit}
          </EditButton>
        </div>
      </div>
      <form id="profile" onSubmit={onSubmit} noValidate text-center>
        <fieldset disabled={!data.profileCompleted ? "" : button.formdisabled}>
          <div className="row">
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>
                    {t.title}
                    <sup className="text-danger">*</sup>
                  </b>
                </h6>
                <Select
                  name="title"
                  onChange={onChange}
                  value={data.title}
                  options={genderOptions}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>
                    {t.firstName}
                    <sup className="text-danger">*</sup>
                  </b>
                </h6>
                <Input
                  name="firstName"
                  onChange={onChange}
                  value={data.firstName}
                  error={errors.firstName}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>
                    {t.lastName}
                    <sup className="text-danger">*</sup>
                  </b>
                </h6>
                <Input
                  name="lastName"
                  onChange={onChange}
                  value={data.lastName}
                  error={errors.lastName}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="bd-top" />
              <h4 className="font-18 mb-0 tabs-title">
                {t.targetMarket}
                <sup className="text-danger">*</sup>
                <span
                  className="pop-up-text-icon"
                  aria-label="Choosing a target market will enable the system provide you with appropriate service Package on offer.
                Read what each target market is about as your selection is persisted upon save.
                To change target market, contact Admin"
                >
                  <i className="fa fa-info-circle" />
                </span>
              </h4>
            </div>
            <div className="col-md-12 m-t-20 custom-xs-center">
              <div className="d-flex input-radio">
                <div className="input-container">
                  <label>
                    <span className="radio">
                      <input
                        name="type"
                        value="mix"
                        checked={data.selectedOption === "mix"}
                        type="radio"
                        onChange={handleOptionChange}
                        disabled={data.profileCompleted}
                      />
                      <span
                        className="radio-value-profile"
                        aria-hidden="true"
                      />
                    </span>
                    <span
                      className="pop-up-text-icon"
                      aria-label="Available packages are: Silver, Bronze and Custom"
                      style={{ color: "grey", fontSize: "15px" }}
                    >
                      {t.marketMix}
                      <i
                        style={{ paddingLeft: "0.5rem" }}
                        className="fa fa-info-circle"
                      />
                    </span>
                  </label>
                </div>
                <div className="input-container">
                  <label>
                    <span className="radio">
                      <input
                        name="type"
                        value="stream"
                        checked={data.selectedOption === "stream"}
                        type="radio"
                        onChange={handleOptionChange}
                        disabled={data.profileCompleted}
                      />
                      <span
                        className="radio-value-profile"
                        aria-hidden="true"
                      />
                    </span>
                    <span
                      className="pop-up-text-icon"
                      aria-label="Available packages are: Gold, Silver and Custom"
                      style={{ color: "grey", fontSize: "15px" }}
                    >
                      {t.mainStream}
                      <i
                        style={{ paddingLeft: "0.5rem" }}
                        className="fa fa-info-circle"
                      />
                    </span>
                  </label>
                </div>
                <div className="input-container">
                  <label>
                    <span className="radio">
                      <input
                        name="type"
                        value="up"
                        checked={data.selectedOption === "up"}
                        type="radio"
                        onChange={handleOptionChange}
                        disabled={data.profileCompleted}
                      />
                      <span
                        className="radio-value-profile"
                        aria-hidden="true"
                      />
                    </span>
                    <span
                      className="pop-up-text-icon"
                      aria-label="Available packages are: Diamond, Platinum and Bespoke"
                      style={{ color: "grey", fontSize: "15px" }}
                    >
                      {t.upMarket}
                      <i
                        style={{ paddingLeft: "0.5rem" }}
                        className="fa fa-info-circle"
                      />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            {errors.targetMarket && (
              <div className="">
                <p style={{ color: "red" }}>{errors.targetMarket}</p>
              </div>
            )}
            <div className="col-md-12">
              <div className="m-t-20">
                <h6 className="text-muted float-left">
                  <b>
                    {t.description}
                    <sup className="text-danger">*</sup>
                  </b>
                </h6>
                <h6 className="text-muted float-right">
                  <span className="chars">{data.description.length}</span>/500
                  chars
                </h6>
                <textarea
                  id="textarea"
                  className={classnames("form-control", {
                    "is-invalid": errors.email
                  })}
                  name="description"
                  value={data.description}
                  onChange={onChange}
                  maxLength={500}
                  minLength={75}
                  rows={3}
                  placeholder="This textarea has a limit of 500 chars."
                />
                {errors.description && (
                  <div className="">
                    <p style={{ color: "red" }}>{errors.description}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>
                    {t.cateringCapacity}
                    <sup className="text-danger">*</sup>
                  </b>
                  <span
                    className="info-icon"
                    data-container="body"
                    data-trigger="hover"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Lorem Ipsum de da wabg"
                  >
                    <i className="ion-ios7-information-outline" />
                  </span>
                </h6>
                <Select
                  name="cateringCapacity"
                  value={data.cateringCapacity}
                  options={cateringOptions}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>
                    {t.categories}
                    <sup className="text-danger">*</sup>
                  </b>
                  <span
                    className="info-icon"
                    data-container="body"
                    data-trigger="hover"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Lorem Ipsum de da wabg"
                  >
                    <i className="ion-ios7-information-outline" />
                  </span>
                </h6>
                <ReactSelect
                  isMulti
                  value={data.categories}
                  options={
                    data.categories != null && data.categories.length <= 1
                      ? categoryOptions
                      : []
                  }
                  onChange={handleCategoriesChange}
                  className="basic-multi-select   "
                  isDisabled={!data.profileCompleted ? false : button.disabled}
                  autoFocus
                  classNamePrefix="select"
                  styles={{
                    // Fixes the overlapping problem of the component
                    menu: provided => ({ ...provided, zIndex: 9999 })
                  }}
                />

                <p className="text-muted mb-0">
                  <b>Max of 2 Seclection</b>
                </p>
                {errors.categories && (
                  <div className="">
                    <p style={{ color: "red" }}>{errors.categories}</p>
                  </div>
                )}
              </div>
            </div>

            {user.type === "planner" ? (
              <div className="col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>
                      {t.eventType}
                      <sup className="text-danger">*</sup>
                    </b>
                  </h6>
                  <ReactSelect
                    name="eventTypes"
                    isMulti
                    isDisabled={
                      !data.profileCompleted ? false : button.disabled
                    }
                    className="basic-multi-select"
                    value={data.eventTypes}
                    options={
                      data.eventTypes != null && data.eventTypes.length <= 4
                        ? eventTypeOptions
                        : []
                    }
                    onChange={handleEventChange}
                    styles={{
                      // Fixes the overlapping problem of the component
                      menu: provided => ({ ...provided, zIndex: 9999 })
                    }}
                  />
                  <p className="text-muted mb-0">
                    <b>Max of 5 Seclection</b>
                  </p>
                  {errors.eventTypes && (
                    <div className="">
                      <p style={{ color: "red" }}>{errors.eventTypes}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
            <div className="col-md-12">
              <h4 className="font-18 mb-0 m-t-30 tabs-title">
                {t.officialPosition}
                <sup className="text-danger">*</sup>
              </h4>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{t.buisinessTitle}</b>
                </h6>
                <Select
                  name="businessTitle"
                  value={data.businessTitle}
                  options={businessTitleOptions}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>{`${t.website} (${t.optional})`}</b>
                </h6>
                <Input
                  name="website"
                  value={data.website}
                  onChange={onChange}
                  error={errors.website}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Mobile Number + Access Code</b>
                </h6>
                <Input
                  placeholder="+00 333 5524325"
                  name="phoneNo1"
                  value={data.phoneNo1}
                  onChange={onChange}
                  error={errors.phoneNo1}
                />
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      {/* end row */}
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          onClick={onSubmit}
          label={t.save}
          type="save"
          disabled={
            !data.profileCompleted
              ? false || !isEnabled
              : button.disabled || !isEnabled
          }
        />

        {!data.profileCompleted ? (
          <Popup trigger={<CancelButton label="Cancel" type="button" />} modal>
            {close => (
              <div className="modals">
                {/* <a className="close" onClick={close}>
                              &times;
                            </a> */}
                <div className="modal-header text-center">
                  <h3
                    style={{ color: "red" }}
                    className="modal-title w-100 red-cl"
                  >
                    Warning
                  </h3>
                </div>
                <div className="content">
                  <h5>You will be logged out. Select Cancel to Go Back.</h5>
                </div>
                <div className="actions">
                  <button
                    type="button"
                    className="small-os-btn small-ok-btn text-uppercase"
                    onClick={() => onLogout()}
                  >
                    {" "}
                    OK
                  </button>

                  <button
                    type="button"
                    style={{ marginLeft: "1rem" }}
                    className="small-os-btn small-cancel-button text-uppercase "
                    onClick={() => close()}
                  >
                    {" "}
                    {t.cancel}
                  </button>
                </div>
              </div>
            )}
          </Popup>
        ) : (
          <CancelButton
            onClick={onClickSave}
            label={t.cancel}
            type="cancel"
            disabled={button.disabled}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileView;
