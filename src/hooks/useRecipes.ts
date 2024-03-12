export const useRecipes = async () => {
    //const { data } = useFetch('url');
    //return { recipes: data };

    return Promise.resolve([
        {
            recipeImg: 'src/assets/omelette.jpeg',
            recipeName: 'Simple Omelette Recipe',
            ingredients: ['huevo', 'crema'],
            steps: [],
            recipeUrl: 'asdfasd',
        },
        {
            recipeImg: 'src/assets/omelette.jpeg',
            recipeName: 'Simple Omelette Recipe',
            ingredients: ['huevo', 'crema'],
            steps: [],
            recipeUrl: 'asdfasd',
        },
        {
            recipeImg: 'src/assets/omelette.jpeg',
            recipeName: 'Simple Omelette Recipe',
            ingredients: ['huevo', 'crema'],
            steps: [],
            recipeUrl: 'asdfasd',
        },
    ]);
};
