import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";

const publicRoutes = [
  { path: "/", component: Dashboard },
  { path: "/portfolio", component: Portfolio },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
