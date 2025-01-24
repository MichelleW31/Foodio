// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IRecipe, IState } from '../../types';
import Recipe from '../../components/Recipe/Recipe';
import BackButton from '../../components/BackButton/BackButton';
import styles from './Likes.module.scss';

interface LikesProps {
  likes: IRecipe[];
}

const Likes = ({ likes }: LikesProps) => {
  const likesView = likes.map((like) => {
    return <Recipe recipe={like} key={like.title} />;
  });

  return (
    <section className={styles.LikesContainer}>
      <BackButton copy="Back To Recipes" />
      <p className={styles.Title}>Likes</p>
      {likesView}
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    likes: state.recipes.likes,
  };
};

export default connect(mapStateToProps)(Likes);
