import classNames from "classnames/bind";
import styles from "./WishlistItem.module.scss";
import images from "../../../assets/img";
import {
  AreaIcon,
  ArrowRightIcon,
  BathroomIcon,
  BedroomIcon,
  CarParkIcon,
  PotentialValueIcon,
  WishlistIcon,
} from "../../../components/Icons";

const cx = classNames.bind(styles);

export default function WishlistItem({ tag = "" }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <img src={images.wishlistProperty} alt="" />
      </div>

      <div className={cx("info")}>
        <div className={cx("info-header")}>
          <h4>31 Newry Street Mountain Creek QLD 4557</h4>
        </div>
        <div className={cx("action-btn")}>
          <ArrowRightIcon className={cx("info-icon")} />
          <WishlistIcon className={cx("info-icon", "fill")} />
        </div>
        <span>Offer from $ 389,000</span>
        <div className={cx("description")}>
          <div className={cx("item")}>
            {<BedroomIcon />}
            <span>
              <strong>4</strong> beds
            </span>
          </div>
          <div className={cx("item")}>
            {<BathroomIcon />}
            <span>
              <strong>4</strong> baths
            </span>
          </div>
          <div className={cx("item")}>
            {<CarParkIcon />}
            <span>
              <strong>4</strong> parks
            </span>
          </div>
          <div className={cx("item")}>
            {<AreaIcon />}
            <span>
              <strong>579</strong> m2
            </span>
          </div>
        </div>
        <div className={cx("potential-value")}>
          <div className={cx("header")}>
            <PotentialValueIcon />
            <p>Potential value:</p>
          </div>
          {tag ? (
            <div className={cx("content")}>
              <div className={cx("item")}>
                <p>Low range</p>
                <span>$340,000</span>
              </div>
              <div className={cx("item")}>
                <p>Mid range</p>
                <span>$365,000</span>
              </div>
              <div className={cx("item")}>
                <p>High range</p>
                <span>$395,000</span>
              </div>
              <p className={cx("tag", { [tag]: tag })}>{tag} Confidence</p>
            </div>
          ) : (
            <div className={cx("no-value")}>
              <p>View property for updated values</p>
              <ArrowRightIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
