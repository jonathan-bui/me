import React from "react";
import PropTypes from "prop-types";

const Card = ({
  children,
  fullScreen = false,
  padding = "p-4",
  rounded = "rounded-lg",
  elevation = "shadow",
  shadowSize = "shadow-md",
  className = "",
}) => {
  const baseStyles = `bg-white ${padding} ${rounded} ${elevation} ${shadowSize} ${className} rounded-t-md border-red-300`;
  const fullScreenStyles = fullScreen ? "w-screen h-screen" : "";

  return (
    <div
      className={`${baseStyles} ${fullScreenStyles} rounded-t-md border-red-300`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  fullScreen: PropTypes.bool,
  padding: PropTypes.string,
  rounded: PropTypes.string,
  elevation: PropTypes.string,
  shadowSize: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
