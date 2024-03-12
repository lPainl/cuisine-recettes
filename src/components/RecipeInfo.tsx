import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { IRecipe } from '../interfaces/IRecipe';

type RecipeInfoProps = {
    recipe: IRecipe;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const RecipeInfo = ({ recipe, handleClick }: RecipeInfoProps) => {
    return (
        <article
            className="my-4 flex cursor-pointer rounded-lg border border-cyan-600   bg-cyan-200 p-2"
            onClick={handleClick}
        >
            <div className="mr-2 w-2/4 overflow-hidden rounded-sm border border-gray-500">
                <img src={recipe.recipeImg}></img>
            </div>
            <div className="flex w-2/4 items-center">
                <h5>{recipe.recipeName}</h5>
                <ArrowRightCircleIcon className="size-6 text-orange-600" />
            </div>
        </article>
    );
};

export default RecipeInfo;
