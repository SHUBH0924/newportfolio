import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubhjeet Paul | Portfolio",
  metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "Portfolio which describes the ability of mine.",
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