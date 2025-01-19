export interface IRecipe {
  title: string;
  preparationMinutes: string;
  cookingMinutes: string;
  sourceUrl: string;
  summary: string;
  image: string;
}

export interface IRecipes {
  recipes: IRecipe[];
}
