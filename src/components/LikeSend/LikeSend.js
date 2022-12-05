import React from "react";
import MyStyles from "./LikeSend.css";

const likesend = (props) => {
  let heart_class = MyStyles.fa_heart_open;

  if (props.recipe.liked) {
    heart_class = MyStyles.fa_heart_solid;
  }

  return (
    <>
      <i className={heart_class} onClick={props.likePost}></i>
      <i className={MyStyles.fa_paper_plane}></i>
    </>
  );
};

export default likesend;
