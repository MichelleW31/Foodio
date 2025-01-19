// BASE MODULES
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import { setRecipe } from '../../store/actions/recipesActions';
import styles from './Story.module.scss';
import { IRecipe, Path } from '../../types';

interface StoryProps {
  recipe: IRecipe;
  setRecipe: (recipe: IRecipe) => void;
}

const Story = ({ recipe, setRecipe }: StoryProps) => {
  const navigate = useNavigate();

  const goToPost = () => {
    setRecipe(recipe);
    navigate(Path.RECIPE);
  };

  return (
    <section
      className={styles.StoryContainer}
      onClick={() => {
        goToPost();
      }}
    >
      <section
        className={styles.StoryImage}
        style={{
          backgroundImage: 'url(' + recipe.image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>
      <p className={styles.StoryTitle}>{recipe.title}</p>
    </section>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setRecipe: (recipe: IRecipe) => {
      dispatch(setRecipe(recipe));
    },
  };
};

export default connect(null, mapDispatchToProps)(Story);
