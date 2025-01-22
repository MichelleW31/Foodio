// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import Recipe from '../../components/Recipe/Recipe';

interface RecipesViewProps {
  recipes: IRecipe[];
}

const RecipesView = ({ recipes }: RecipesViewProps) => {
  const recipesScroll = recipes.map((recipe) => {
    return <Recipe recipe={recipe} />;
  });

  return <div>{recipesScroll}</div>;
};

export default RecipesView;
