import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Window from "../Window";
import { forwardRef } from "react";

export const Presentation = forwardRef<HTMLElement>((_props, ref) => {
    //TODO descobrir como puxar a cor do tailwind para o icone
    return (
        <section ref={ref} className="xl:flex justify-center items-center xl:py-0 xl:pt-8 gap-8 md:h-screen m-12 mx-auto sm:my-0">
            <div className="font-righteous mx-0 text-xl flex flex-col justify-center items-center xl:block text-center md:text-left">
                <p className="pb-1">
                    {'>'} Hi, my name is
                </p>
                <div className="font-russo-one text-orangeRedCrayole text-5xl md:text-7xl select-none">
                    {'>'} Lucas Lima_
                </div>
                <p className="pt-1">
                    {'>'} Computer Scientist / Front-end Developer
                </p>
                <span className="text-orangeRedCrayole text-3xl select-none">
                    {'>>>>>>>>>>>>>>>>>>>>>>>>>'}
                </span>
                <div className="flex pt-2 gap-3">
                    <a href="https://www.linkedin.com/in/l22l/" target="_blank" rel='noreferrer'>
                        <LinkedinLogo size={36} color="#001021" weight="fill"  />
                    </a>
                    <a href="https://github.com/luycaslima" target="_blank" rel='noreferrer' >
                        <GithubLogo size={36} color="#001021" weight="fill"  /> 
                    </a>
                </div>
            </div>
            <div className="m-8 xl:m-0 relative flex items-center justify-center">
                <Window type="image" width={330} className=" absolute z-1 inset-x-18 sm:inset-x-24 top-2 w-7/12 sm:w-2/3" imagePath="gifs/eating_ramen.gif" />
                <Window type="image" width={330}  className="absolute z-2 right-2 bottom-12 sm:bottom-24 sm:w-80 w-1/2 " imagePath="gifs/eating_ramen.gif" />
                <Window type="image" width={370}  className="absolute z-3 left-2 bottom-4 sm:w-80 w-1/2 " imagePath="gifs/idol_jade.gif" />
                <img src="/black_circle.svg" alt="circle" />
            </div>
        </section>
    )
})