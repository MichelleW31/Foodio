// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import { SET_LIKES, SET_RECIPE } from './actionTypes';

export const setRecipe = (recipe: IRecipe) => {
  return {
    type: SET_RECIPE,
    payload: recipe,
  };
};

export const setLikes = (likes: IRecipe[]) => {
  return {
    type: SET_LIKES,
    payload: likes,
  };
};
