import About from "./components/About";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

export default function MainBody() {
    return (
        <main className="m-auto flex flex-col items-center justify-center">
            <Presentation />
            <About />
            <Projects />
       </main>
    )
}