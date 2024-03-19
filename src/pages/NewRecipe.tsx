import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import { ChangeEvent, useState } from 'react';
import CustomButton from '../components/customElements/CustomButton';
import CustomInput from '../components/customElements/CustomInput';
import { useRecipes } from '../hooks/useRecipes';
import { IRecipe } from '../interfaces/IRecipe';

const NewRecipe = () => {
    const [recipe, setRecipe] = useState<IRecipe>({
        recipeImg: '',
        recipeName: '',
        ingredients: [],
        steps: [],
        recipeUrl: '',
    });

    const { loading, createRecipe } = useRecipes() as {
        loading: boolean;
        createRecipe: (recipe: IRecipe) => Promise<boolean>;
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nameEvent = event.target.name;
        const valueEvent = event.target.value;

        const newRecipe = {
            ...recipe,
            [nameEvent]: valueEvent,
        };

        setRecipe(newRecipe);
    };

    const handleIngredients = (
        newIngredient: string | undefined,
        ingredientIndex: number
    ) => {
        if (newIngredient === undefined) {
            recipe.ingredients.splice(ingredientIndex, 1);
            setRecipe({ ...recipe });
            return;
        }
        const newIngredients = [...recipe.ingredients];
        newIngredients[ingredientIndex] = newIngredient;

        const newRecipe = {
            ...recipe,
            ingredients: newIngredients,
        };

        setRecipe(newRecipe);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const recipeSaved = await createRecipe(recipe);
        if (recipeSaved) {
            console.log('Exito');
        } else {
            console.error('Fallo');
        }
    };

    if (loading) return <h2>Creando receta...</h2>;

    return (
        <>
            <form
                className="flex flex-col gap-7 rounded-lg bg-gray-200 p-4 lg:m-auto lg:max-w-5xl"
                onSubmit={handleSubmit}
            >
                <header>
                    <h2 className="text-right">Agregar nueva receta</h2>
                </header>
                <div className="flex items-center gap-2">
                    <label className="" htmlFor="recipeName">
                        Nombre receta:
                    </label>
                    <CustomInput
                        className="ml-auto"
                        type="text"
                        id="recipeName"
                        name="recipeName"
                        value={recipe.recipeName}
                        placeholder="Ingrese el nombre de la receta"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <header className="flex justify-between">
                        <h3>Ingredientes</h3>
                        <aside className="flex text-green-600">
                            <button
                                type="button"
                                className="flex items-center gap-1"
                                onClick={() =>
                                    handleIngredients(
                                        '',
                                        recipe.ingredients.length++
                                    )
                                }
                            >
                                <PlusCircleIcon className=" inline size-6" />
                                <h5 className="italic">Ingrediente</h5>
                            </button>
                        </aside>
                    </header>
                    <section className="mt-3 flex justify-between">
                        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-x-9">
                            {recipe.ingredients.map((ingredient, index) => (
                                <div key={index} className="flex gap-3">
                                    <CustomInput
                                        className="max-w-60"
                                        name="ingredients"
                                        value={ingredient}
                                        placeholder="Ingrese el nuevo ingrediente"
                                        onChange={(event) =>
                                            handleIngredients(
                                                event.target.value,
                                                index
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleIngredients(undefined, index)
                                        }
                                    >
                                        <TrashIcon className="size-6 text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="flex items-center gap-2">
                    <label htmlFor="recipeUrl">Link receta:</label>
                    <CustomInput
                        className="ml-auto"
                        type="text"
                        id="recipeUrl"
                        name="recipeUrl"
                        value={recipe.recipeUrl}
                        placeholder="Ingrese el link de la receta"
                        onChange={handleChange}
                    />
                </div>

                <CustomButton type="submit" className="ml-auto">
                    Guardar
                </CustomButton>
            </form>
        </>
    );
};

export default NewRecipe;
