import { Syne } from "next/font/google";
import ProjectCard from "./project-card";
import Button from "./btn";
import projectsDB from "@/fakeDB/projects";
const syne = Syne({ subsets: ["latin"], weight: "600" });

const Projects = () => {
  const WantedData = projectsDB.slice(0,3);
  return (
    <section id="projects">
      <h2 className={` text-center text-4xl pt-5 ${syne.className}`}>
        <span className="gradient-text">#</span>Projects
      </h2>
      <div className=" flex flex-col w-[90%] max-w-[850px] my-10 gap-8 mx-auto">
        {WantedData.map(project =>{
          return (
              <ProjectCard key={project.id} 
              image={project.image}
              type={project.type} 
               />
          )
        })}
        <Button text='Show more...' href='/projects' />
      </div>
    </section>
  );
};

export default Projects;
