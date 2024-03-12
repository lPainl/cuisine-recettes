const loaderRecipeReader = async ({ params }) => {
    return Promise.resolve({
        recipeImg: '/src/assets/omelette.jpeg',
        recipeName: 'Simple Omelette Recipe',
        ingredients: ['huevo', 'crema'],
        steps: [],
        recipeUrl: 'asdfasd',
    });
};

export default loaderRecipeReader;
