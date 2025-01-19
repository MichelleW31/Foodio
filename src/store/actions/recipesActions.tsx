// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import { SET_RECIPE } from './actionTypes';

export const setRecipe = (recipe: IRecipe) => {
  return {
    type: SET_RECIPE,
    payload: recipe,
  };
};
