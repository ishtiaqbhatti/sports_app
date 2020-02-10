import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCountriesByContinentOptions,
  getAllContinents
} from "../../../../actions/optionActions";
import {
  blockCountry,
  unBlockCountry,
  getBlockedCountries
} from "../../../../actions/adminActions";

import BlockCountriesView from "./BlockCountries-View";

class BlockCountries extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false,
      input: false,
      blockButton: false,
      continent: "",
      country: ""
    }
  };

  componentDidMount() {
    this.props.getBlockedCountries();
    this.props.getAllContinents();
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

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
        blockButton: true
      }
    });
  };
  onBlock = e => {
    e.preventDefault();
    let countryBody = {
      country: this.state.data.country
    };
    this.props.blockCountry(countryBody);
  };

  onUnBlock = country => {
    let countryBody = {
      country: country
    };
    this.props.unBlockCountry(countryBody);
  };

  getCountries = e => {
    e.preventDefault();
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
        input: true
      }
    });

    const continents = {
      continent: e.target.value
    };
    this.props.getCountriesByContinentOptions(continents);
  };

  render() {
    const { blockedCountries, continents, countriesByContinent } = this.props;
    const { data } = this.state;
    return (
      <BlockCountriesView
        data={data}
        onClickEdit={this.onClickEdit}
        continentOptions={continents}
        countryOptions={countriesByContinent}
        getCountries={this.getCountries}
        onChange={this.onChange}
        onBlock={this.onBlock}
        onUnBlock={this.onUnBlock}
        countries={blockedCountries}
      />
    );
  }
}

const mapStateToProps = state => ({
  continents: state.options.allContinents,
  countriesByContinent: state.options.countriesByContinentOptions,
  blockedCountries: state.admin.blockedCountries
});

export default connect(
  mapStateToProps,
  {
    getBlockedCountries,
    getAllContinents,
    getCountriesByContinentOptions,
    blockCountry,
    unBlockCountry
  }
)(BlockCountries);
