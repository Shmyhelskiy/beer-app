import Link from "next/link";
import { FC,  } from "react";

const Nav:FC = () => {
    return (
        <nav className="h-16 bg-amber-500 text-white flex items-center ">
            <div className="flex items-center justify-start p-5 w-1/3 h-full">
                <ul className="flex items-center justify-start h-12 pl-5 text-xl">
                    <li className='mr-5'>
                        <Link href='/' className="mr-3 hover:text-amber-800 cursor-pointer">Home</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Nav;
