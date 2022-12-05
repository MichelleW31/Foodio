import React from "react";
import LikeSend from "../../LikeSend/LikeSend";
import MyStyles from "./Post.css";

const Post = (props) => {
  const imgUrl = require(`../../../images/${props.recipe.imgPath}`);

  const likePost = () => {
    props.toggleLikes(props.recipe);
    props.recipe.liked = !props.recipe.liked;
  };

  return (
    <div className={MyStyles.Post}>
      <div className={MyStyles.Copy}>
        <h3 className={MyStyles.Title}>{props.recipe.title}</h3>
        <h4 className={MyStyles.Level}>Level: {props.recipe.level}</h4>
        <h5 className={MyStyles.Time}>Cook time: {props.recipe.cooktime}</h5>
      </div>

      <div className={MyStyles.ImageDiv}>
        <img className={MyStyles.Image} src={imgUrl} alt="" />
      </div>

      <div className={MyStyles.Sendoff}>
        <LikeSend recipe={props.recipe} likePost={likePost} />
      </div>

      <hr />
    </div>
  );
};

export default Post;
