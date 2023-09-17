import Image from "next/image";

const ProjectCard = () => {

  return (
    <div className="project-card">
      <Image 
        className=" rounded-md"
        src="/project.png"
        alt="project"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default ProjectCard;
