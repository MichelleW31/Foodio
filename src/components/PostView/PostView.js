import React from "react";
import MyStyles from "./PostView.css";
import Post from "../PostFeed/Post/Post";

const Postview = (props) => {
  return (
    <div className={MyStyles.Postview}>
      <div className={MyStyles.Back}>
        <i className={MyStyles.fa_angle_left}></i>
        <p onClick={props.back}>Back to recipes</p>
      </div>

      <Post
        key={props.post.title}
        recipe={props.post}
        toggleLikes={props.toggleLikes}
      />
    </div>
  );
};

export default Postview;
