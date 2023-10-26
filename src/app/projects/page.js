"use client";
import ProjectCard from "@/components/project-card";
import projectsDB from "@/fakeDB/projects";
import { useState } from "react";

const ProjectsPage = () => {
  const [category, setCategory] = useState("");
  let WantedData;
  if (category === "") {
    WantedData = projectsDB;
  } else if (category === "web" || category === "extension") {
    WantedData = projectsDB.filter((project) => project.type === category);
  } else {
    WantedData = projectsDB.filter(
      (project) => project.type !== "web" && project.type !== "extension"
    );
  }

  return (
    <>
      <h1 className=" text-3xl text-center my-10">
        My Personal <span className="gradient-text font-bold">Projects</span>
      </h1>
      <div className=" w-fit mx-auto flex gap-3">
        <button
          onClick={() => setCategory("")}
          className=" py-2 px-4 rounded-md bg-slate-600"
        >
          All
        </button>
        <button
          onClick={() => setCategory("web")}
          className=" py-2 px-4 rounded-md bg-slate-600"
        >
          Web
        </button>
        <button
          onClick={() => setCategory("extension")}
          className=" py-2 px-4 rounded-md bg-slate-600"
        >
          Extension
        </button>
        <button
          onClick={() => setCategory("others")}
          className=" py-2 px-4 rounded-md bg-slate-600"
        >
          Others
        </button>
      </div>
      <div className=" flex flex-col w-[90%] max-w-[850px] my-10 gap-8 mx-auto">
        {WantedData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.image}
              type={project.type}
            />
          );
        })}
        <div className=" w-fit mx-auto flex gap-8">
          <button className=" px-4 special_btn different_bg py-2 rounded-md">
            Prev
          </button>
          <button className=" px-4 special_btn different_bg py-2 rounded-md">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
