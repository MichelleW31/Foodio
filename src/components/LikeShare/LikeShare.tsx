// BASE MODULES
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

// CUSTOM MODULES
import Heart from '../icons/Heart/Heart';
import HeartOutline from '../icons/HeartOutline/HeartOutline';
import { setLikes } from '../../store/actions/recipesActions';
import { IRecipe, IState } from '../../types';

interface LikeShareProps {
  likes: IRecipe[];
  setLikesArray: (likes: IRecipe[]) => void;
  recipe: IRecipe;
}

const LikeShare = ({ likes, setLikesArray, recipe }: LikeShareProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const setUpLikes = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikesArray([...likes, recipe]);
    } else {
      const newLikesArray = likes.filter((like) => like.title !== recipe.title);

      setIsLiked(false);
      setLikesArray(newLikesArray);
    }
  };

  useEffect(() => {
    likes.forEach((like) => {
      if (like.title === recipe.title) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    });
  });

  return (
    <section>
      {isLiked ? (
        <Heart color="#000" setUpLikes={setUpLikes} />
      ) : (
        <HeartOutline color="#000" setUpLikes={setUpLikes} />
      )}
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    likes: state.recipes.likes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLikesArray: (likes: IRecipe[]) => {
      dispatch(setLikes(likes));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeShare);
