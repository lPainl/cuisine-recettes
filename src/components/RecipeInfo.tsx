import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { IRecipe } from '../interfaces/IRecipe';

type RecipeInfoProps = {
    recipe: IRecipe;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const RecipeInfo = ({ recipe, handleClick }: RecipeInfoProps) => {
    return (
        <article
            className="my-4 flex cursor-pointer rounded-lg border border-cyan-600   bg-cyan-200 p-2 lg:max-w-xl"
            onClick={handleClick}
        >
            <div className="mr-2 w-2/4 ">
                <img
                    className="float-left h-20 w-full rounded-sm border border-gray-500 object-cover lg:h-52 lg:w-96"
                    src={recipe.recipeImg}
                ></img>
            </div>
            <div className="flex w-2/4 items-center">
                <h5 className="flex-1 pr-2">{recipe.recipeName}</h5>
                <ArrowRightCircleIcon className="size-6 text-orange-600" />
            </div>
        </article>
    );
};

export default RecipeInfo;
