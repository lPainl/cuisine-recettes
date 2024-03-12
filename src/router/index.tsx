import { createBrowserRouter } from 'react-router-dom';
import NewRecipe from '../components/NewRecipe';

import loaderRecipeReader from '../hooks/loaderRecipeReader';
import { useRecipes } from '../hooks/useRecipes';
import Layout from '../layout/Layout';
import LayoutPrivate from '../layout/LayoutPrivate';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecipeReader from '../pages/RecipeReader';
import RecipesList from '../pages/RecipesList';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/recipes',
                element: <RecipesList />,
                loader: useRecipes,
            },
            {
                path: '/recipes/:recipeId',
                element: <RecipeReader />,
                loader: loaderRecipeReader,
            },
            {
                path: '/private',
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <NewRecipe />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);
