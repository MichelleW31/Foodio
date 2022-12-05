import React from "react";
import MyStyles from "./Nav.css";

const Nav = ({ setLikesView }) => (
  <div className={MyStyles.Nav}>
    <i className={MyStyles.fa_heart} onClick={setLikesView}></i>
    <h2 className={MyStyles.header}>Foodio</h2>
    <i className={MyStyles.fa_paper_plane}></i>
  </div>
);

export default Nav;
