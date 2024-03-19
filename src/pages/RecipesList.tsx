import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import RecipeInfo from '../components/RecipeInfo';
import CustomModal from '../components/customElements/CustomModal';
import { useRecipes } from '../hooks/useRecipes';
import { IRecipe } from '../interfaces/IRecipe';

const RecipesList = () => {
    const navigate = useNavigate();
    const {
        loading,
        error,
        recipeData: recipes,
        getAllRecipes,
    } = useRecipes() as {
        loading: boolean;
        error: boolean;
        recipeData: IRecipe[];
        getAllRecipes: () => Promise<void>;
    };

    useEffect(() => {
        getAllRecipes();
    }, []);

    if (error)
        return (
            <CustomModal
                title={'Error!'}
                text={'Hubo un error, intente más tarde'}
                modalOpened={true}
                canClose={false}
            />
        );

    const goToRecipeDetail = (recipeIndex: string) => {
        navigate(`${recipeIndex}`);
    };

    return (
        <section className="flex flex-col">
            <h1>Lista de recetas</h1>
            {loading || !recipes ? (
                <Loading />
            ) : recipes.length === 0 ? (
                <h1>No hay recetas</h1>
            ) : (
                <div className="mx-auto max-w-[340px] gap-x-3 gap-y-3 sm:col-span-2 sm:row-span-2 sm:mx-0 sm:grid sm:max-w-none sm:grid-cols-[repeat(auto-fit,200px)] sm:justify-center md:grid-cols-[repeat(auto-fit,350px)]">
                    {recipes.map((recipe, index) => (
                        <RecipeInfo
                            key={index}
                            recipe={recipe}
                            handleClick={() =>
                                goToRecipeDetail(recipe.recipeId!)
                            }
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default RecipesList;
