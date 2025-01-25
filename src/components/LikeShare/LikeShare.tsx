// BASE MODULES
import { connect } from 'react-redux';
import { useState } from 'react';

// CUSTOM MODULES
import Heart from '../icons/Heart/Heart';
import HeartOutline from '../icons/HeartOutline/HeartOutline';
import Share from '../icons/Share/Share';
import { setLikes } from '../../store/actions/recipesActions';
import { IRecipe, IState } from '../../types';
import ShareModal from '../ShareModal/ShareModal';
import styles from './LikeShare.module.scss';

interface LikeShareProps {
  likes: IRecipe[];
  setLikesArray: (likes: IRecipe[]) => void;
  recipe: IRecipe;
}

const LikeShare = ({ likes, setLikesArray, recipe }: LikeShareProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe>(recipe);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  const setUpLikes = () => {
    if (!selectedRecipe.liked) {
      setSelectedRecipe({ ...selectedRecipe, liked: true });
      setLikesArray([...likes, { ...selectedRecipe, liked: true }]);
    } else {
      const newLikesArray = likes.filter(
        (like) => like.title !== selectedRecipe.title
      );

      setSelectedRecipe({ ...selectedRecipe, liked: false });
      setLikesArray(newLikesArray);
    }
  };

  const shareRecipe = () => {
    setIsShareModalOpen(true);
  };

  return (
    <section className={styles.LikeShareContainer}>
      <ShareModal
        modalOpen={isShareModalOpen}
        setModalOpen={setIsShareModalOpen}
      />
      {selectedRecipe.liked ? (
        <Heart color="#000" setUpLikes={setUpLikes} />
      ) : (
        <HeartOutline color="#000" setUpLikes={setUpLikes} />
      )}
      <Share color="#000" shareRecipe={shareRecipe} />
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
