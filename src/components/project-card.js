import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ image, type, title }) => {
  const urlKey = title.replace(/ /g, "-");
  return (
    <div className="project-card relative">
      <Link href={"/projects/" + urlKey}>
        <Image
          className=" rounded-md"
          src={image}
          alt="project"
          width={1920}
          height={1080}
        />
      </Link>
      <span className=" px-4 py-1 bg-slate-400 rounded-md text-slate-900 font-bold absolute left-2 bottom-3">
        {type}
      </span>
    </div>
  );
};

export default ProjectCard;
