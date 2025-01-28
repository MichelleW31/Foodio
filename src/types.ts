export enum Path {
  ROOT = '/',
  LIKES = '/likes',
  RECIPE = '/recipe',
}
export interface IRecipe {
  title: string;
  readyInMinutes: string;
  sourceUrl: string;
  servings: string;
  image: string;
  liked: boolean;
}

export interface IRecipes {
  recipes: IRecipe[];
}

export interface IState {
  recipes: {
    recipe: IRecipe;
    likes: IRecipe[];
  };
}

export interface IErrors {
  errorStatus: boolean;
  errorMessage: string;
}
