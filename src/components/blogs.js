import { Syne } from "next/font/google";
import BlogCard from "./blog-card";
import Link from "next/link";
import Button from "./btn";
const syne = Syne({ subsets: ["latin"], weight: "600" });

const Blogs = () => {
  return (
    <section id="blogs">
      <h2 className={` pt-5 text-center text-4xl ${syne.className}`}>
        <span className="gradient-text">#</span>Blogs
      </h2>
      <div className=" flex flex-col w-[90%] max-w-[850px] my-10 gap-8 mx-auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <Button text='Show more...' href='/blogs' />
      </div>
    </section>
  );
};

export default Blogs;
