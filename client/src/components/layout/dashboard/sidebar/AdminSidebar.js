import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SidebarLink from "./Resuable/SidebarLink";
class AdminSidebar extends Component {
  state = {};
  render() {
    return (
      <div className="left side-menu">
        <button
          type="button"
          className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect"
        >
          <i className="navbar-toggler-icon" />
        </button>
        <div className="left-side-logo d-block d-lg-none">
          <div className="text-center">
            <a href="index.html" className="logo">
              <img src="assets/images/logo-dark.png" width={130} alt="logo" />
            </a>
          </div>
        </div>
        <div className="sidebar-inner slimscrollleft">
          <div id="sidebar-menu">
            <ul className="nav nav-tabs" role="tablist">
              <SidebarLink label="Search" linkTo="/dashboard/admin" />

              <SidebarLink
                label="Noticeboard"
                linkTo="/dashboard/admin/noticeboard"
              />

              <SidebarLink
                label="Unique Packages"
                linkTo="/dashboard/admin/packages"
              />

              <SidebarLink
                label="Categories"
                linkTo="/dashboard/admin/categories"
              />

              <SidebarLink
                label="Event Types"
                linkTo="/dashboard/admin/event-types"
              />

              <SidebarLink
                label="Caterings"
                linkTo="/dashboard/admin/caterings"
              />

              <SidebarLink
                label="About Us"
                linkTo="/dashboard/admin/about-us"
              />

              <SidebarLink
                label="T &amp; C
                "
                linkTo="/dashboard/admin/terms"
              />

              <SidebarLink
                label="Privacy Policy"
                linkTo="/dashboard/admin/privacy-policy"
              />

              <SidebarLink
                label="Upload Images"
                linkTo="/dashboard/admin/upload-bg"
              />

              <SidebarLink
                label="Continents"
                linkTo="/dashboard/admin/continents"
              />
              <SidebarLink
                label="Countries"
                linkTo="/dashboard/admin/countries"
              />

              <SidebarLink label="Stats" linkTo="/dashboard/admin/user-stats" />

              <SidebarLink label="Setting" linkTo="/dashboard/admin/setting" />
            </ul>
          </div>
          <div className="clearfix" />
        </div>
        {/* end sidebarinner */}
      </div>
    );
  }
}

export default withRouter(AdminSidebar);
