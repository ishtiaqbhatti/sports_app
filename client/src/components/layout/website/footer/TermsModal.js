import React from "react";
import Modal from "react-modal";
import aboutUs from "../../../../img/images/about.png";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
const TermsModal = ({ modalIsOpen, closeModal, terms, t }) => {
  return (
    <Modal
      // closeTimeoutMS={150}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="react-modal-styling"
      overlayClassName="react-modal-overlay"
    >
      <div className="">
        <div className="modal-header" style={{ padding: "0rem" }}>
          <button type="button" className="close" onClick={closeModal}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="about-us-wrap radius-5">
          <h5 className="title">{t.termsCondition}</h5>
          <div className="about-caption d-xs-inherit d-flex align-items-center">
            <figure className="sticky-about-us">
              <img
                class="modal-image-style"
                src={aboutUs}
                alt="Terms and Conditions"
              />
            </figure>
            <div>
              <Editor
                readOnly
                toolbarHidden
                editorState={EditorState.createWithContent(
                  convertFromRaw(JSON.parse(terms))
                )}
                wrapperClassName="editor-about-us-wrapper"
                editorClassName="editor-about-us-content"
                editorStyle={{ overFlow: "none", overFlowY: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TermsModal;
