// BASE MODULES

// CUSTOM MODULES
import { SET_RECIPES, SET_SELECTED_RECIPE } from '../actions/actionTypes';

const initialState = {
  recipes: [],
  selected_recipe: {
    title: '',
    preparationMinutes: '',
    cookingMinutes: '',
    sourceUrl: '',
    instructions: '',
    image: '',
  },
};

const recipesReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case SET_SELECTED_RECIPE:
      return {
        ...state,
        selected_recipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
