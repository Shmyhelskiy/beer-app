import { FC } from "react";
import useBeerStore from "../store";
import Link from "next/link";
import RecipeInfo from "./RecipeInfo";

type RecipeDataProps = {
    data: Recipe,
}; 
type Recipe = {
    id: number;
    name: string;
    description: string;
    image_url: string;
    isChosen: boolean;
};

const RecipeForm:FC<RecipeDataProps> = ({data}) => {
    const {id, name, description, image_url, isChosen} = data;
    const addToggle = useBeerStore((state) => state.addToggle);
    const deleteToggle = useBeerStore((state) =>state.deleteToggle)
    const rightHandleClick = (event: React.MouseEvent<HTMLDivElement>) =>{
        event.preventDefault();
        if (!isChosen) {
            addToggle(id) 
        }  else {
            (deleteToggle(id))
        }
    }

    return (
        <div className={`w-[20%] h-full `} onContextMenu={rightHandleClick}>
            <Link href={`/${id}`} className={`flex flex-col justify-center items-center p-3 m-3 ${!isChosen ? 'bg-sky-50' : 'bg-sky-200'}`}>
                <RecipeInfo name={name} description={description} image_url={image_url}/>
            </Link>
        </div>
    );
};

export default RecipeForm;