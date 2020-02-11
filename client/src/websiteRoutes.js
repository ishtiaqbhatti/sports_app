import Home from "views/Home/Home.js";
import ManagerAuth from "views/auth/ManagerAuth";
import Journey from "views/auth/journey/Journey";

const websiteRoutes = [
  {
    exact: true,
    path: "/",
    name: "Home",
    component: Home,
    layout: "/"
  },
  {
    exact: true,
    path: "register",
    name: "ManagerAuth",
    component: ManagerAuth,
    layout: "/"
  },
  {
    path: "journey",
    name: "Journey",
    component: Journey,
    layout: "/"
  }
];

export default websiteRoutes;
