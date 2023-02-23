import classNames from "classnames/bind";
import { Link, NavLink } from "react-router-dom";

import config from "../../../config";
import styles from "./Sidebar.module.scss";
import images from "../../../assets/img";
import MenuItem from "./MenuItem/MenuItem";
import {
  AccountIcon,
  ContactIcon,
  DashboardIcon,
  LogoutIcon,
  MyPortfolioIcon,
  NotificationsIcon,
  PendingPropertiesIcon,
  SearchIcon,
  WishlistIcon,
} from "../../../components/Icons";

const cx = classNames.bind(styles);

const menuItem = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
    to: config.routes.dashboard,
  },
  {
    icon: <MyPortfolioIcon />,
    label: "My portfolio",
    to: config.routes.portfolio,
  },
  {
    icon: <PendingPropertiesIcon />,
    label: "Pending properties",
    to: config.routes.pendingProperties,
  },
  {
    icon: <SearchIcon />,
    label: "Search",
    to: config.routes.search,
  },
  {
    icon: <NotificationsIcon />,
    label: "Notifications",
    to: config.routes.notifications,
  },
  {
    icon: <WishlistIcon />,
    label: "Wishlist",
    to: config.routes.wishlist,
  },
  {
    icon: <ContactIcon />,
    label: "Contact",
    to: config.routes.contact,
  },
  {
    icon: <AccountIcon />,
    label: "Account",
    to: config.routes.account,
  },
  {
    icon: <LogoutIcon />,
    label: "Logout",
    to: config.routes.logout,
    topDevider: true,
  },
];

export default function Sidebar() {
  return (
    <section className={cx("wrapper")}>
      <Link to="/">
        <img src={images.logo} alt="" className={cx("logo")} />
        <img src={images.logoSm} alt="" className={cx("logo-sm")} />
      </Link>
      <div className={cx("menu")}>
        {menuItem.map((item, index) => (
          <NavLink key={index} to={item.to}>
            {({ isActive }) => (
              <MenuItem
                icon={item.icon}
                label={item.label}
                isActive={isActive}
                topDevider={item.topDevider}
              />
            )}
          </NavLink>
        ))}
      </div>
    </section>
  );
}
