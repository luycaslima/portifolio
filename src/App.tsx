import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Presentation } from "./components/Presentation";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { useRef,RefObject, useEffect } from "react";
import {init,refresh} from 'aos';
import "aos/dist/aos.css";


export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(()=>{
      init();
      refresh();
  },[]);

  const handleScrollToSection = (elementRef: RefObject<HTMLElement>) => {
    if(!elementRef.current) return;
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    })
  }
  return (
    <>
      <Header home={home} about={about} projects={projects} contact={contact} scrollTo={handleScrollToSection}/>
      <main className="m-auto flex flex-col items-center justify-center">
        <Presentation ref={home} />
        <About ref={about} />
        <Projects ref={projects} />
      </main>
      <Footer ref={contact}/>
    </>
  )
}

