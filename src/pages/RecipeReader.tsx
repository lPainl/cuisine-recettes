import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CustomButton from '../components/customElements/CustomButton';
import { IRecipe } from '../interfaces/IRecipe';

const RecipeReader = () => {
    const recipe = useLoaderData() as IRecipe;
    const navigate = useNavigate();

    const returnToRecipesList = () => {
        navigate('/recipes');
    };

    return (
        <section className="m-auto flex max-w-2xl flex-col overflow-hidden rounded-lg bg-gray-200 lg:p-8">
            <header>
                <img src={recipe.recipeImg}></img>
            </header>
            <div className="flex flex-col gap-6 p-4 lg:mt-4 lg:p-0">
                <h1>{recipe.recipeName}</h1>

                <article className="rounded-md bg-sky-200 p-4">
                    <h3 className="font-bold text-sky-700">Ingredientes</h3>
                    <ul className="list-disc p-4">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </article>

                <article className="rounded-md bg-red-200 p-4">
                    <h3 className="font-bold text-red-700">Pasos</h3>
                    <ol className="list-decimal p-4">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ol>
                </article>

                <article className="rounded-md bg-green-200 p-4">
                    {recipe.recipeUrl && (
                        <span className="text-green-700">
                            {recipe.recipeUrl}
                        </span>
                    )}
                </article>
            </div>
            <CustomButton
                className="fixed bottom-8 right-8"
                onClick={returnToRecipesList}
            >
                <ArrowUturnLeftIcon className="size-4" />
            </CustomButton>
        </section>
    );
};

export default RecipeReader;
