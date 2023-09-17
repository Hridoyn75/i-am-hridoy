import Link from "next/link";


const BlogCard = () => {
  return (
    <Link href="/blogs/first-post">
      <div className="blog-card flex flex-col md:flex-row justify-center items-center gap-3 p-3">
        <img
          className=" w-full md:w-1/3 max-h-[200px] rounded-md object-contain"
          src="/project.png"
          alt="project"
        />
        <div>
          <p className=" text-slate-400">Nazmul Hridoy · November 23, 2022</p>
          <h2 className={` py-1 text-2xl`}>
            How to like and retweet using the Twitter v2 API
          </h2>
          <span className=" text-blue-600">#JavaScript </span>
          <span className=" text-blue-600">#telegramBot </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
