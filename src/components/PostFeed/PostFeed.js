import React from "react";
import { recipeList } from "../../helpers";
import Post from "./Post/Post";
import MyStyles from "./PostFeed.css";

const Postfeed = ({ toggleLikes, step }) => {
  let recArr = [...recipeList];

  //Maps through recipes and returns a post for each one.
  let inRecipes = recArr.map((recipe) => {
    return (
      <Post
        key={recipe.title}
        recipe={recipe}
        toggleLikes={toggleLikes}
        step={step}
      />
    );
  });

  return <div className={MyStyles.PostFeed}>{inRecipes}</div>;
};

export default Postfeed;
