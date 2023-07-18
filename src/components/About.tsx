import { forwardRef } from "react";
import SectionTitle from "./SectionTitle";


export const About = forwardRef<HTMLElement>((_props,ref) => {
    return (
        <section ref={ref} className="my-12 mx-auto xl:m-24">
            <SectionTitle name="ABOUT"/>
            <div className="flex justify-center items-center flex-col md:flex-row gap-2">
                <div className="mx-auto  relative flex items-center justify-center w-2/3 md:w-full">
                    <img className="absolute animate-reverse-spin " src="/white_square.svg" alt="white square" />
                    <div className="absolute leading-[5rem]  md:leading-[7rem] text-ghostWhite text-8xl sm:text:7xl md:text-9xl font-keania-one stroke max-h-full">
                        <h1 className="select-none">L2</h1>
                        <h1 className="select-none">2L</h1>
                    </div>
                    <img src="/profile_pic.svg" alt="profile pic" />
                </div>
                <div className="flex flex-col justify-center mx-auto items-center text-center xl:text-start w-4/5 xl:max-w-screen-sm">
                     <div className="font-righteous">
                        <h2 className="text-3xl py-2">
                            A flexible, dedicated Developer based in Wuppertal, Germany.
                        </h2>
                        <span className="text-orangeRedCrayole text-3xl md:text-4xl select-none">
                            {'>>>>>>>>>>>>>>>>>>>>>>>>>'}
                        </span>
                    </div>
                    <div className="text-lg sm:text-xl flex flex-col gap-4">
                        <p>
                            Born in Aracaju, Brazil. I{'\''}m a <strong>Computer Scientist</strong> with passion for Art and Technology.
                        </p>
                        <p>
                            As a Front-end developer, I possess skills in <strong>HTML, CSS, JS/TS, React, Tailwind</strong> and use <strong>Figma</strong> as a designing tool.
                            Moreover, I have knowledge in C# and have been learning the necessary tools <strong>to become a Fullstack Developer.</strong>
                        </p>
                        <p>
                            Aside from coding, I{'\''}m a digital artist who loves to do <strong>3D modelling, illustrations and Pixel art.</strong>
                        </p>
                    </div> 
                </div>
            </div>
        </section>
    )
})