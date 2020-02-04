import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlannerImages } from "../../../actions/plannerActions";
import { addVendorImages } from "../../../actions/vendorActions";
import UploadImagesView from "./UploadImagesView";
import axios from "axios";
import isEmpty from "../../../utils/is-empty";
import { toast } from "react-toastify";
import Spinner from "../../common/Spinner/Spinner";
import ImageForm from "../../common/imageForm";

class UploadImages extends ImageForm {
  state = {
    data: {
      selectedFile: {},
      loading: false,
      selected: false,
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: ""
    }
  };

  componentDidMount() {
    const { images } = this.props.profile;
    if (!isEmpty(images)) {
      const image = {};
      image.image1 = !isEmpty(images.image1) ? images.image1 : "";
      image.image2 = !isEmpty(images.image2) ? images.image2 : "";
      image.image3 = !isEmpty(images.image3) ? images.image3 : "";
      image.image4 = !isEmpty(images.image4) ? images.image4 : "";
      image.image5 = !isEmpty(images.image5) ? images.image5 : "";

      this.setState({
        data: {
          ...this.state.data,
          image1: image.image1,
          image2: image.image2,
          image3: image.image3,
          image4: image.image4,
          image5: image.image5
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const imgs = nextProps.profile.images;
    console.log(imgs.image1);
    if (!isEmpty(imgs)) {
      imgs.image1 = !isEmpty(imgs.image1) ? imgs.image1 : "";
      imgs.image2 = !isEmpty(imgs.image2) ? imgs.image2 : "";
      imgs.image3 = !isEmpty(imgs.image3) ? imgs.image3 : "";
      imgs.image4 = !isEmpty(imgs.image4) ? imgs.image4 : "";
      imgs.image5 = !isEmpty(imgs.image5) ? imgs.image5 : "";

      this.setState({
        data: {
          ...this.state.data,
          image1: imgs.image1,
          image2: imgs.image2,
          image3: imgs.image3,
          image4: imgs.image4,
          image5: imgs.image5
        }
      });
    }
  }

  clearState = () => {
    this.setState({
      data: {
        ...this.state.data,
        selectedFile: {},
        loading: false,
        selected: false
      }
    });
  };
  onSubmit = () => {
    const { image1, image2, image3, image4, image5 } = this.state.data;

    const imageFields = {};

    if (!isEmpty(image1)) imageFields.image1 = image1;
    if (!isEmpty(image2)) imageFields.image2 = image2;
    if (!isEmpty(image3)) imageFields.image3 = image3;
    if (!isEmpty(image4)) imageFields.image4 = image4;
    if (!isEmpty(image5)) imageFields.image5 = image5;

    const { type } = this.props.auth.user;

    if (type === "planner") {
      this.props.addPlannerImages(imageFields);
    } else if (type === "vendor") {
      this.props.addVendorImages(imageFields);
    }
    this.clearState();
    toast.success("Successfully Updated on Website");
  };

  render() {
    const { data } = this.state;
    const { t } = this.props;
    if (data.loading) {
      return <Spinner />;
    }
    return (
      <UploadImagesView
        onImageSelected={this.onImageSelected}
        onImageUpload={this.onImageUpload}
        onSubmit={this.onSubmit}
        data={data}
        t={t}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile.profile,
  t: state.common.dashboardLabels
});

export default connect(mapStateToProps, { addPlannerImages, addVendorImages })(
  UploadImages
);
