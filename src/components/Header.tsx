import { DotsThreeOutline } from "@phosphor-icons/react";
import { RefObject, useState } from "react";

interface HeaderProps{
    scrollTo: (element :RefObject<HTMLElement>) => void;
    home: RefObject<HTMLElement>;
    about: RefObject<HTMLElement>;
    projects: RefObject<HTMLElement>;
    contact: RefObject<HTMLElement>;
}


export default function Header({scrollTo,home,about,projects,contact} : HeaderProps) {
    const [open, setOpen] = useState(false);
    
    return (
        <header className="m-auto sticky bg-ghostWhite/30 backdrop-blur-sm top-0 z-50 h-{80} p-4  ">
            <div className="max-w-screen-lg m-auto flex flex-wrap items-center justify-between">
                <div >
                    <button onClick={() => { scrollTo(home) }} >
                        <img src="/logo.svg" alt="logo" />
                    </button>
                </div>

                <DotsThreeOutline size={36} className="lg:hidden block cursor-pointer" onClick={()=> {setOpen(!open)}} />

                <nav className={`${open ? 'block' : 'hidden'} text-xl lg:items-center lg:flex lg:w-auto w-full font-righteous`}>
                    <ul className="lg:flex lg:justify-between">
                        <li>
                            <button onClick={() => { scrollTo(home) }}  className="mx-4 transition-color hover:text-orangeRedCrayole duration-200 ">
                                <span className="link link-underline link-underline-black">
                                    HOME
                                </span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { scrollTo(about) }} className="mx-4 hover:text-orangeRedCrayole transition-color duration-200 ">
                                <span className="link link-underline link-underline-black">
                                    ABOUT
                                </span> 
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { scrollTo(projects) }}  className="mx-4 hover:text-orangeRedCrayole transition-color duration-200">
                                <span className="link link-underline link-underline-black">
                                    PROJECTS
                                </span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { scrollTo(contact) }}  className="mx-4 hover:text-orangeRedCrayole transition-color duration-200">
                                <span className="link link-underline link-underline-black">
                                    CONTACT
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}