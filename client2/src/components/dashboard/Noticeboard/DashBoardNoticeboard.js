import React, { Component } from "react";
import { connect } from "react-redux";
import { getNoticeboard } from "../../../actions/adminActions";
import Spinner from "../../common/Spinner/Spinner";

class DashBoardNoticeboard extends Component {
  componentDidMount() {
    if (!this.props.noticeboardLoaded) {
      this.props.getNoticeboard();
    }
  }
  render() {
    const { notices, t } = this.props;

    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <div className="tab-pane active" id="noticeboard" role="tabpanel">
        <div className="row">
          <div style={{ paddingTop: "1rem" }} className="col-md-12 text-center">
            <h4 className="font-32 tabs-title">{t.welcome}</h4>
          </div>
          <div className="col-md-12">
            {notices.map(notice => (
              <div className="card m-b-30 border-1-gray">
                <div className="card-body">
                  <h4 className="mt-0 header-title">{notice.title}</h4>
                  <p>{notice.description}</p>
                  <span
                    style={{ display: "block" }}
                    className="cd-date cl-blue"
                  >
                    {`${notice.date.slice(11, 19)}${", "}${notice.date.slice(
                      0,
                      10
                    )}`}
                  </span>
                  {notice.image && (
                    <img
                      className="img-center"
                      src={notice.image}
                      alt="Noticeboard"
                    />
                  )}
                </div>
              </div>
            ))}

            {/* end card */}
          </div>
        </div>
        {/* end row */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notices: state.admin.notices,
  loading: state.common.loading,
  noticeboardLoaded: state.common.noticeboardLoaded,
  t: state.common.dashboardLabels
});

export default connect(
  mapStateToProps,
  { getNoticeboard }
)(DashBoardNoticeboard);
