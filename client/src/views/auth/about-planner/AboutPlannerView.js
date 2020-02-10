import React from "react";
import AboutPlannerForm from "./AboutPlannerForm";
import AboutPlannerPopUp from "./AboutPlannerPopUp";
import Modal from "react-modal";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";

import Popup from "reactjs-popup";
import Spinner from "../../common/Spinner/Spinner";

const AboutPlannerView = ({
  isEnabled,
  onSubmit,
  data,
  onChange,
  revenueOptions,
  cateringOptions,
  unBlockedAfricanCountriesOptions,
  stateOptions,
  cityOptions,
  onSelectState,
  onSelectCountry,
  errors,
  validate,
  optional,
  handleOptional,
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
            style={{ maxWidth: "1200px" }}
            className="modal-dialog popup-style"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <h5 className="modal-title">{t.tellUs}</h5>
              </div>
              <div className="modal-body">
                <form noValidate>
                  <AboutPlannerForm
                    t={t}
                    data={data}
                    optional={optional}
                    handleOptional={handleOptional}
                    onChange={onChange}
                    revenueOptions={revenueOptions}
                    cateringOptions={cateringOptions}
                    unBlockedAfricanCountriesOptions={
                      unBlockedAfricanCountriesOptions
                    }
                    stateOptions={stateOptions}
                    cityOptions={cityOptions}
                    onSelectState={onSelectState}
                    onSelectCountry={onSelectCountry}
                    errors={errors}
                  />
                  <div className="bd-top" />
                  <div className="osr-btn-group p-b-15  text-center">
                    <SaveButton
                      disabled={validate()}
                      label={t.register}
                      type="save"
                      onClick={onSubmit}
                    />

                    <Popup
                      trigger={<CancelButton label={t.cancel} type="button" />}
                      modal
                    >
                      {close => <AboutPlannerPopUp close={close} />}
                    </Popup>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default AboutPlannerView;
