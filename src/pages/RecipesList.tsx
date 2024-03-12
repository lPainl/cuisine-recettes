import { useLoaderData, useNavigate } from 'react-router-dom';
import RecipeInfo from '../components/RecipeInfo';
import { IRecipe } from '../interfaces/IRecipe';

const RecipesList = () => {
    const recipes = useLoaderData() as IRecipe[];
    const navigate = useNavigate();

    const goToRecipeDetail = (recipeIndex: number) => {
        navigate(`${recipeIndex}`);
    };

    return (
        <section className="flex flex-col">
            <h2>Lista de recetas</h2>
            <div>
                {recipes.map((recipe, index) => (
                    <RecipeInfo
                        key={index}
                        recipe={recipe}
                        handleClick={() => goToRecipeDetail(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecipesList;
