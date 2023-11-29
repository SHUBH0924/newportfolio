import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/sanity/sanity.query";
import type { BlogType } from "@/types";

export default async function Project() {
  const blogs: BlogType[] = await getBlogs();
  // console.log(blogs)

  return (
    <main
      className="max-w-7xl mx-auto md:px-16 px-6"
    >
      <section
        className="max-w-2xl mb-10"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Blogs
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          Join me on this adventure—where knowledge meets creativity, and curiosity is the compass.
          Let the exploration ignite your passion!
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {blogs.length === 0 && (

          <div className="p-4 bg-white shadow-lg rounded-2xl w-130 dark:bg-gray-800">
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
                I&apos;m on it to provide blog on Latest Technology.<br/>
                Till then Stay tuned.
              </p>
            </div>
          </div>

        )}
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-lg" width={400} height={200} src={blog?.blogthumbnail} alt={blog?.title} />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.metadesc}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}