import React, { Component } from "react";
import countryList from "react-select-country-list";
import ClubName from "components/Form/ClubName";
import ClubDetails from "components/Form/ClubDetails";
import GroupName from "components/Form/GroupName";
import Dialog from "components/Dialog/Dialog";
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
    const { data } = this.state;
    const { step } = this.state.data;
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <Dialog
            form={
              <ClubName clubName={data.clubName} onChange={this.onChange} />
            }
            previous={false}
            nextStep={this.nextStep}
          />
        );

      case 2:
        return (
          <Dialog
            form={<ClubDetails data={data} onChange={this.onChange} />}
            nextStep={this.nextStep}
            previousStep={this.prevStep}
          />
        );

      case 3:
        return (
          <Dialog
            form={
              <GroupName groupName={data.groupName} onChange={this.onChange} />
            }
            nextStep={this.nextStep}
            previousStep={this.prevStep}
            nextBtnText="Save and Continue"
          />
        );
    }
  }
}

export default Journey;
