import { ProjectsDataProps } from "../../../data/ProjectData";
import Window from "../../Window";

interface ProjectCardProp{
    projectDetails: ProjectsDataProps;
    isInverse: boolean;
}

export default function ProjectCard( {projectDetails, isInverse} : ProjectCardProp) {
    return (
         <>
            {
                isInverse ? <div className="flex xl:flex-row justify-center items-center gap-24">
                    <Window type="projects" width={410}  details={projectDetails} />
                    <div className="h-[340px] w-[410px] bg-slate-400 rounded-xl lg:block hidden">
                         {/*<img className="w-full" src={props.imageLink} alt="" />*/}
                    </div>
                </div> : 
                    <div className="flex xl:flex-row justify-center items-center gap-24">
                        <div className="h-[340px] w-[410px] bg-slate-400 rounded-xl lg:block hidden">
                             {/*<img className="w-full" src={props.imageLink} alt="" />*/}
                        </div>
                        <Window type="projects" width={410}  details={projectDetails} />
                    </div>
            }
           
           </>
    )
}