import React from "react";
import { recipeList } from "../../helpers";
import Topic from "./Topic/Topic";
import MyStyles from "./TopicFeed.css";

const TopicFeed = (props) => {
  //Shuffles array so that the featured recipes are different after every reload.
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let recArr = [...recipeList];
  // shuffle(recArr);

  //Slice array before mapping so that only 8 featured recipes show.
  let inRecipes = recArr.slice(0, 8).map((recipe) => {
    return (
      <Topic
        key={recipe.title}
        recipe={recipe}
        incrementStep={props.incrementStep}
        setPost={props.setPost}
      />
    );
  });

  return <div className={MyStyles.TopicFeed}>{inRecipes}</div>;
};

export default TopicFeed;
