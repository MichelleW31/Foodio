import React from "react";
import MyStyles from "./PostView.css";
import Post from "../PostFeed/Post/Post";

const Postview = ({ back, post, toggleLikes }) => {
  return (
    <div className={MyStyles.Postview}>
      <div className={MyStyles.Back}>
        <i className={MyStyles.fa_angle_left}></i>
        <p onClick={back}>Back to recipes</p>
      </div>

      <Post key={post.title} recipe={post} toggleLikes={toggleLikes} />
    </div>
  );
};

export default Postview;
