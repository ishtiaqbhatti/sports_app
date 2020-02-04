import React from "react";
import ImageUpload from "../../common/Image_Upload/ImageUpload";

const NoticeboardView = ({
  title,
  desc,
  onChange,
  onImageSelected,
  onImageUpload,
  onSubmit,
  clearState
}) => {
  return (
    <div className="tab-pane" id="services" role="tabpanel">
      <div className="row">
        <div className="col-md-12 text-center">
          <h4 className="font-32 tabs-title">Noticeboard</h4>
        </div>
        <form id="noticeboard" onSubmit={onSubmit}>
          <div
            className="col-md-12 offset-md-2 text-center"
            style={{ width: "1000px" }}
          >
            <div className="card m-b-30 border-1-gray">
              <div className="card-body">
                <h6 className="text-muted mt-0">
                  <b>Title</b>
                </h6>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={onChange}
                  placeholder="Title or services offered"
                />
                <h6 className="text-muted m-t-20">
                  <b>Description</b>
                  {/* <div class="float-right"><span class="chars">300</span>/300</div> */}
                </h6>
                <textarea
                  name="desc"
                  className="form-control"
                  rows={10}
                  // maxLength={300}
                  // rows={3}
                  value={desc}
                  onChange={onChange}
                  placeholder="Enter summary/ description/ variations of what is on offer here."
                  defaultValue={""}
                />

                <ImageUpload
                  id="noticeboard"
                  type="upload"
                  label="Upload Image"
                  onChange={onImageSelected}
                  onClick={onImageUpload}
                />
              </div>
            </div>
            {/* end card */}
          </div>
        </form>
      </div>
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <button
          className="os-btn waves-effect waves-light save-btn text-uppercase"
          type="save"
          form="noticeboard"
          onClick={onSubmit}
          disabled={!(title.length > 0 && desc.length > 0)}
        >
          Add
        </button>
        <button
          className="os-btn waves-effect waves-light cancel-btn text-uppercase"
          onClick={clearState}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NoticeboardView;
