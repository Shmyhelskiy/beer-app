"use client"

import useBeerStore from "./store"
import RecipeForm from "./components/RecipeForm";

export default function Home() {
  const recipes = useBeerStore((state) => state.recipes);
  const chosen = useBeerStore((state) =>state.chosen);
  const deleteRecipe = useBeerStore((state) => state.deleteRecipes);
  
  const handleClick = () => {
    deleteRecipe(chosen)
  }
  return (
    <main className="flex flex-col">
      {chosen.length !== 0 
      ? 
        <div className="h-10 flex justify-center w-full">
          <button className="mt-2 border-[1px] border-stone-400 p-2 flex items-center justify-start rounded-xl bg-orange-400" onClick={handleClick}>Delete</button>
        </div>
      : 
        null
      }
      <div className="w-full flex flex-wrap justify-around">
        {
        recipes.length > 0 && recipes.slice(0, 15).map((item, ) => <RecipeForm data={item} />)
        } 
      </div>
    </main>
  )
}


