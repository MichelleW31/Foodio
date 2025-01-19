// BASE MODULES

// CUSTOM MODULES
import { IRecipe, IRecipes } from '../../types';
import { SET_RECIPES, SET_SELECTED_RECIPE } from './actionTypes';

export const setRecipes = (recipes: IRecipes) => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

export const setRecipe = (recipe: IRecipe) => {
  return {
    type: SET_SELECTED_RECIPE,
    payload: recipe,
  };
};
