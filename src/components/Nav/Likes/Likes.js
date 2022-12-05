import React from "react";
import MyStyles from "./Likes.css";
import Post from "../../PostFeed/Post/Post";

const Likes = (props) => {
  let selectedLikesArray = props.likes;
  let classes = MyStyles.NoLikes;

  let layout = <p>You currently have no likes</p>;

  if (selectedLikesArray.length > 0) {
    classes = MyStyles.Likes;
    layout = selectedLikesArray.map((like) => {
      return (
        <Post key={like.title} recipe={like} toggleLikes={props.toggleLikes} />
      );
    });
  }

  return (
    <div>
      <div>
        <div className={MyStyles.Back}>
          <i className={MyStyles.fa_angle_left}></i>
          <p onClick={props.back}>Back to recipes</p>
        </div>
        <h3 className={MyStyles.Title}>Likes</h3>
        <div className={classes}>{layout}</div>
      </div>
    </div>
  );
};

export default Likes;
