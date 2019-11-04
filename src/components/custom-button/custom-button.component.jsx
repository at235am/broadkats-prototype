import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button
    {...otherProps}
    className={`custom-button ${
      otherProps.className ? otherProps.className : ""
    }`}
  >
    {children}
  </button>
);

export default CustomButton;
