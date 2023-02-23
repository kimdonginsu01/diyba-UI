import classNames from "classnames/bind";

import styles from "../Sidebar.module.scss";

const cx = classNames.bind(styles);

export default function MenuItem({
  icon,
  label,
  isActive,
  topDevider = false,
}) {
  return (
    <div
      className={cx("icon-container", {
        active: isActive,
        "top-devider": topDevider,
      })}
    >
      <div className={cx("icon")}>{icon}</div>
      <div className={cx("label")}>{label}</div>
    </div>
  );
}
