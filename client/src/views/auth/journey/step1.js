import React from "react";
import Modal from "react-modal";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import InputGroup from "../../common/InputGroup";
const Step1 = ({ data, onChange, nextStep }) => {
  return (
    <section
      className="d-flex align-items-center flex-column justify-content-center h-100"
      style={{
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
                <h5 className="modal-title">Tell us About Yourself</h5>
              </div>
              <div className="modal-body">
                <form noValidate>
                  <div className="row">
                    <div className="form-group col-md-10 pl-10">
                      <label htmlFor="inputEmail4">Enter your Club Name</label>
                      <InputGroup
                        name="clubName"
                        value={data.clubName}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="bd-top" />
                  <div className="osr-btn-group p-b-15  text-center">
                    <SaveButton
                      disabled={data.clubName.length === 0}
                      label="Next"
                      type="save"
                      onClick={nextStep}
                    />
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

export default Step1;
