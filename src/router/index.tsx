import { createBrowserRouter } from 'react-router-dom';
import NewRecipe from '../pages/NewRecipe';

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
            },
            {
                path: '/recipes/:recipeId',
                element: <RecipeReader />,
            },
            {
                path: '/management',
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
