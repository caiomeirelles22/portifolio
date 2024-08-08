import { Project, projectProps } from "./Project";

interface projectsProps {
    projects: projectProps[]
}
export function Projects({projects}:projectsProps){
    return (
        <div>
            {projects.map((project, key)=> {
                return (
                    <Project title={project.title} previewImage={project.previewImage} linkPage={project.linkPage} description={project.description} linkCode={project.linkCode} key={key}/>
                )
            })}
        </div>
    )
}