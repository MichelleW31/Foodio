import React from "react";
import MyStyles from "./Topic.css";

const Topic = (props) => {
  const imgUrl = require(`../../../images/${props.recipe.imgPath}`);

  const selectPost = () => {
    props.incrementStep();
    props.setPost(props.recipe);
  };

  return (
    <div className={MyStyles.Topic} onClick={selectPost}>
      <div
        className={MyStyles.TopicImage}
        style={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <h2 className={MyStyles.TopicTitle}>{props.recipe.title}</h2>
    </div>
  );
};

export default Topic;
