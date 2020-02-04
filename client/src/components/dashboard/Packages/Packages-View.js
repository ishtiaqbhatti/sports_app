import React from "react";
import EditButton from "../../ui/Buttons/EditButton";

import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import classnames from "classnames";

const PackagesView = ({
  adminPackages,
  button,
  data,
  handleInputChange,
  onSubmit,
  admin,
  onClickEdit,
  onClickSave,
  p1Title,
  p2Title,
  p3Title,
  onChange,
  featuresCompleted,
  t
}) => {
  console.log(featuresCompleted);
  console.log(button.formdisabled);
  return (
    <div className="tab-pane" id="packages" role="tabpanel">
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
            disabled={!featuresCompleted ? true : button.editdisabled}
            type="Edit"
          >
            {t.edit}
          </EditButton>
        </div>
      </div>
      <form
        style={{ paddingTop: "1rem" }}
        id="package"
        noValidate
        onSubmit={onSubmit}
      >
        <fieldset disabled={!featuresCompleted ? "" : button.formdisabled}>
          <div className="row">
            <div className="col-md-4">
              <div
                className={`card pkg-gold package-card m-b-30 border-1-gray bg-image-${p1Title}`}
              >
                <div
                  className={`price-table-head ${p1Title}`}
                  // style={{
                  //   backgroundImage: "url(/assets/images/custom-pkg.jpg)"
                  // }}
                >
                  <h6 className="text-center">{p1Title}</h6>
                </div>
                <div className="card-body">
                  <div className="m-0">
                    <div className="text-center">
                      <div className="custom-control d-inline custom-checkbox">
                        <input
                          name="p1IsEnable"
                          type="checkbox"
                          checked={data.p1IsEnable}
                          onChange={handleInputChange}
                          className="custom-control-input"
                          id="p1IsEnable"
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="p1IsEnable"
                        >
                          {t.enable}
                        </label>
                      </div>
                    </div>
                    <h6 className="text-muted">
                      <b>{t.description}:</b>
                    </h6>
                    <textarea
                      name="p1Description"
                      id="textarea"
                      value={data.p1Description}
                      onChange={handleInputChange}
                      maxLength={500}
                      minLength={200}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="border-divider">
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <div className="custom-control d-inline custom-checkbox">
                          <input
                            name="p1Ofr1"
                            type="checkbox"
                            checked={data.p1Ofr1}
                            onChange={handleInputChange}
                            className="custom-control-input"
                            id="p1Ofr1"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="p1Ofr1"
                          >
                            Bundle 1:
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="p1Offer1"
                        value={data.p1Offer1}
                        onChange={handleInputChange}
                        maxLength={500}
                        minLength={200}
                        className="form-control"
                      />
                    </div>
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <label>{t.price}:</label>
                      </div>
                      <input
                        name="p1Offer1Price"
                        type="text"
                        value={data.p1Offer1Price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="$200-$500"
                      />
                    </div>
                  </div>
                  <div className="border-divider">
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <div className="custom-control d-inline custom-checkbox">
                          <input
                            name="p1Ofr2"
                            type="checkbox"
                            checked={data.p1Ofr2}
                            onChange={handleInputChange}
                            className="custom-control-input"
                            id="p1Ofr2"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="p1Ofr2"
                          >
                            Bundle 2:
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="p1Offer2"
                        value={data.p1Offer2}
                        onChange={onChange}
                        maxLength={500}
                        minLength={200}
                        className="form-control"
                      />
                    </div>
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <label>{t.price}:</label>
                      </div>
                      <input
                        name="p1Offer2Price"
                        type="text"
                        value={data.p1Offer2Price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="$200-$500"
                      />
                    </div>
                  </div>
                  <div className="border-divider">
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <div className="custom-control d-inline custom-checkbox">
                          <input
                            name="p1Ofr3"
                            type="checkbox"
                            checked={data.p1Ofr3}
                            onChange={handleInputChange}
                            className="custom-control-input"
                            id="p1Ofr3"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="p1Ofr3"
                          >
                            Bundle 3:
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="p1Offer3"
                        value={data.p1Offer3}
                        onChange={handleInputChange}
                        maxLength={500}
                        minLength={200}
                        className="form-control"
                      />
                    </div>
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <label>{t.price}:</label>
                      </div>
                      <input
                        name="p1Offer3Price"
                        type="text"
                        value={data.p1Offer3Price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="$200-$500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-md-4">
              <div
                className={`card pkg-gold package-card m-b-30 border-1-gray bg-image-${p2Title}`}
              >
                <div className={`price-table-head ${p2Title}`}>
                  <h6 className="text-center">{p2Title}</h6>
                </div>
                <div className="card-body">
                  <div className="m-0">
                    <div className="text-center">
                      <div className="custom-control d-inline custom-checkbox">
                        <input
                          name="p2IsEnable"
                          type="checkbox"
                          checked={data.p2IsEnable}
                          onChange={handleInputChange}
                          className="custom-control-input"
                          id="p2IsEnable"
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="p2IsEnable"
                        >
                          {t.enable}
                        </label>
                      </div>
                    </div>
                    <h6 className="text-muted">
                      <b>{t.description}:</b>
                    </h6>
                    <textarea
                      name="p2Description"
                      id="textarea"
                      value={data.p2Description}
                      onChange={handleInputChange}
                      maxLength={500}
                      minLength={200}
                      className="form-control"
                    />
                  </div>
                  <div className="border-divider">
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <div className="custom-control d-inline custom-checkbox">
                          <input
                            name="p2Ofr1"
                            type="checkbox"
                            checked={data.p2Ofr1}
                            onChange={handleInputChange}
                            className="custom-control-input"
                            id="p2Ofr1"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="p2Ofr1"
                          >
                            Bundle 1:
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="p2Offer1"
                        value={data.p2Offer1}
                        onChange={handleInputChange}
                        maxLength={500}
                        minLength={200}
                        className="form-control"
                      />
                    </div>
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <label>{t.price}:</label>
                      </div>
                      <input
                        name="p2Offer1Price"
                        type="text"
                        value={data.p2Offer1Price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="$200-$500"
                      />
                    </div>
                  </div>
                  <div className="border-divider">
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <div className="custom-control d-inline custom-checkbox">
                          <input
                            name="p2Ofr2"
                            type="checkbox"
                            checked={data.p2Ofr2}
                            onChange={handleInputChange}
                            className="custom-control-input"
                            id="p2Ofr2"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="p2Ofr2"
                          >
                            Bundle 2:
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="p2Offer2"
                        value={data.p2Offer2}
                        onChange={handleInputChange}
                        maxLength={500}
                        minLength={200}
                        className="form-control"
                      />
                    </div>
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <label>{t.price}:</label>
                      </div>
                      <input
                        name="p2Offer2Price"
                        type="text"
                        value={data.p2Offer2Price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="$200-$500"
                      />
                    </div>
                  </div>
                  <div className="border-divider">
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <div className="custom-control d-inline custom-checkbox">
                          <input
                            name="p2Ofr3"
                            type="checkbox"
                            checked={data.p2Ofr3}
                            onChange={handleInputChange}
                            className="custom-control-input"
                            id="p2Ofr3"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="p2Ofr3"
                          >
                            Bundle 3:
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="p2Offer3"
                        value={data.p2Offer3}
                        onChange={handleInputChange}
                        maxLength={500}
                        minLength={200}
                        className="form-control"
                      />
                    </div>
                    <div className="m-t-20">
                      <div className="text-muted mb-2">
                        <label>{t.price}:</label>
                      </div>
                      <input
                        name="p2Offer3Price"
                        type="text"
                        value={data.p2Offer3Price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="$200-$500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-md-4">
              <div
                className={`card pkg-gold package-card m-b-30 border-1-gray bg-image-${p3Title}`}
              >
                <div className={`price-table-head ${p3Title}`}>
                  <h6 className="text-center">{p3Title}</h6>
                </div>
                <div className="card-body">
                  <div className="m-0">
                    <div className="text-center">
                      <div className="custom-control d-inline custom-checkbox">
                        <input
                          name="p3IsEnable"
                          type="checkbox"
                          checked={data.p3IsEnable}
                          onChange={handleInputChange}
                          className="custom-control-input"
                          id="p3IsEnable"
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="p3IsEnable"
                        >
                          {t.enable}
                        </label>
                      </div>
                    </div>
                    {/* <h6 className="text-muted">
                      <b>Description:</b>
                    </h6> */}
                    <p style={{ paddingTop: "1rem" }}>
                      {data.p1Title === "Silver" || data.p1Title === "Bronze"
                        ? adminPackages.custom
                        : adminPackages.bespoke}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
        </fieldset>
        {/* </div>  */}
      </form>
      {/* end row */}
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          onClick={onSubmit}
          label={t.save}
          type="save"
          disabled={!featuresCompleted ? false : button.disabled}
        />
        <CancelButton
          onClick={onClickSave}
          label={t.cancel}
          type="cancel"
          disabled={button.disabled}
        />
      </div>
    </div>
  );
};

export default PackagesView;
