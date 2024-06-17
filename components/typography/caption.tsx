import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { cn } from "../cn";
import { VariableIcon } from "@heroicons/react/24/outline";

const defaultStyles = {
  fontSize: "text-xs",
  fontWeight: "font-normal",
  lineHeight: "leading-[18px]",
};

function getStyles(variant) {
  let styles = _.cloneDeep(defaultStyles);
  switch (variant) {
    case "strong":
      styles.fontWeight = "font-bold";
      break;
    case "stronger":
      styles.fontWeight = "font-black";
      break;
    case "small":
      styles.fontSize = "text-[10px]";
      styles.lineHeight = "leading-[15px]";
      break;
    default:
      break;
  }

  return _.values(styles);
}

const Caption = ({ children, variant, className }) => {
  return (
    <caption className={cn(getStyles(variant), className)}>{children}</caption>
  );
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "strong", "stronger", "small"]),
  className: PropTypes.string,
};

Caption.defaultProps = {
  variant: "default",
  className: "",
};

export default Caption;
