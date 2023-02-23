import config from "../config";
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";

const publicRoutes = [
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.portfolio, component: Portfolio },
  { path: config.routes.pendingProperties, component: Dashboard },
  { path: config.routes.search, component: Portfolio },
  { path: config.routes.notifications, component: Dashboard },
  { path: config.routes.wishlist, component: Portfolio },
  { path: config.routes.contact, component: Dashboard },
  { path: config.routes.account, component: Portfolio },
  { path: config.routes.logout, component: Portfolio },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
