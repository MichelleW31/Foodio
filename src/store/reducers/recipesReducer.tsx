// BASE MODULES

// CUSTOM MODULES
import { SET_RECIPE } from '../actions/actionTypes';

const initialState = {
  recipe: {
    title: '',
    preparationMinutes: '',
    cookingMinutes: '',
    sourceUrl: '',
    summary: '',
    image: '',
  },
};

const recipesReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
