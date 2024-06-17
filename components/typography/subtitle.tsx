import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { cn } from "../cn";

const defaultStyles = {
  fontSize: "text-base",
  fontWeight: "font-medium",
  lineHeight: "leading-normal",
};

function getStyles(variant) {
  let styles = _.cloneDeep(defaultStyles);
  switch (variant) {
    case "large":
      styles.fontSize = "text-xl";
      break;
    case "medium":
      styles.fontSize = "text-base";
      break;
    case "medium-strong":
      styles.fontSize = "text-base";
      styles.fontWeight = "font-bold";
      break;
    default:
      break;
  }

  return _.values(styles);
}

const Subtitle = ({ as: Tag, variant, children, className }) => {
  return <Tag className={cn(getStyles(variant), className)}>{children}</Tag>;
};

Subtitle.propTypes = {
  as: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6", "p"]).isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["large", "medium", "medium-strong"]),
  className: PropTypes.string,
};

Subtitle.defaultProps = {
  variant: "medium",
  className: "",
};

export default Subtitle;
