import SectionTitle from "../SectionTitle";
import ProjectCard from "./components/ProjectCard";
import { data } from "../../data/ProjectData";
import { forwardRef } from "react";


export const Projects = forwardRef<HTMLElement>((_props,ref) => {
    let side = false; // use useState?

    return (
        <section ref={ref} className="m-24">
            <SectionTitle name="PROJECTS" />
            <div className="flex flex-col justify-center items-center gap-8">
                {data.map(d => {
                    side = !side;
                    return (
                        <ProjectCard key={d.id} { ...{isInverse: side , projectDetails: d}} />
                    )
                })}
            </div>
            
        </section>
    )
})