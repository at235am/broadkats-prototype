import React from "react";

import "./circle-btn.styles.scss";

const CircleBtn = ({ icon, text }) => (
  <div className="circle-btn">
    {icon ? icon : <div className="text">{text}</div>}
  </div>
);

export default CircleBtn;
