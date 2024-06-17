import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { cn } from "../cn";

const defaultStyles = {
  fontSize: "text-sm",
  fontWeight: "font-normal",
  lineHeight: "leading-normal",
};

function getStyles(variant) {
  let styles = _.cloneDeep(defaultStyles);
  switch (variant) {
    case "large":
      styles.fontSize = "text-base";
      break;
    case "large-strong":
      styles.fontSize = "text-base";
      styles.fontWeight = "font-medium";
      break;
    case "large-stronger":
      styles.fontSize = "text-base";
      styles.fontWeight = "font-bold";
      break;
    case "medium":
      break;
    case "small":
      styles.fontSize = "text-xs";
      break;
    case "small-strong":
      styles.fontSize = "text-xs";
      styles.fontWeight = "font-bold";
      break;
    case "small-stronger":
      styles.fontSize = "text-xs";
      styles.fontWeight = "font-black";
      break;
    case "extra-small":
      styles.fontSize = "text-[10px]";
      break;
    case "extra-small-stronger":
      styles.fontSize = "text-[10px]";
      styles.fontWeight = "font-medium";
      break;
    default:
      break;
  }

  return _.values(styles);
}

const Body = ({ as: Tag, children, variant, className }) => {
  return <Tag className={cn(getStyles(variant), className)}>{children}</Tag>;
};

Body.propTypes = {
  as: PropTypes.oneOf(["h2", "p", "span", "div"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "large",
    "large-strong",
    "large-stronger",
    "medium",
    "small",
    "small-strong",
    "small-stronger",
    "extra-small",
    "extra-small-stronger",
  ]),
  className: PropTypes.string,
};

Body.defaultProps = {
  as: "p",
  variant: "medium",
  className: "",
};

export default Body;
