import React from "react";
import MyStyles from "./Nav.css";

const nav = (props) => (
  <div className={MyStyles.Nav}>
    <i className={MyStyles.fa_heart} onClick={props.setLikesView}></i>
    <h2 className={MyStyles.header}>FoodiLo</h2>
    <i className={MyStyles.fa_paper_plane}></i>
  </div>
);

export default nav;
