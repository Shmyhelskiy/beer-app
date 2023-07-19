import { FC } from "react";
import Image from "next/image";

type RecipeInfoType = {
    name: string,
    description: string,
    image_url: string,
}
const RecipeInfo:FC<RecipeInfoType> = ({name, description, image_url}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className='font-bold text-xs sm:text-base mb-2 w-full text-center'>{name}</h2>
            <Image
                src={image_url}
                alt={name}
                width={600}
                height={200}
                className='h-[150px] w-[150px]'
            />
            <span className="w-[100] h-32 text-xs sm:text-sm md:text-base overflow-auto mt-5 text-center" >{description}</span>
        </div>
    );
};

export default RecipeInfo;