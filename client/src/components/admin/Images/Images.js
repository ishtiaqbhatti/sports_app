import React from "react";
import { connect } from "react-redux";
import { addBgImages } from "../../../actions/adminActions";
import ImagesView from "./Images-View";
import ImageForm from "../../common/imageForm";
import isEmpty from "../../../utils/is-empty";
import { toast } from "react-toastify";
import Spinner from "../../common/Spinner/Spinner";

class Images extends ImageForm {
  state = {
    data: {
      loading: false,
      selectedFile: {},
      selected: false,
      websiteBg: "",
      authBg: "",
      sponsorBy: "",
      sponsorLink: ""
    }
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        sponsorLink: e.target.value
      }
    });
  };

  onAddLink = () => {
    if (this.state.data.sponsorLink) {
      this.onSubmit();
    } else {
      toast.warn("Please select a Sponsor Link");
    }
  };

  onSubmit = () => {
    const { websiteBg, authBg, sponsorBy, sponsorLink } = this.state.data;

    const imageFields = {};

    if (!isEmpty(websiteBg)) imageFields.websiteBg = websiteBg;
    if (!isEmpty(authBg)) imageFields.authBg = authBg;
    if (!isEmpty(sponsorBy)) imageFields.sponsorBy = sponsorBy;
    if (!isEmpty(sponsorLink)) imageFields.sponsorLink = sponsorLink;

    if (!isEmpty(imageFields)) {
      this.props.addBgImages(imageFields);
    }
    this.setState({
      data: {
        websiteBg: "",
        authBg: "",
        sponsorBy: "",
        sponsorLink: "",
        selected: false
      }
    });
    toast.success("Successfully Updated on Website");
  };

  render() {
    const { data } = this.state;
    if (this.state.data.loading) return <Spinner />;
    return (
      <ImagesView
        onImageSelected={this.onImageSelected}
        onImageUpload={this.onImageUpload}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onAddLink={this.onAddLink}
        data={data}
      />
    );
  }
}

export default connect(
  null,
  { addBgImages }
)(Images);
