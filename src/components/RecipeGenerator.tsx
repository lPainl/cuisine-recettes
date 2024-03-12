import { useState } from 'react';
import CustomButton from './customElements/CustomButton';
import CustomInput from './customElements/CustomInput';

const RecipeGenerator = () => {
    const [recipeNumber, setRecipeNumber] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className="rounded-md bg-purple-200 p-4">
            <h1>Generar recetas</h1>
            <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="recipeNumber">
                    Cantidad de recetas deseadas
                </label>
                <CustomInput
                    type="number"
                    id="recipeNumber"
                    min={1}
                    name="recipeNumber"
                    value={recipeNumber}
                    placeholder="Ingrese la cantidad de recetas deseadas"
                    onChange={(event) => setRecipeNumber(+event.target.value)}
                ></CustomInput>
                <CustomButton type="submit">Generar</CustomButton>
            </form>
        </section>
    );
};

export default RecipeGenerator;
