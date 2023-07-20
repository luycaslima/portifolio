import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { ProjectsDataProps } from "../data/ProjectData";

interface WindowGeneral {
    width?: number;
    animationType : 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in-down';
    delay: number;
}

interface WindowImageProps  extends React.HtmlHTMLAttributes<HTMLDivElement>, WindowGeneral{
    type: 'image';
    imagePath: string;   
}

interface ProjectDetailsProps extends React.HtmlHTMLAttributes<HTMLDivElement>, WindowGeneral{
    type: 'projects';
    details: ProjectsDataProps;
    isInverse?: boolean;
}


export default function Window(props : WindowImageProps | ProjectDetailsProps  ) {
    return (
        <div data-aos={props.animationType} data-aos-duration={props.delay.toString()} className={`w-[${props.width}px] ${props.className}`}>
            <header className="flex justify-end items-center px-2 bg-orangeRedCrayole h-7 border-2 rounded-t-lg border-richBlackFogra">
                <img className="max-h-[16px]" src="/window_options.svg" alt="window options" />
            </header>
            <main className={`bg-ghostWhite overflow-hidden flex justify-center items-center border-b-2 border-r-2 border-l-2 rounded-b-lg border-richBlackFogra`}> 
                {props.type === 'projects' ? 
                    ProjectDetailsWindow(props.details) :
                    ImageWindow(props.imagePath)
                }
            </main>
        </div>
    )
}

function ImageWindow(imagePath : string) {
    return (
        <img className=" object-scale-down h-full" src={imagePath} alt="" />
    )
}

function ProjectDetailsWindow({title,description,technologies,linkGithub, linkDemo} : ProjectsDataProps) {
    return (
        <div className="flex flex-col justify-between items-center text-center h-full ">
            <h2 className="mx-9 mt-2 font-righteous text-3xl">{title}</h2>
            
            <p className=" mx-9 py-1 md:py-4 text-center text-xl">{description}</p>
            
            <div className="flex m-3 md:gap-3 font-bold flex-col md:flex-row">
                {technologies.map( (t ) => {
                    return (
                        <span key={t.toString()} >{t}</span>
                    )
                })}
            </div>
            
            <div className="flex flex-row justify-center items-center gap-4 font-bold my-3">
                {linkDemo &&
                    <a className="flex justify-center items-center" href={linkDemo} target="_blank" rel="noreferrer">
                {/*TODO  What is norefferer? */}
                        <ArrowSquareOut color="#001021" size={34} /> Live Demo
                    </a>
                }
                <a className="flex justify-center items-center" href={linkGithub} target="_blank" rel="noreferrer">
                    <GithubLogo weight="fill" color="#001021" size={34} /> Source Code
                </a>
            </div>
            
        
        </div>
    )
}
