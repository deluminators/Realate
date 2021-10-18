import React from "react";
import Styles from "./Spinner.module.css";

const spinner = props => {
  return (
    <div className={Styles.contain}>
      {/* <img
        src={require("./images/logo.PNG")}
        alt="justrelax"
        style={{ top: "50%", left: "50%" }}
      ></img> */}
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
