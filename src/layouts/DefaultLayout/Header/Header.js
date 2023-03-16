import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/img";

import {
  HideMenuIcon,
  ShowMenuIcon,
  UserIcon,
} from "../../../components/Icons";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("hide-menu")}>
        <HideMenuIcon className={cx("hide-menu-icon")} />
        <ShowMenuIcon className={cx("show-menu-icon")} />
        <span className={cx("hide-menu-text")}>Hide menu</span>
      </div>
      <div className={cx("mobile-logo")}>
        <img className={cx("logo")} src={images.logo} alt="" />
      </div>
      <div className={cx("user")}>
        <div className={cx("username")}>
          <p className={cx("name")}>Bill Smith</p>
          <span className={cx("role")}>Owner</span>
        </div>
        <UserIcon className={cx("user-ava")} />
      </div>
    </header>
  );
}
