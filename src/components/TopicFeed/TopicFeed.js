import React from "react";
import { recipeList } from "../../helpers";
import Topic from "./Topic/Topic";
import MyStyles from "./TopicFeed.css";

const TopicFeed = ({ incrementStep, setPost }) => {
  let recArr = [...recipeList];

  //Slice array before mapping so that only 8 featured recipes show.
  let inRecipes = recArr.map((recipe) => {
    return (
      <Topic
        key={recipe.title}
        recipe={recipe}
        incrementStep={incrementStep}
        setPost={setPost}
      />
    );
  });

  return <div className={MyStyles.TopicFeed}>{inRecipes}</div>;
};

export default TopicFeed;
