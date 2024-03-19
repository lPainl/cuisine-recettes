export interface IRecipe {
    recipeId?: string;
    recipeImg: string;
    recipeName: string;
    ingredients: string[];
    steps: string[];
    recipeUrl?: string;
}
