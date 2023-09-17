import { Syne } from "next/font/google";
import ProjectCard from "./project-card";
import Button from "./btn";
const syne = Syne({ subsets: ["latin"], weight: "600" });

const Projects = () => {
  return (
    <section id="projects">
      <h2 className={` text-center text-4xl pt-5 ${syne.className}`}>
        <span className="gradient-text">#</span>Projects
      </h2>
      <div className=" flex flex-col w-[90%] max-w-[850px] my-10 gap-8 mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <Button text='Show more...' href='/projects' />
      </div>
    </section>
  );
};

export default Projects;
