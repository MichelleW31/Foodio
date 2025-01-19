// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';

interface RecipesViewProps {
  recipes: IRecipe[];
}

const RecipesView = ({ recipes }: RecipesViewProps) => {
  console.log('recipes', recipes);
  return <div>RecipesView</div>;
};

export default RecipesView;
