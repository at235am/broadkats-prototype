import React from "react";
import "./modal.styles.scss";

import Backdrop from "../backdrop/backdrop.component";

const modal = props => (
  <React.Fragment>
    <Backdrop backdropClass={props.backdropClass} clicked={props.show} />
    <div className={`modal ${props.modalClass ? props.modalClass : null}`}>
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
