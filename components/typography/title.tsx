import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { cn } from "../cn";

const defaultStyles = {
  fontSize: "text-[28px]",
  fontWeight: "font-bold",
  lineHeight: "leading-9",
};

function getStyles(variant) {
  let styles = _.cloneDeep(defaultStyles);
  switch (variant) {
    case "extra-large":
      styles.fontSize = "text-[28px] sm:text-[40px]";
      styles.lineHeight = "leading-[36px] sm:leading-[52px]";
      break;
    case "large":
      styles.fontSize = cn(defaultStyles.fontSize, "sm:text-[32px]");
      styles.lineHeight = "leading-10";
      break;
    case "medium":
      styles.fontSize = "text-[28px]";
      break;
    case "small":
      styles.fontSize = "text-2xl";
      styles.fontWeight = "font-bold";
      styles.lineHeight = "leading-8";
      break;
    default:
      break;
  }

  return _.values(styles);
}
const Title = ({ as: Tag, children, variant, className, style }) => {
  return (
    <Tag className={cn(className, getStyles(variant))} style={style}>
      {children}
    </Tag>
  );
};

Title.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "p"]).isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["extra-large", "large", "medium", "small"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Title.defaultProps = {
  variant: "medium",
  className: "",
  style: null,
};

export default Title;
