import classNames from "classnames/bind";
import { MinimizeIcon } from "../Icons";
import styles from "./LayoutItem.module.scss";

const cx = classNames.bind(styles);

export default function LayoutItem({
  small = false,
  badge = null,
  className,
  label = "",
  children,
}) {
  const classes = cx("wrapper", {
    [className]: className,
    small,
  });
  return (
    <div className={classes}>
      <div className={cx("header")}>
        <p className={cx("label")}>
          {label} {badge && <span className={cx("badge")}>{badge}</span>}
        </p>
        <MinimizeIcon className={cx("minimize-btn")} />
      </div>
      {children}
    </div>
  );
}
