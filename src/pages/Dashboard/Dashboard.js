import classNames from "classnames/bind";
import Button from "../../components/Button";
import {
  ArrowRightIcon,
  CashflowIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EquityIcon,
  GrossYieldIcon,
  ImportPropertiesIcon,
  LocationIcon,
  NetYieldIcon,
  PropertiesIcon,
  SearchIcon,
} from "../../components/Icons";
import LayoutItem from "../../components/LayoutItem";
import PropertyItem from "./PropertyItem";
import styles from "./Dashboard.module.scss";
import WishlistItem from "./WishlistItem";
import images from "../../assets/img";
import SearchItem from "./SearchItem/SearchItem";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const propertiesStatus = [
  {
    icon: <EquityIcon />,
    label: "Potential equity",
    value: "$84,220",
  },
  {
    icon: <CashflowIcon />,
    label: "Projected Cashflow",
    value: "$32,000",
  },
  {
    icon: <GrossYieldIcon />,
    label: "Gross Yield",
    value: "5.4%",
  },
  {
    icon: <NetYieldIcon />,
    label: "Net Yield",
    value: "1.2%",
  },
];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function Dashboard() {
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

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Dashboard</h2>
      <div className={cx("container")}>
        <div className={cx("left-content")}>
          {/* Mobile notifications */}
          {windowSize.innerWidth <= 992 && (
            <LayoutItem label="Notification" badge={2} small>
              <div className={cx("noti-list")}>
                <div className={cx("noti-item")}>
                  <p className={cx("date")}>9 Sep 2022</p>
                  <p className={cx("description")}>
                    Photos and videos have been added the property walkthrough
                    for 17 Currong Street Minyama...
                  </p>
                </div>
                <div className={cx("next-btn")}>
                  <ChevronRightIcon />
                </div>
              </div>
            </LayoutItem>
          )}
          {/* My portfolio */}
          <LayoutItem label="My portfolio (3 properties)">
            <div className={cx("properties")}>
              {propertiesStatus.map((item, index) => (
                <div key={index} className={cx("properties-status")}>
                  <div className={cx("status-header")}>
                    {item.icon}
                    <p className={cx("header-label")}>{item.label}</p>
                  </div>
                  <p className={cx("value")}>{item.value}</p>
                </div>
              ))}
            </div>
            <PropertyItem tag="Top performer" />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <div className={cx("action-btn")}>
              <Button small outline rightIcon={<ArrowRightIcon />}>
                View all
              </Button>
              <Button outline leftIcon={<ImportPropertiesIcon />}>
                Import properties
              </Button>
            </div>
          </LayoutItem>

          {/* Wishlist */}
          <LayoutItem label="Wishlist(32)">
            <div className={cx("action-btn")}>
              <Button primary leftIcon={<PropertiesIcon />}>
                Properties
              </Button>
              <Button leftIcon={<LocationIcon />}>Markets</Button>
            </div>
            <WishlistItem tag="medium" />
            <WishlistItem />
            <WishlistItem tag="high" />
            <WishlistItem tag="low" />
            <div className={cx("action-btn")}>
              <Button small outline rightIcon={<ArrowRightIcon />}>
                View all
              </Button>
            </div>
          </LayoutItem>
        </div>

        <div className={cx("right-content")}>
          {/* Notifications */}
          {windowSize.innerWidth > 992 && (
            <LayoutItem label="Notification" badge={2} small>
              <div className={cx("noti-list")}>
                <div className={cx("noti-item")}>
                  <p className={cx("date")}>9 Sep 2022</p>
                  <p className={cx("description")}>
                    Photos and videos have been added the property walkthrough
                    for 17 Currong Street Minyama...
                  </p>
                </div>
                <div className={cx("next-btn")}>
                  <ChevronRightIcon />
                </div>
              </div>
            </LayoutItem>
          )}
          {/* Pending properties */}
          <LayoutItem label="Pending properties" small>
            <div className={cx("message")}>
              <p className={cx("message-content")}>
                You have no pending properties
              </p>
            </div>
            <Button
              className={cx("properties-button")}
              outline
              leftIcon={<SearchIcon />}
            >
              Search properties
            </Button>
          </LayoutItem>
          {/* Saved searches */}
          <LayoutItem label="Saved searches" medium>
            <Button
              className={cx("searches-dropdown")}
              primary
              large
              leftIcon={<PropertiesIcon />}
            >
              Properties
              <div className={cx("icon")}>
                <ChevronDownIcon />
              </div>
            </Button>
            <SearchItem />
            <SearchItem />
            <div className={cx("action-btn")}>
              <Button
                small
                outline
                rightIcon={<ArrowRightIcon />}
                className={cx("save-search-btn")}
              >
                View all
              </Button>
              <Button
                small
                outline
                leftIcon={<SearchIcon />}
                className={cx("save-search-btn")}
              >
                New search
              </Button>
            </div>
          </LayoutItem>
        </div>
      </div>
      {/* Footer */}
      <div className={cx("footer")}>
        <p className={cx("copyright")}>
          The market insights data is supplied by DIYBA Pty Ltd (ABN 35 641 308
          081) on behalf of PropTrack Pty Ltd (ABN 43 127 386 298).{" "}
          <a className="copyright-link" href="/">
            Copyright and legal disclaimers about property data
          </a>
        </p>
        <div className={cx("trademarks")}>
          <span className={cx("powered-by")}>Powered by: </span>
          <img src={images.domainLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
