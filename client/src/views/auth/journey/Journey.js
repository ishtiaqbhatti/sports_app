import React, { Component } from "react";
import countryList from "react-select-country-list";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
class Journey extends Component {
  state = {
    data: {
      clubName: "",
      clubActivity: "",
      clubCountry: "",
      clubCity: "",
      phoneNumber: "",
      clubSize: "",
      groupName: "",
      step: 1,
      countryOptions: []
    }
  };

  async componentDidMount() {
    if (countryList.length === 0) {
      const countryOptions = await countryList().getData();
      this.setState({ data: { ...this.state.data, countryOptions } });
    }
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state.data;
    this.setState({
      data: {
        ...this.state.data,
        step: step + 1
      }
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state.data;
    this.setState({
      data: {
        ...this.state.data,
        step: step - 1
      }
    });
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { step } = this.state.data;
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            onChange={this.onChange}
            data={this.state.data}
          />
        );

      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.onChange}
            data={this.state.data}
          />
        );

      case 3:
        return (
          <Step3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.onChange}
            data={this.state.data}
          />
        );
    }
  }
}

export default Journey;
