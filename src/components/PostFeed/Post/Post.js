import React from "react";
import LikeSend from "../../LikeSend/LikeSend";
import MyStyles from "./Post.css";

const Post = ({ toggleLikes, recipe }) => {
  const imgUrl = require(`../../../images/${recipe.imgPath}`);

  const { title, level, cooktime } = recipe;

  const likePost = () => {
    toggleLikes(recipe);
    recipe.liked = !recipe.liked;
  };

  return (
    <div className={MyStyles.Post}>
      <div className={MyStyles.Copy}>
        <h3 className={MyStyles.Title}>{title}</h3>
        <h4 className={MyStyles.Level}>Level: {level}</h4>
        <h5 className={MyStyles.Time}>Cook time: {cooktime}</h5>
      </div>

      <div className={MyStyles.ImageDiv}>
        <img className={MyStyles.Image} src={imgUrl} alt="" />
      </div>

      <div className={MyStyles.Sendoff}>
        <LikeSend recipe={recipe} likePost={likePost} />
      </div>

      <hr />
    </div>
  );
};

export default Post;
