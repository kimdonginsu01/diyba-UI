import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./DefaultLayout.module.scss";

import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function DefaultLayout({ children }) {
  const [menuActive, setMenuActive] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    windowSize.innerWidth < 1400 && setMenuActive(() => false);
  }, [windowSize]);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={cx("wrapper")}>
      <Sidebar menuActive={menuActive} onMenuClick={handleMenuClick} />
      <div className={cx("app", menuActive || "sm-margin")}>
        <Header onMenuClick={handleMenuClick} menuActive={menuActive} />
        <div className={cx("main")}>{children}</div>
      </div>
    </div>
  );
}
