import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { cn } from "../cn";

const defaultStyles = {
  fontSize: "text-[32px] sm:text-[68px]",
  fontWeight: "font-bold",
  lineHeight: "leading-[40px] sm:leading-[92px]",
};

function getStyles() {
  return _.values(defaultStyles);
}
const Display = ({ as: Tag, children, className }) => {
  return <Tag className={cn(getStyles(), className)}>{children}</Tag>;
};

Display.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3"]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display.defaultProps = {
  className: "",
};

export default Display;
