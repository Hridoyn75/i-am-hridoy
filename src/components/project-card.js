import Image from "next/image";

const ProjectCard = ({image, type}) => {

  return (
    <div className="project-card relative">
      <Image 
        className=" rounded-md"
        src={image}
        alt="project"
        width={1920}
        height={1080}
      />
      <span className=" px-4 py-1 bg-slate-400 rounded-md text-slate-900 font-bold absolute left-2 bottom-3">{type}</span>
    </div>
  );
};

export default ProjectCard;
