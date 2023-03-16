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
      <div className={cx("wrapper-image")}>
        <img className={cx("image")} src={images.wishlistProperty} alt="" />
      </div>

      <div className={cx("info")}>
        <div className={cx("info-header")}>
          <h4 className={cx("info-content")}>
            31 Newry Street Mountain Creek QLD 4557
          </h4>
        </div>
        <div className={cx("action-btn")}>
          <ArrowRightIcon className={cx("info-icon")} />
          <WishlistIcon className={cx("info-icon", "fill")} />
        </div>
        <span className={cx("offer-from")}>Offer from $ 389,000</span>
        <div className={cx("description")}>
          <div className={cx("item")}>
            {<BedroomIcon />}
            <span className={cx("item-content")}>
              <strong>4</strong> beds
            </span>
          </div>
          <div className={cx("item")}>
            {<BathroomIcon />}
            <span className={cx("item-content")}>
              <strong>4</strong> baths
            </span>
          </div>
          <div className={cx("item")}>
            {<CarParkIcon />}
            <span className={cx("item-content")}>
              <strong>4</strong> parks
            </span>
          </div>
          <div className={cx("item")}>
            {<AreaIcon />}
            <span className={cx("item-content")}>
              <strong>579</strong> m2
            </span>
          </div>
        </div>
        <div className={cx("potential-value")}>
          <div className={cx("header")}>
            <PotentialValueIcon />
            <p className={cx("header-content")}>Potential value:</p>
          </div>
          {tag ? (
            <div className={cx("content")}>
              <div className={cx("item")}>
                <p className={cx("range")}>Low range</p>
                <span className={cx("price")}>$340,000</span>
              </div>
              <div className={cx("item")}>
                <p className={cx("range")}>Mid range</p>
                <span className={cx("price")}>$365,000</span>
              </div>
              <div className={cx("item")}>
                <p className={cx("range")}>High range</p>
                <span className={cx("price")}>$395,000</span>
              </div>
              <p className={cx("tag", { [tag]: tag })}>{tag} Confidence</p>
            </div>
          ) : (
            <div className={cx("no-value")}>
              <p className={cx("no-value-text")}>
                View property for updated values
              </p>
              <ArrowRightIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
