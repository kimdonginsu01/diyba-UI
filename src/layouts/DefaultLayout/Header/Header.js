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
        <span>Hide menu</span>
      </div>
      <div className={cx("mobile-logo")}>
        <img src={images.logo} alt="" />
      </div>
      <div className={cx("user")}>
        <div className={cx("username")}>
          <p>Bill Smith</p>
          <span>Owner</span>
        </div>
        <UserIcon className={cx("user-ava")} />
      </div>
    </header>
  );
}
