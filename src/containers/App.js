import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import TopicFeed from "../components/TopicFeed/TopicFeed";
import PostFeed from "../components/PostFeed/PostFeed";
import PostView from "../components/PostView/PostView";
import Likes from "../components/Nav/Likes/Likes";

const App = () => {
  const [selectedLikes, setLikes] = useState([]);
  const [step, setStep] = useState(0);
  const [post, setPost] = useState({});

  const toggleLikes = (like) => {
    const selectedLikesArray = [...selectedLikes];

    if (!like.liked) {
      selectedLikesArray.push(like);
      setLikes(selectedLikesArray);
    } else {
      let index = selectedLikesArray.indexOf(
        selectedLikesArray.find((recipe) => recipe.title === like.title)
      );
      selectedLikesArray.splice(index, 1);
      setLikes(selectedLikesArray);
    }
  };

  const stateManager = () => {
    switch (step) {
      case 0:
        return <PostFeed toggleLikes={toggleLikes} step={step} />;
      case 1:
        return (
          <PostView
            post={post}
            back={() => setStep(0)}
            toggleLikes={toggleLikes}
          />
        );
      case 2:
        return (
          <Likes
            back={() => setStep(0)}
            likes={selectedLikes}
            toggleLikes={toggleLikes}
          />
        );
      default:
        return <PostFeed toggleLikes={toggleLikes} step={step} />;
    }
  };

  return (
    <>
      <Nav
        setLikesView={() => {
          setStep(2);
        }}
      />
      <TopicFeed incrementStep={() => setStep(1)} setPost={setPost} />
      {stateManager()}
    </>
  );
};

export default App;
