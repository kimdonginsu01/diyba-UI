import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DefaultLayout({ children }) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("app")}>
        <Header />
        <div className={cx("main")}>{children}</div>
      </div>
    </div>
  );
}
