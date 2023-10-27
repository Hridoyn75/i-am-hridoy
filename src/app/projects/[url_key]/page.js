import Button from "@/components/btn";
import projectsDB from "@/fakeDB/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const ProjectDetailsPage = ({ params }) => {
  const urlKey = params.url_key.replace(/-/g, " ");

  const project = projectsDB.filter((project) => project.title === urlKey)[0];
  return (
    <section className=" w-full max-w-[600px] mx-auto px-2 pt-8">
      <Image
        src={project.image}
        alt="Project Thumbnail"
        width={1920}
        height={1080}
        className="border border-slate-500  rounded object-contain hover:scale-110 transition-all duration-500"
      />
      <div className=" flex gap-6 my-5 bg-slate-900 py-3 rounded w-fit mx-auto px-8">
        <Button href={project.live_url} text="Live Preview" />
        <Link
          href={project.github_url}
          className=" hover:text-slate-400 text-2xl items-center mx-auto flex gap-2"
        >
          <BsGithub /> GitHub Link
        </Link>
      </div>

      <h1 className=" text-2xl text-slate-100 pt-5">Project: {project.title}</h1>
      <p className=" text-slate-300 leading-relaxed mt-5">{project.description}</p>
    </section>
  );
};

export default ProjectDetailsPage;
