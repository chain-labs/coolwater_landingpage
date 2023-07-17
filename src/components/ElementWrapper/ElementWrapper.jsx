/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementWrapper = ({ className, element = "/img/037.svg" }) => {
  return <img className={`element-wrapper ${className}`} alt="Element" src={element} />;
};

ElementWrapper.propTypes = {
  element: PropTypes.string,
};
