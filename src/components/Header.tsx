export default function Header() {
    // TODO fazer as ROUTES das paginas que arraste pra posição na principal
    return (
        <header className="m-auto sticky bg-ghostWhite/30 backdrop-blur-sm top-0 z-50 h-{80} p-4 flex-wrap ">
            <div className="max-w-screen-lg m-auto flex items-center justify-between">
                <div>
                    <a href="/">
                        <img src="/logo.svg" alt="logo" />
                    </a>
                </div>
                <nav className="text-xl items-center justify-center flex font-righteous">
                    <a href="/" className="mx-4 transition-color hover:text-orangeRedCrayole duration-200 ">
                        <span className="link link-underline link-underline-black">
                            HOME
                        </span>
                    </a>
                    <a href="/" className="mx-4 hover:text-orangeRedCrayole transition-color duration-200 ">
                        <span className="link link-underline link-underline-black">
                            ABOUT
                        </span> 
                    </a>
                    <a href="/" className="mx-4 hover:text-orangeRedCrayole transition-color duration-200">
                        <span className="link link-underline link-underline-black">
                            PROJECTS
                        </span>
                    </a>
                    <a href="/" className="mx-4 hover:text-orangeRedCrayole transition-color duration-200">
                        <span className="link link-underline link-underline-black">
                            CONTACT
                        </span>
                    </a>
                </nav>
            </div>
        </header>
    )
}