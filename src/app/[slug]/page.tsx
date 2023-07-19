"use client"
import RecipeInfo from "../components/RecipeInfo";
import useBeerStore from "../store";

const page = ({ params }: { params: { slug: string } }) => {
    const id = +params.slug;
    const recipes = useBeerStore((state) =>state.recipes)
    const findRecipe = recipes.findIndex((item) => item.id === id)
    const recipeData = useBeerStore((state) =>state.recipes[findRecipe])

    return (
        <main className="w-full h-full flex justify-center">
            <div className="w-1/2 m-20">
                <RecipeInfo name={recipeData.name} description={recipeData.description} image_url={recipeData.image_url}/>
            </div>
        </main>
    );
};

export default page;