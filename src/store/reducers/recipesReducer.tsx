// BASE MODULES

// CUSTOM MODULES
import { SET_LIKES, SET_RECIPE } from '../actions/actionTypes';

const initialState = {
  recipe: {
    title: '',
    readyInMinutes: '',
    sourceUrl: '',
    servings: '',
    image: '',
    // liked: false,
  },
  likes: [],
};

const recipesReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_RECIPE:
      console.log('state', state);
      return {
        ...state,
        recipe: action.payload,
      };
    case SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
