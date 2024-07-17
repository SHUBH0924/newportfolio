import Image from "next/image";
import { getBlogs } from "@/sanity/sanity.query";
import type { BlogType } from "@/types";
import Link from "next/link";

export default async function Blog() {
  const blog: BlogType[] = await getBlogs();

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Blogs</h2>
      </div>

      <div className="flex flex-col gap-x-12">
        {blog.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
          >
            <Link
              href={`/blogs/${data.slug}`}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={data.blogthumbnail}
                className="object-cover"
                alt={`${data.title} logo`}
                fill
              />
            </Link>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.title}</h3>
              <p>{data.metadesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}