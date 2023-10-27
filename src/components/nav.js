import Link from "next/link"

const NavBar = () => {
  return (
    <div className=" flex gap-1 w-fit mx-auto mt-4 text-slate-400">
        <Link className=" px-3 py-1 rounded hover:bg-slate-700" href="/">Home</Link>
        <Link className=" px-3 py-1 rounded hover:bg-slate-700" href="/projects">Projects</Link>
        <Link className=" px-3 py-1 rounded hover:bg-slate-700" href="/blogs">Blogs</Link>
        <Link className=" px-3 py-1 rounded hover:bg-slate-700" target="_blank" href="https://www.facebook.com/nazmulhridoy001">Contact</Link>
    </div>
  )
}

export default NavBar