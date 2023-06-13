import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Window from "../../../Window";

export default function Presentation() {
    //TODO descobrir como puxar a cor do tailwind para o icone
    return (
        <section className="xl:flex justify-center items-center xl:py-0 pt-8 gap-3 h-screen">
            <div className="font-righteous text-xl min-w-3xl">
                <p className="pb-1">
                    {'>'} Hi, my name is
                </p>
                <div className="font-russo-one text-orangeRedCrayole text-8xl select-none">
                    {'>'} Lucas Lima_
                </div>
                <p className="pt-1">
                    {'>'} Computer Scientist / Front-end Developer
                </p>
                <span className="text-orangeRedCrayole text-3xl select-none">
                    {'>>>>>>>>>>>>>>>>>>>>>>>>>>>>'}
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
            <div className="m-16 xl:m-0 relative flex items-center justify-center">
                <Window type="image" width={330} className="absolute z-1 inset-x-24 top-4" imagePath="gifs/eating_ramen.gif" />
                <Window type="image" width={330}  className="absolute z-2 right-2 bottom-24 w-80" imagePath="gifs/eating_ramen.gif" />
                <Window type="image" width={370}  className="absolute z-3 left-2 bottom-4 w-80" imagePath="gifs/idol_jade.gif" />
                <img src="/black_circle.svg" alt="circle" />
            </div>
        </section>
    )
}