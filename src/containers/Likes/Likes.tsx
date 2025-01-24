// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IRecipe, IState } from '../../types';
import Recipe from '../../components/Recipe/Recipe';

interface LikesProps {
  likes: IRecipe[];
}

const Likes = ({ likes }: LikesProps) => {
  console.log('likes', likes);

  const likesView = likes.map((like) => {
    return <Recipe recipe={like} key={like.title} />;
  });

  return <div>{likesView}</div>;
};

const mapStateToProps = (state: IState) => {
  return {
    likes: state.recipes.likes,
  };
};

export default connect(mapStateToProps)(Likes);
