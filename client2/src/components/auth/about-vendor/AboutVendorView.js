import React from "react";
import Modal from "react-modal";
import SelectListGroup from "../../common/SelectListGroup";
import InputGroup from "../../common/InputGroup";
import Spinner from "../../common/Spinner/Spinner";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import Popup from "reactjs-popup";

const AboutVendorView = ({
  data,
  continentOptions,
  countryOptions,
  stateOptions,
  cityOptions,
  loading,
  revenueOptions,
  errors,
  getCountriesbyContint,
  getStatesbyCountry,
  getCities,
  onChange,
  onSubmit,
  isEnabled,
  history,
  websiteBg,
  t
}) => {
  return (
    <section
      className="d-flex align-items-center flex-column justify-content-center h-100"
      style={{
        backgroundImage: "url(" + websiteBg + ")",
        backgroundPosition: "center",
        opacity: 1
      }}
    >
      <div className="container">
        <Modal
          // closeTimeoutMS={150}
          isOpen={true}
          // onRequestClose={closeModal}
          className="about-vendor-modal-styling"
          overlayClassName="react-modal-overlay"
        >
          <div
            className="modal-dialog popup-style"
            style={{ maxWidth: "1200px" }}
          >
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <h5 className="modal-title">{t.tellUs}</h5>
              </div>
              <div className="modal-body" style={{ padding: "2rem" }}>
                {!loading ? (
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputState">{t.iAm}</label>
                        <select name="type" className="form-control">
                          <option selected>{t.eventVendor}</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
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
                        <label htmlFor="inputEmail4">{t.firstName}</label>
                        <InputGroup
                          name="firstName"
                          value={data.firstName}
                          onChange={onChange}
                          // error={errors.firstName ? errors.firstName : ""}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">{t.lastName}</label>
                        <InputGroup
                          name="lastName"
                          value={data.lastName}
                          onChange={onChange}
                          // error={errors.lastName}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">{t.phoneNumber}</label>
                        <InputGroup
                          name="phoneNo1"
                          placeholder="+country-code xxx xxx xxx"
                          value={data.phoneNo1}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">{`${t.streetAddress} 01`}</label>
                        <InputGroup
                          name="streetAdress1"
                          value={data.streetAdress1}
                          onChange={onChange}
                          // error={errors.streetAdress1}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">
                          {`${t.streetAddress} 02 (${t.optional})`}
                        </label>
                        <InputGroup
                          name="streetAdress2"
                          value={data.streetAdress2}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">
                          apt,suite,etc(optional)
                        </label>
                        <InputGroup
                          name="apiSuite"
                          value={data.apiSuite}
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">{t.zipCode}</label>
                        <InputGroup
                          name="zipCode"
                          value={data.zipCode}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">{t.continent}</label>
                        <SelectListGroup
                          placeholder="Continet"
                          name="continent"
                          value={data.continent}
                          onChange={getCountriesbyContint}
                          options={continentOptions ? continentOptions : []}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">{t.country}</label>
                        <SelectListGroup
                          placeholder="Country"
                          name="country"
                          value={data.country}
                          onChange={getStatesbyCountry}
                          options={countryOptions ? countryOptions : []}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">{t.state}</label>
                        <SelectListGroup
                          placeholder="st"
                          name="st"
                          selected={data.st}
                          onChange={getCities}
                          options={stateOptions ? stateOptions : []}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">{t.city}</label>
                        <SelectListGroup
                          placeholder="city"
                          name="city"
                          value={data.city}
                          onChange={onChange}
                          options={cityOptions ? cityOptions : []}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">
                          {`${t.businessWebsite} (${t.optional})`}
                        </label>
                        <InputGroup
                          name="website"
                          value={data.website}
                          onChange={onChange}
                        />
                      </div>
                    </div>

                    <div
                      className="osr-btn-group p-b-15  text-center"
                      style={{ paddingTop: "5px" }}
                    >
                      <SaveButton
                        label={t.register}
                        type="save"
                        onClick={onSubmit}
                        disabled={!isEnabled}
                      />

                      <Popup
                        trigger={
                          <CancelButton label={t.cancel} type="button" />
                        }
                        modal
                      >
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
                              <h5>
                                Store front creation is not complete! <br /> You
                                have 24 hours to complete your registration
                              </h5>
                            </div>
                            <div className="actions">
                              <button
                                type="button"
                                className="small-os-btn small-ok-btn text-uppercase"
                                onClick={() => history.push("/")}
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
                    </div>
                  </form>
                ) : (
                  <Spinner />
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default AboutVendorView;
