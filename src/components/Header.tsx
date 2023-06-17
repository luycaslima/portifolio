import { RefObject } from "react";

interface HeaderProps{
    scrollTo: (element :RefObject<HTMLElement>) => void;
    home: RefObject<HTMLElement>;
    about: RefObject<HTMLElement>;
    projects: RefObject<HTMLElement>;
    contact: RefObject<HTMLElement>;
}


export default function Header({scrollTo,home,about,projects,contact} : HeaderProps) {
    return (
        <header className="m-auto sticky bg-ghostWhite/30 backdrop-blur-sm top-0 z-50 h-{80} p-4 flex-wrap ">
            <div className="max-w-screen-lg m-auto flex items-center justify-between">
                <div>
                    <button onClick={() => { scrollTo(home) }} >
                        <img src="/logo.svg" alt="logo" />
                    </button>
                </div>
                <nav className="text-xl items-center justify-center flex font-righteous">
                    <button onClick={() => { scrollTo(home) }}  className="mx-4 transition-color hover:text-orangeRedCrayole duration-200 ">
                        <span className="link link-underline link-underline-black">
                            HOME
                        </span>
                    </button>
                    <button onClick={() => { scrollTo(about) }} className="mx-4 hover:text-orangeRedCrayole transition-color duration-200 ">
                        <span className="link link-underline link-underline-black">
                            ABOUT
                        </span> 
                    </button>
                    <button onClick={() => { scrollTo(projects) }}  className="mx-4 hover:text-orangeRedCrayole transition-color duration-200">
                        <span className="link link-underline link-underline-black">
                            PROJECTS
                        </span>
                    </button>
                    <button onClick={() => { scrollTo(contact) }}  className="mx-4 hover:text-orangeRedCrayole transition-color duration-200">
                        <span className="link link-underline link-underline-black">
                            CONTACT
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    )
}