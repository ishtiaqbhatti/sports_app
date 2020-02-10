import React from "react";

import EditButton from "../../ui/Buttons/EditButton";

import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";

import ServiceItem from "./ServiceItem";

const ServicesView = ({
  onClickEdit,
  onClickSave,
  onChange,
  onSubmit,
  data,
  button,
  featuresCompleted,
  t
}) => {
  return (
    <div className="tab-pane" id="services" role="tabpanel">
      <div className="row">
        {/* <div className="col align-self-center text-center">
          <h4 className="font-18 mb-0 tabs-title">
            Services <sup className="text-danger">*</sup>
          </h4>
        </div> */}
        <div className="col-md-12 text-center" style={{ paddingTop: "1rem" }}>
          <h4 className="font-32 tabs-title">{t.services}</h4>
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
        onSubmit={onSubmit}
        id="services"
        noValidate
      >
        <fieldset disabled={!featuresCompleted ? "" : button.formdisabled}>
          <div className="row">
            <ServiceItem
              tname="title1"
              tvalue={data.title1}
              counterLength={data.desc1.length}
              dname="desc1"
              dvalue={data.desc1}
              onChange={onChange}
              bg="bg-services-1"
              t={t}
            />
            <ServiceItem
              tname="title2"
              tvalue={data.title2}
              counterLength={data.desc2.length}
              dname="desc2"
              dvalue={data.desc2}
              onChange={onChange}
              bg="bg-services-2"
              t={t}
            />
            <ServiceItem
              tname="title3"
              tvalue={data.title3}
              counterLength={data.desc3.length}
              dname="desc3"
              dvalue={data.desc3}
              onChange={onChange}
              bg="bg-services-3"
              t={t}
            />
            <ServiceItem
              tname="title4"
              tvalue={data.title4}
              counterLength={data.desc4.length}
              dname="desc4"
              dvalue={data.desc4}
              onChange={onChange}
              bg="bg-services-4"
              t={t}
            />
            <ServiceItem
              tname="title5"
              tvalue={data.title5}
              counterLength={data.desc5.length}
              dname="desc5"
              dvalue={data.desc5}
              onChange={onChange}
              bg="bg-services-5"
              t={t}
            />
            <ServiceItem
              tname="title6"
              tvalue={data.title6}
              counterLength={data.desc6.length}
              dname="desc6"
              dvalue={data.desc6}
              onChange={onChange}
              bg="bg-services-6"
              t={t}
            />
            <ServiceItem
              tname="title7"
              tvalue={data.title7}
              counterLength={data.desc7.length}
              dname="desc7"
              dvalue={data.desc7}
              onChange={onChange}
              bg="bg-services-7"
              t={t}
            />
            <ServiceItem
              tname="title8"
              tvalue={data.title8}
              counterLength={data.desc8.length}
              dname="desc8"
              dvalue={data.desc8}
              onChange={onChange}
              bg="bg-services-8"
              t={t}
            />
            <ServiceItem
              tname="title9"
              tvalue={data.title9}
              counterLength={data.desc9.length}
              dname="desc9"
              dvalue={data.desc9}
              onChange={onChange}
              bg="bg-services-9"
              t={t}
            />
          </div>
          {/* end row */}
        </fieldset>
      </form>

      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          label={t.save}
          onClick={onSubmit}
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

export default ServicesView;
