import React from "react";
import { connect } from "react-redux";
import { addNoticeboard } from "../../../actions/adminActions";
import NoticeboardView from "./NoticeboardView";
import { toast } from "react-toastify";
import isEmpty from "../../../utils/is-empty";
import ImageForm from "../../common/imageForm";
import Spinner from "../../common/Spinner/Spinner";
class Noticeboard extends ImageForm {
  state = {
    data: {
      noticeboard: "",
      selectedFile: {},
      loading: false,
      selected: false
    },
    title: "",
    desc: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearState = () => {
    this.setState({
      data: {
        noticeboard: "",
        selectedFile: {},
        selected: false,
        loading: false
      },
      title: "",
      desc: ""
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, desc } = this.state;
    const { noticeboard, selected } = this.state.data;

    if (selected && isEmpty(noticeboard)) {
      toast.warn("Please Upload the Image you have Selected");
    } else {
      const noticeboardFields = {};
      noticeboardFields.title = title;
      noticeboardFields.desc = desc;
      if (!isEmpty(noticeboard)) noticeboardFields.image = noticeboard;

      this.props.addNoticeboard(noticeboardFields);
      this.clearState();
      toast.success("Successfully Updated");
    }
  };
  render() {
    const { title, desc } = this.state;
    const { loading } = this.state.data;

    if (loading) return <Spinner />;
    return (
      <NoticeboardView
        onChange={this.onChange}
        title={title}
        desc={desc}
        onImageSelected={this.onImageSelected}
        onImageUpload={this.onImageUpload}
        onSubmit={this.onSubmit}
        clearState={this.clearState}
      />
    );
  }
}

export default connect(
  null,
  { addNoticeboard }
)(Noticeboard);
