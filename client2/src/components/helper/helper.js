export const onInputChange = e => {
  this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  });
};
