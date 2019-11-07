import React from "react";

import "./page-dropdown.styles.scss";

const PageDropdown = ({ className, ...otherProps }) => (
  <div className={`page-dropdown-container ${className ? className : ""}`}>
    <a href="/room">
      <div className="text gap">About</div>
    </a>

    <div className="text gap">Contact</div>
    <div className="text">Code of Conduct</div>
  </div>
);

export default PageDropdown;
