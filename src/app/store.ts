import create from 'zustand';
import { immer } from 'zustand/middleware/immer'

type Recipe = {
    id: number;
    name: string;
    description: string;
    image_url: string;
    isChosen: boolean;
};

type Store = {
    recipes: Recipe[];
    chosen: number[];
    counter: number;
    setRecipes: (recipes: Recipe[]) => void;
    setCounter: (counter:number) => void;
    addToggle: (chosen: number) => void;
    deleteToggle: (chosen:number) => void;
    deleteRecipes: (chosen: number[]) => void;
};

const useBeerStore = create<Store>()(immer((set) => ({
    recipes: [],
    chosen: [],
    counter: 1,
    setRecipes: (recipes) => set({ recipes }),

    setCounter: (counter) =>set({counter}),

    addToggle: (chosenID) => set((state) => {
        state.chosen = [...state.chosen, chosenID]
        const findRecipe = state.recipes.findIndex((item) => item.id === chosenID)
        state.recipes[findRecipe].isChosen = true;
    }),

    deleteToggle: (chosenID) => set((state) => {
        const findRecipe = state.recipes.findIndex((item) => item.id === chosenID);
        state.recipes[findRecipe].isChosen = false;
        state.chosen = state.chosen.filter((id) => id !== chosenID);
    }),

    deleteRecipes: (chosen) =>set((state) =>{
        for ( let i = 0; i < chosen.length; i++) {
            const findId = state.recipes.findIndex((item) => item.id === chosen[i])
            state.recipes.splice(findId, 1);
        };
        state.chosen = [];
        return state
    }),
})));

export default useBeerStore;

