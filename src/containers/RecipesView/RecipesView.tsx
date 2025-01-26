// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import Recipe from '../../components/Recipe/Recipe';
import styles from './RecipesView.module.scss';

interface RecipesViewProps {
  recipes: IRecipe[];
}

const RecipesView = ({ recipes }: RecipesViewProps) => {
  const recipesScroll = recipes.map((recipe) => {
    return <Recipe recipe={recipe} key={recipe.title} />;
  });

  return <div className={styles.RecipesViewContainer}>{recipesScroll}</div>;
};

export default RecipesView;
