import React from "react";
import "./modal.styles.scss";

import Backdrop from "../backdrop/backdrop.component";

const modal = props => (
  <React.Fragment>
    <Backdrop clicked={props.show} />
    <div className="modal"> {props.children} </div>
  </React.Fragment>
);

export default modal;
