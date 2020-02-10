import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImage } from "../../reduxController/actions/profileActions";
import axios from "axios";

import "./UploadImage.css";

class UploadImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onClickUpload = this.onClickUpload.bind(this);
  }
  onChange(event) {
    this.setState({ selectedFile: event.target.files[0] });
  }

  onClickUpload = e => {
    e.preventDefault();
    let order = e.target.id;
    const httpClient = axios.create();
    httpClient.defaults.timeout = 10000;
    const formData = new FormData();
    formData.append(order, this.state.selectedFile);
    console.log(`/api/image-upload/${order}`);
    httpClient
      .post(`/api/image-upload/${order}`, formData)
      .then(res => this.setState({ [order]: res.data.imageUrl }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.first);
    console.log(this.state.second);
    return (
      <form className="input-container">
        <div className="container">
          <div className="row" style={{ paddingTop: "10px" }}>
            <input type="file" id="idofinput" onChange={this.onChange} />
            <button
              id="first"
              className="uploadButton"
              onClick={this.onClickUpload}
            >
              Upload file
            </button>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <input type="file" id="idofinput" onChange={this.onChange} />
            <button
              id="second"
              className="uploadButton"
              onClick={this.onClickUpload}
            >
              Upload file
            </button>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <input type="file" id="idofinput" onChange={this.onChange} />
            <button
              id="third"
              className="uploadButton"
              onClick={this.onClickUpload}
            >
              Upload file
            </button>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <input type="file" id="idofinput" onChange={this.onChange} />
            <button
              id="fourth"
              className="uploadButton"
              onClick={this.onClickUpload}
            >
              Upload file
            </button>
          </div>
          <div className="row">
            <input type="file" id="idofinput" onChange={this.onChange} />
            <button
              id="fifth"
              className="uploadButton"
              onClick={this.onClickUpload}
            >
              Upload file
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { uploadImage }
)(UploadImage);
