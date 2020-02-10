import React from "react";
import InputGroup from "../../common/InputGroup";
import ImageUpload from "../../common/Image_Upload/ImageUpload";
import AddButton from "../../ui/Buttons/AddButton";

const ImagesView = ({
  onImageSelected,
  onImageUpload,
  onSubmit,
  data,
  onChange,
  onAddLink
}) => {
  return (
    <div className="tab-pane" id="services" role="tabpanel">
      <div className="row">
        <div className="col-md-12 text-center">
          <h4 className="font-32 tabs-title">Upload Images</h4>
        </div>
        <form id="images" onSubmit={onSubmit}>
          <div className="col-md-12">
            <div
              className="card m-b-30 border-1-gray"
              style={{ width: "1100px" }}
            >
              <div className="card-body">
                <h6 className="text-muted m-t-20">
                  <b>Website Background: </b>
                </h6>
                <ImageUpload
                  type="upload"
                  label="Upload"
                  id="websiteBg"
                  onChange={onImageSelected}
                  onClick={onImageUpload}
                />

                <h6 className="text-muted m-t-20">
                  <b>Auth Bg: </b>
                </h6>
                <ImageUpload
                  type="upload"
                  label="Upload"
                  id="authBg"
                  onChange={onImageSelected}
                  onClick={onImageUpload}
                />

                <h6 className="text-muted m-t-20">
                  <b>Sponser By: </b>
                </h6>
                <ImageUpload
                  type="upload"
                  label="Upload"
                  id="sponsorBy"
                  onChange={onImageSelected}
                  onClick={onImageUpload}
                />

                <h6 className="text-muted m-t-20">
                  <b>Sponsor Link: </b>
                </h6>
                <InputGroup
                  name="sponsorLink"
                  placeholder="Add Sponsor Link here"
                  value={data.sponsorLink}
                  onChange={onChange}
                />
                <AddButton type="button" onClick={onAddLink}>
                  Add Link
                </AddButton>
              </div>
            </div>
            {/* end card */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImagesView;
