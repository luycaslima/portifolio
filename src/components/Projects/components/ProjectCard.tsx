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
                    <Window animationType="fade-right"  delay={0} type="projects" className="w-[300px] sm:w-[410px]" details={projectDetails} />
                    { projectDetails.imageLink ? 
                        <div data-aos="fade-left" className=" h-[340px] w-[410px] bg-slate-400 rounded-xl lg:block hidden">
                            <img className="object-cover rounded-xl " src={projectDetails.imageLink} />
                        </div>
                        : 
                        <div data-aos="fade-left" className=" h-[340px] w-[410px] bg-slate-400 rounded-xl lg:block hidden">
                        </div>
                    }
                </div> : 
                    <div className="flex xl:flex-row justify-center items-center gap-24">
                    { projectDetails.imageLink ? 
                        <div data-aos="fade-right" className=" h-[340px] w-[410px] bg-slate-400 rounded-xl lg:block hidden"> 
                            
                        </div>
                        :
                        <div data-aos="fade-right" className=" h-[340px] w-[410px] bg-slate-400 rounded-xl lg:block hidden">
                            <img className="w-full" src={projectDetails.imageLink} />   
                        </div>
                        
                    }
                        
                        <Window animationType="fade-left"  delay={0}  type="projects" className="w-[300px] sm:w-[410px]" details={projectDetails} />
                    </div>
            }
           
           </>
    )
}