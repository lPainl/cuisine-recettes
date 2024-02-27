import { ChangeEvent, useState } from "react";
import { IRecipe } from "../interfaces/IRecipe";

const NewRecipe = () => {
    const [recipe, setRecipe] = useState<IRecipe>({
        recipeName: "",
        recipeUrl: "",
        ingredients: [],
    });

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

    const handleSubmit = () => {
        console.log(recipe);
    };

    return (
        <>
            <h2 className="text-center md:text-right">Agregar nueva receta</h2>
            <section className="flex flex-col">
                <input
                    type="text"
                    name="recipeName"
                    value={recipe.recipeName}
                    placeholder="Ingrese el nombre de la receta"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="recipeUrl"
                    value={recipe.recipeUrl}
                    placeholder="Ingrese el link de la receta"
                    onChange={handleChange}
                />
                <div>
                    <header>Ingredientes</header>
                    <section style={{ display: "flex" }}>
                        <ul
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    <input
                                        type="text"
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
                                        type="submit"
                                        onClick={() =>
                                            handleIngredients(undefined, index)
                                        }
                                    >
                                        Retirar ingrediente
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <aside>
                            <button
                                type="button"
                                onClick={() =>
                                    handleIngredients(
                                        "",
                                        recipe.ingredients.length++
                                    )
                                }
                            >
                                Agregar nuevo ingrediente
                            </button>
                        </aside>
                    </section>
                </div>

                <button type="submit" onClick={handleSubmit}>
                    Guardar
                </button>
            </section>
        </>
    );
};

export default NewRecipe;
