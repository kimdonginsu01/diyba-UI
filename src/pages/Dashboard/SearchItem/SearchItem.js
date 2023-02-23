import classNames from "classnames/bind";
import {
  BathroomIcon,
  BedroomIcon,
  BudgetIcon,
  CarParkIcon,
  ChevronRightIcon,
  MapIcon,
  ObjectiveIcon,
} from "../../../components/Icons";
import styles from "./SearchItem.module.scss";

const cx = classNames.bind(styles);

const searchItem = [
  {
    icon: <BudgetIcon />,
    label: "Budgets",
    value: "$450k-$550k",
  },
  {
    icon: <ObjectiveIcon />,
    label: "Objective",
    value: "Cash flow",
  },
  {
    icon: <BedroomIcon width="20" height="20" />,
    label: "Bedrooms",
    value: "4+",
  },
  {
    icon: <BathroomIcon width="20" height="20" />,
    label: "Bathrooms",
    value: "2+",
  },
  {
    icon: <CarParkIcon width="20" height="20" />,
    label: "Parking",
    value: "3+",
  },
  {
    icon: <MapIcon />,
    label: "States",
    value: "VIC, NSW, TAS, QLD",
  },
];

export default function SearchItem() {
  return (
    <div className={cx("wrapper")}>
      {searchItem.map((item, index) => (
        <p key={index} className={cx("item")}>
          <span className={cx("icon")}>{item.icon}</span>
          <strong className={cx("label")}>{item.label}:</strong>
          <span className={cx("value")}>{item.value}</span>
        </p>
      ))}
      <ChevronRightIcon className={cx("next-btn")} />
    </div>
  );
}
