import { Project, projectProps } from "./Project";

interface projectsProps {
    projects: projectProps[]
}
export function Projects({projects}:projectsProps){
    return (
        <div className="flex flex-col gap-8">
            {projects.map((project, key)=> {
                return (
                    <Project title={project.title} previewImage={project.previewImage} linkPage={project.linkPage} description={project.description} linkCode={project.linkCode} key={key}/>
                )
            })}
        </div>
    )
}