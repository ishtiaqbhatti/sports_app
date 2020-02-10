import React from "react";

const ServiceItem = ({
  tname,
  tvalue,
  dname,
  dvalue,
  onChange,
  counterLength,
  bg,
  t
}) => {
  return (
    <div className="col-md-4 ">
      <div className="card m-b-30 border-1-gray">
        <div className={`card-body ${bg}`}>
          <h6 className="text-muted mt-0">
            <b>{t.title}</b>
          </h6>
          <input
            name={tname}
            value={tvalue}
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder={t.titleorService}
          />
          <h6 className="text-muted m-t-20">
            <b>{t.description}</b>
            <div class="float-right">
              <span className="chars">{counterLength}</span>/300
            </div>
          </h6>
          <textarea
            name={dname}
            value={dvalue}
            onChange={onChange}
            id="textarea"
            className="form-control"
            maxLength={300}
            rows={3}
            placeholder={t.titleSummary}
          />
        </div>
      </div>
      {/* end card */}
    </div>
  );
};

export default ServiceItem;
