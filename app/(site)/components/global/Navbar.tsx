import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <ul className="flex items-center gap-x-3">
          <li><Link href="/">
            <Image src={Logo} width={25} height={25} alt="logo" />
          </Link>
          </li>
          <li><Link href="/"><span className="flex items-start bg-blend-color font-semibold text-xl">Shubhjeet Paul</span></Link></li>
        </ul>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-purple-400 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-purple-400 duration-300"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}