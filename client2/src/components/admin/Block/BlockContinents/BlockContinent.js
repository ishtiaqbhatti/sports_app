import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getContinents,
  blockContinent,
  unBlockContinent
} from "../../../../actions/adminActions";

import { toast } from "react-toastify";

import BlockContinentView from "./BlockContinent-View";

class BlockContinents extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false
    }
  };

  componentDidMount() {
    this.props.getContinents();
  }

  onClickEdit = e => {
    this.setState({
      data: {
        ...this.state.data,
        disabled: !this.state.data.disabled,
        editdisabled: !this.state.data.editdisabled
      }
    });
  };

  onClickSave = () => {
    this.onClickEdit();
    toast.success("Successfully Updated");
  };

  onBlock = continent => {
    let continentBody = {
      continent: continent
    };
    this.props.blockContinent(continentBody);
  };

  onUnBlock = continent => {
    let continentBody = {
      continent: continent
    };
    this.props.unBlockContinent(continentBody);
  };
  render() {
    const { data } = this.state;
    const { continents } = this.props;
    return (
      <BlockContinentView
        data={data}
        onBlock={this.onBlock}
        onUnBlock={this.onUnBlock}
        continents={continents}
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
      />
    );
  }
}

const mapStateToProps = state => ({
  continents: state.admin.continents
});

export default connect(
  mapStateToProps,
  { getContinents, blockContinent, unBlockContinent }
)(BlockContinents);
