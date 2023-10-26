import { Syne } from "next/font/google";
import { backend, frontend, others } from "@/fakeDB/skills";
const syne = Syne({ subsets: ["latin"], weight: "600" });

const Skills = () => {


  return (
    <section id="skills" className=" mb-10">
      <h2 className={` text-center text-4xl pt-5 ${syne.className}`}>
        <span className="gradient-text">#</span>Skills
      </h2>
      <div className="container px-2 md:pl-16 mx-auto text-white mt-5">
        <div className=" flex flex-wrap">
          <div className="w-1/3">
            <h2 className=" font-bold pb-2 ">
              <span className="gradient-text">Fontend Skills</span>
            </h2>
            {frontend.map((skill, index) => (
              <div key={index} className="text-center w-fit">
                <p className="md:text-xl font-semibold">
                  <span className="gradient-text">#</span>
                  {skill}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/3">
            <h2 className=" font-bold pb-2 ">
              <span className="gradient-text">Backend Skills</span>
            </h2>
            {backend.map((skill, index) => (
              <div key={index} className="text-center w-fit">
                <p className="md:text-xl font-semibold">
                  <span className="gradient-text">#</span>
                  {skill}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/3">
            <h2 className=" font-bold pb-2 ">
              <span className="gradient-text">Other skills</span>
            </h2>
            {others.map((skill, index) => (
              <div key={index} className="text-center w-fit">
                <p className="md:text-xl font-semibold">
                  <span className="gradient-text">#</span>
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
