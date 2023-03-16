import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./DefaultLayout.module.scss";

import Header from "./Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function DefaultLayout({ children }) {
  const [menuActive, setMenuActive] = useState(false);
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

  const handleMenuClick = () => {
    windowSize.innerWidth < 576 && setMenuActive(!menuActive);
  };

  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("app")}>
        <Header onMenuClick={handleMenuClick} />
        <div className={cx("main")}>{children}</div>
        {menuActive && <MobileMenu onMenuClick={handleMenuClick} />}
      </div>
    </div>
  );
}
