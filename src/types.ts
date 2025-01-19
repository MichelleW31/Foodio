export interface IRecipe {
  title: string;
  preparationMinutes: string;
  cookingMinutes: string;
  sourceUrl: string;
  instructions: string;
  image: string;
}

export interface IRecipes {
  recipes: IRecipe[];
}
