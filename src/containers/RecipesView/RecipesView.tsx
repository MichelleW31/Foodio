// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import Recipe from '../../components/Recipe/Recipe';
import styles from './RecipesView.module.scss';

interface RecipesViewProps {
  recipes: IRecipe[];
  getRecipes: () => void;
}

const RecipesView = ({ recipes, getRecipes }: RecipesViewProps) => {
  const recipesScroll = recipes.map((recipe) => {
    return <Recipe recipe={recipe} key={recipe.title} />;
  });

  const loadNewRecipes = () => {
    getRecipes();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional for smooth scrolling
      });
    }, 1000);
  };

  return (
    <section className={styles.RecipesViewContainer}>
      {recipesScroll}
      <p onClick={() => loadNewRecipes()} className={styles.LoadingCopy}>
        Load Different Recipes
      </p>
    </section>
  );
};

export default RecipesView;
