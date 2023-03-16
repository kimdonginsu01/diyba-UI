import classNames from "classnames/bind";
import styles from "./PropertyItem.module.scss";
import images from "../../../assets/img";
import {
  AreaIcon,
  ArrowRightIcon,
  BathroomIcon,
  BedroomIcon,
  CarParkIcon,
  EquityIcon,
  NetYieldIcon,
} from "../../../components/Icons";

const cx = classNames.bind(styles);

export default function PropertyItem({ tag }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-image")}>
        <img className={cx("image")} src={images.ownedProperty} alt="" />
        {tag && <span className={cx("tag")}>{tag}</span>}
      </div>
      <div className={cx("info")}>
        <div className={cx("info-header")}>
          <h4 className={cx("info-content")}>
            23 Elizabeth Street, Currumbin Waters, WA 6105
          </h4>
        </div>
        <ArrowRightIcon className={cx("info-icon")} />
        <span className={cx("offer")}>Offer from $ 389,000</span>
        <div className={cx("description")}>
          <div className={cx("item")}>
            {<BedroomIcon />}
            <span className={cx("item-content")}>4 beds</span>
          </div>
          <div className={cx("item")}>
            {<BathroomIcon />}
            <span className={cx("item-content")}>4 baths</span>
          </div>
          <div className={cx("item")}>
            {<CarParkIcon />}
            <span className={cx("item-content")}>4 parks</span>
          </div>
          <div className={cx("item")}>
            {<AreaIcon />}
            <span className={cx("item-content")}>579 m2</span>
          </div>
        </div>
        <p className={cx("owned-since")}>
          <strong>Owned since:</strong> 12 March, 2020 (3.5 years)
        </p>
      </div>
      <div className={cx("status")}>
        <div className={cx("status-item")}>
          <p className={cx("item-header")}>
            {<EquityIcon className={cx("status-icon")} />} Potential equity
          </p>
          <span className={cx("item-content")}>$3,220</span>
        </div>
        <div className={cx("status-item")}>
          <p className={cx("item-header")}>
            {<NetYieldIcon className={cx("status-icon")} />} Net yield
          </p>
          <span className={cx("item-content")}>5.2%</span>
        </div>
      </div>
    </div>
  );
}
