import BlogCard from "@/components/blog-card";

const BlogsPage = () => {
  return (
    <>
      <h1 className=" text-3xl text-center my-10">
        Blogs That Provide{" "}
        <span className="gradient-text font-bold">Solutions</span>
      </h1>
      <div className=" flex flex-col w-[90%] max-w-[850px] my-10 gap-8 mx-auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
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

export default BlogsPage;
