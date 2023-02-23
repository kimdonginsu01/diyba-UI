import classNames from "classnames/bind";
import styles from "./WishlistItem.module.scss";

import { ArrowRightIcon, PotentialValueIcon } from "../../../components/Icons";

const cx = classNames.bind(styles);

export default function PotentialValueItem({ tag }) {
  return (
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
  );
}
