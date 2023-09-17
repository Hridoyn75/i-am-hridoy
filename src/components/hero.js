import Image from "next/image";
import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"], weight: "600" });
import { BsGithub, BsFacebook } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import NavBar from "./nav";
import Button from "./btn";

const Hero = () => {
  return (
    <>
      <NavBar />
      <main className=" h-screen md:h-[80vh] flex justify-center items-center">
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-5">
          <div className=" text-center">
            <p className={` text-6xl ${syne.className}`}>
              Hey, I'm <span className="gradient-text">Hridoy</span>
            </p>
            <p className={` mb-6 pt-2 text-xl`}>
              A self-taught full-stack web developer.
            </p>
            <Button href='/' text='Download CV' />
            <div className=" text-slate-500 mt-8 text-3xl flex justify-center gap-3">
              <a
                className=" hover:text-white"
                href="https://github.com/Hridoyn75"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                className=" hover:text-[#0f90f3]"
                href="https://www.facebook.com/nazmulhridoy001"
                target="_blank"
              >
                <BsFacebook />
              </a>
              <a
                className=" hover:text-[#fbbc04]"
                href="mailto:hridoyn75@gmail.com"
                target="_blank"
              >
                <ImMail4 />
              </a>
            </div>
          </div>
          <div className=" rounded-full overflow-hidden">
            <div className=" w-[175px] md:w-[300px] h-[175px] md:h-[300px] gradient-border">
              <Image
                className=" rounded-full"
                src="/hridoy.png"
                alt="profile image"
                fill
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
