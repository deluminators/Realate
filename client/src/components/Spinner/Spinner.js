import React from "react";
import Styles from "./Spinner.module.css";

const spinner = props => {
  return (
    <div className={Styles.contain}>
      <div className={Styles.ldsellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default spinner;
