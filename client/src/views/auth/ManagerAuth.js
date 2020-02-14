import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from 'components/CustomInput/RegisterForm';
import HomeBackground from 'assets/img/home-background.jpg';
import { registerPublicUser } from 'store/auth/actions/index'

class ManagerAuth extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      password2: '',
      role: 'Manager'
    }
  };

  componentDidMount = () => {
    const data = { username: 'ishtiaq' }
    this.props.registerPublicUser(data)
  }

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onKeyPress = e => {
    var k = e ? e.which : window.event.keyCode;
    if (k === 32) e.preventDefault();
  };

  canBeSubmitted() {
    const { email, password, password2, username } = this.state.data;
    return (
      email.length > 8 &&
      password.length > 6 &&
      password2.length > 6 &&
      password === password2 &&
      username.length > 3
    );
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { data } = this.state;
    const { publicRegister } = this.props;

    await registerPublicUser(data)


  }

  render() {
    return (
      <section
        className="d-flex align-items-center flex-column justify-content-center h-100"
        style={{
          backgroundImage: 'url(' + HomeBackground + ')',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      >
        <RegisterForm
          data={this.state.data}
          onChange={this.onChange}
          registerText="Register as Manager"
          registerContinue="Continue"
          isEnabled={this.canBeSubmitted()}
          onKeyPress={this.onKeyPress}
          onSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerPublicUser })(ManagerAuth);
