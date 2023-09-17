import ProjectCard from "@/components/project-card";

const ProjectsPage = () => {
  return (
    <>
      <h1 className=" text-3xl text-center my-10">
        My Personal <span className="gradient-text font-bold">Projects</span>
      </h1>
      <div className=" w-fit mx-auto flex gap-3">
        <button className=" py-2 px-4 rounded-md bg-slate-600">All</button>
        <button className=" py-2 px-4 rounded-md bg-slate-600">Web</button>
        <button className=" py-2 px-4 rounded-md bg-slate-600">
          Extension
        </button>
        <button className=" py-2 px-4 rounded-md bg-slate-600">Others</button>
      </div>
      <div className=" flex flex-col w-[90%] max-w-[850px] my-10 gap-8 mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
