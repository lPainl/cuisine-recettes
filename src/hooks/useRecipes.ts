import {
    DocumentData,
    QuerySnapshot,
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
} from 'firebase/firestore/lite';
import { useState } from 'react';
import { recipesDB } from '../config/firebase';
import { IRecipe } from '../interfaces/IRecipe';
import { consts } from '../utils/const';

export const useRecipes = () => {
    const [recipeData, setRecipeData] = useState<
        undefined | IRecipe[] | null | IRecipe
    >();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getAllRecipes = async () => {
        try {
            initRequest();
            const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
                await getDocs(collection(recipesDB, consts.RECIPES_DATABASE));
            const recipesSaved: IRecipe[] = [];
            querySnapshot.forEach((element) => {
                const recipeId = element.id;
                const recipe = element.data() as IRecipe;

                recipesSaved.push({
                    recipeId,
                    recipeImg: recipe.recipeImg,
                    recipeName: recipe.recipeName,
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                    recipeUrl: recipe.recipeUrl,
                });
            });
            setRecipeData(recipesSaved);
        } catch (error) {
            handleError();
        } finally {
            setLoading(false);
        }
    };

    const getRecipeByRecipeId = async (recipeId: string) => {
        try {
            initRequest();
            const recipesRef = doc(
                recipesDB,
                consts.RECIPES_DATABASE,
                recipeId
            );
            const recipeSnapshot = await getDoc(recipesRef);

            if (!recipeSnapshot.exists()) {
                setRecipeData(null);
                return;
            }
            const recipeDb = recipeSnapshot.data() as IRecipe;

            setRecipeData({
                recipeId: recipeSnapshot.id,
                recipeImg: recipeDb.recipeImg,
                recipeName: recipeDb.recipeName,
                ingredients: recipeDb.ingredients,
                steps: recipeDb.steps,
                recipeUrl: recipeDb.recipeUrl,
            });
        } catch (error) {
            handleError();
        } finally {
            setLoading(false);
        }
    };

    const createRecipe = async (recipe: IRecipe): Promise<boolean> => {
        initRequest();
        delete recipe.recipeId;
        try {
            await addDoc(
                collection(recipesDB, consts.RECIPES_DATABASE),
                recipe
            );
        } catch (error) {
            handleError();
            return Promise.resolve(false);
        } finally {
            setLoading(false);
        }
        return Promise.resolve(true);
    };

    const initRequest = () => {
        setLoading(true);
        setError(false);
    };

    const handleError = () => {
        setRecipeData(undefined);
        setError(true);
    };

    return {
        recipeData,
        loading,
        error,
        getAllRecipes,
        getRecipeByRecipeId,
        createRecipe,
    };
};
