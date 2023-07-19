"use client"
import { useEffect } from "react";
import useBeerStore from "../store";

const checkCounter = (counter: number) =>{
        counter >= 9 ? counter = 1 : counter++
        return counter
} 

const TakeData = () => {
    const setRecipes  = useBeerStore((state) => state.setRecipes);
    const recipes = useBeerStore((state) => state.recipes)
    const counter = useBeerStore((state) =>state.counter)
    const setCounter = useBeerStore((state) => state.setCounter)
    useEffect(() => {
        if (recipes.length === 0) {
            const fetchRecipes = async () => {
                try {
                    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${counter}`);
                    const data = await response.json();
        
                    const recipes = data.map((recipe: any) => ({
                    id: recipe.id,
                    name: recipe.name,
                    description: recipe.description,
                    image_url: recipe.image_url,
                    isChosen: false,
                    }));  
                    
                    setRecipes(recipes);
                } catch (error) {
                    console.error('Error fetching recipes:', error);
                }
                };
                setCounter(checkCounter(counter))
                fetchRecipes();
        }  return

    }, [setRecipes, recipes]);
    return (null);
};

export default TakeData;