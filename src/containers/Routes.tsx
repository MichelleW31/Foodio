// BASE MODULES
import { Routes, Route } from 'react-router-dom';

// CUSTOM MODULES
import SelectedRecipe from '../components/SelectedRecipe/SelectedRecipe';
import RecipesView from './RecipesView/RecipesView';
import { IRecipe, Path } from '../types';

interface AppRoutesProps {
  recipes: IRecipe[];
}

const AppRoutes = ({ recipes }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path={Path.ROOT} element={<RecipesView recipes={recipes} />} />
      <Route path={Path.RECIPE} element={<SelectedRecipe />} />
    </Routes>
  );
};

export default AppRoutes;
