import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubhjeet Paul | Portfolio",
  metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "Hi there! I'm Shubhjeet, a passionate developer with experience in MERN stack and React Native",
  verification:{
    google: "tAKGxTQGX-uh-8c8WvJzc9sIvjrOWhMALcp2cE_iaLY",
  },
  keywords: [
    "shubhjeet's resume", "shubhjeet best-freelancer", "shubhjeet Full-stack Developer", "best developer",
    "portfolio of shubhjeet paul", 
    "best software engineer","Kanpur", "Goa", "kolkata","best freelancer in US", "best developer in India", "shubhjeet paul", "software engineer",
    "recent graduate", "best web developer in kanpur", "Java Developer", "MERN developer", "web developer"
  ],
  openGraph: {
    images:
      "https://res.cloudinary.com/dttbrpv4b/image/upload/v1701247393/Shubhjeet_Paul_l8zsrd.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}