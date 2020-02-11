import React from "react";
import Modal from "react-modal";
import SaveButton from "components/Buttons/SaveButton";
import CancelButton from "components/Buttons/CancelButton";
import InputGroup from "components/CustomInput/InputGroup";
import SelectListGroup from "components/CustomInput/SelectListGroup";

const Step2 = ({ data, onChange, nextStep, prevStep }) => {
  return (
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
              <h5 className="modal-title">Tell us About Yourself</h5>
            </div>
            <div className="modal-body">
              <form noValidate>
                <div className="row">
                  <div className="form-group col-md-12 pl-10">
                    <label htmlFor="inputEmail4">Club Name</label>
                    <InputGroup name="clubName" value={data.clubName} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">Club Activity</label>
                    <SelectListGroup
                      name="clubActivity"
                      value={data.clubActivity}
                      onChange={onChange}
                      options={[
                        { label: "Football", value: "Footabll" },
                        { label: "Rugby", value: "Rugby" },
                        { label: "Squash", value: "Squash" }
                      ]}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">Country</label>
                    <SelectListGroup
                      name="clubCountry"
                      value={data.clubCountry}
                      onChange={onChange}
                      options={data.countryOptions}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">City</label>
                  <InputGroup
                    name="clubCity"
                    placeholder="Enter City Name"
                    value={data.clubCity}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Phone Number</label>
                  <InputGroup
                    name="phoneNumber"
                    placeholder="+country-code xxx xxx xxx"
                    value={data.phoneNumber}
                    onChange={onChange}
                  />
                </div>
                <div className="bd-top" />
                <div className="osr-btn-group p-b-15  text-center">
                  <CancelButton label="Back" type="cancel" onClick={prevStep} />
                  <SaveButton label="Next" type="save" onClick={nextStep} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Step2;
