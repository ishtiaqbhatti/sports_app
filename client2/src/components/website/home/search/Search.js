import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// import "../Home1.css";
import "../Home.css";

class Search extends Component {
  state = {
    query: ""
  };

  onChange = e => {
    let query = e.target.value;
    this.setState({ query });
  };

  handleClick = e => {
    e.preventDefault();
    const { id } = e.target;

    const { query } = this.state;
    console.log(query);
    if (id === "planner" && query) {
      this.props.history.push(`/planners?query=${query}`);
    }
    if (id === "vendor" && query) {
      this.props.history.push(`/vendors?query=${query}`);
    }
  };
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <input
              value={this.state.query}
              onChange={this.onChange}
              type="text"
              className="form-control"
              placeholder={t.searchHere}
            />
            <label
              className="search-label"
              style={{ fontSize: "14px", fontWeight: "140" }}
            >
              {t.searchText}
            </label>
          </div>
          <div className="btn-wrap text-center">
            <button
              id="planner"
              onClick={this.handleClick}
              className="btn btn-primary yellow-style"
            >
              <span>⌕</span> {t.planner}{" "}
            </button>
            <button
              id="vendor"
              onClick={this.handleClick}
              className="btn btn-primary blue-style"
            >
              <span>⌕</span> {t.vendor}
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(Search);
