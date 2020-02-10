import React from "react";
import Packages from "./Packages";
import Reviews from "./Reviews";
import Office from "./Office";
import Services from "./Services";
import Spinner from "../../common/Spinner/Spinner";
import Disqus from "disqus-react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const HeadersArea2 = ({ userItem, userItemOffer, userType, t }) => {
  console.log(userItem);
  const disqusShortname = "plannerdirectory"; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: window.location.href, //this.props.pageUrl
    identifier: userItem._id, //this.props.uniqueId
    title: userItem.storeName //this.props.title
  };
  if (!userItemOffer) {
    return <Spinner />;
  }
  const tabOptions = (
    <Tabs style={{ backgroundColor: "#26303d" }} defaultIndex={0}>
      <TabList className="nav nav-tabs">
        <Tab
          style={{
            paddingLeft: "30px",
            paddingRight: "27px",
            fontSize: "20px",
            color: "#686f77"
          }}
        >
          {userType === "planner" ? t.packages : t.services}
        </Tab>

        <Tab
          style={{
            paddingLeft: "30px",
            paddingRight: "27px",
            fontSize: "20px",
            color: "#686f77"
          }}
          id={userItem.storeName}
        >
          {t.reviews}
        </Tab>
        <Tab
          style={{
            paddingLeft: "40px",
            paddingRight: "27px",
            fontSize: "20px",
            color: "#686f77"
          }}
        >
          {t.office}
        </Tab>
      </TabList>

      <TabPanel>
        {userType === "planner" ? (
          <Packages t={t} plannerItemPackages={userItemOffer} />
        ) : (
          <Services vendorItemServices={userItemOffer} />
        )}
      </TabPanel>
      <TabPanel forceRender={true}>
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
      </TabPanel>
      <TabPanel>
        <Office t={t} plannerItem={userItem} userType={userType} />
      </TabPanel>
    </Tabs>
  );

  return <div>{tabOptions}</div>;
};

export default HeadersArea2;
