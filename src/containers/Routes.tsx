// BASE MODULES
import { Routes, Route } from 'react-router-dom';

// CUSTOM MODULES
import RecipesView from './RecipesView/RecipesView';
import SelectedRecipe from './SelectedRecipe/SelectedRecipe';
import Likes from './Likes/Likes';
import { IRecipe, Path } from '../types';

interface AppRoutesProps {
  recipes: IRecipe[];
  getRecipes: () => void;
}

const AppRoutes = ({ recipes, getRecipes }: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        path={Path.ROOT}
        element={<RecipesView recipes={recipes} getRecipes={getRecipes} />}
      />
      <Route path={Path.RECIPE} element={<SelectedRecipe />} />
      <Route path={Path.LIKES} element={<Likes />} />
    </Routes>
  );
};

export default AppRoutes;
