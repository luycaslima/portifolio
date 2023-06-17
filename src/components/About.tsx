import { forwardRef } from "react";
import SectionTitle from "./SectionTitle";


export const About = forwardRef<HTMLElement>((_props,ref) => {
    return (
        <section ref={ref} className=" flex flex-col justify-center items-center m-24">
            <SectionTitle name="ABOUT"/>
            <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-20">
                <div className="relative flex items-center justify-center">
                    <img className="absolute animate-reverse-spin" src="/white_square.svg" alt="white square" />
                    <div className="absolute leading-[7rem] text-ghostWhite text-9xl font-keania-one stroke">
                        <h1 className="select-none">L2</h1>
                        <h1 className="select-none">2L</h1>
                    </div>
                    <img src="/profile_pic.svg" alt="profile pic" />
                </div>
                <div className="max-w-screen-sm xl:py-5 pt-10">
                    <div className="font-righteous">
                        <h2 className="text-3xl pb-2">
                            A flexible, dedicated Front-end Developer based in Wuppertal, Germany.
                        </h2>
                        <span className="text-orangeRedCrayole text-4xl select-none">
                            {'>>>>>>>>>>>>>>>>>>>>>>>>>>>>'}
                        </span>
                    </div>
                    <div className="flex flex-col text-xl py-6 gap-4">
                        <p>
                            Born in Aracaju, Brazil. I{'\''}m a <strong>Computer Scientist</strong> with passion for Art and Technology.
                        </p>
                        <p>
                            As a Front-end developer, I possess skills in <strong>HTML, CSS, Javascript, React, Tailwind</strong> and use <strong>Figma</strong> as a designing tool.
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