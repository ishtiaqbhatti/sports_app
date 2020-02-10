import React, { Component } from "react";
import { getPlannerItemPackages } from "../../../actions/plannerActions";
import { connect } from "react-redux";
import Disqus from "disqus-react";

class Reviews extends Component {
  // componentDidMount() {
  //   if (this.props.plannerItem) {
  //     if (this.props.plannerItem.user) {
  //       const user_id = {};
  //       user_id.user_id = this.props.plannerItem.user._id;
  //       this.props.getPlannerItemPackages(user_id);
  //     }
  //   }
  // }

  handleNewComment = comment => {
    console.log(comment.text);
  };

  render() {
    const disqusShortname = "plannerdirectory"; //found in your Disqus.com dashboard
    const disqusConfig = {
      url: window.location.href, //this.props.pageUrl
      identifier: this.props.id, //this.props.uniqueId
      title: this.props.id //this.props.title
    };
    return (
      <div
        className="tab-pane article-container"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        {/* <div className="form-row"> */}
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getPlannerItemPackages }
)(Reviews);
