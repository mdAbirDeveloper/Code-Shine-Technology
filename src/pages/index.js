"use client";
import Project from "./components/project";
import About from "./components/about";
import Services from "./components/services";
import { TypeAnimation } from "react-type-animation";
import Team from "./components/team";
import Review from "./components/review";
import Contact from "./components/contact";
import Head from "next/head";
import Pricing from "./components/pricing";
import FocusPage from "./components/focus";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code Shine Technology - Web Development, Design, and More</title>
        <link rel="canonical" href="https://codeshinetechnology.com" />
        <meta
          name="description"
          content="Code Shine Technology offers top-notch web development, design, and video editing services. Discover our expertise in creating stunning and functional digital solutions."
        />
        <meta
          name="keywords"
          content="Web Development, Web Design, Video Editing, Code Shine Technology"
        />
        <meta
          property="og:title"
          content="Code Shine Technology - Web Development, Design, and More"
        />
        <meta
          property="og:description"
          content="Code Shine Technology offers top-notch web development, design, and video editing services. Discover our expertise in creating stunning and functional digital solutions."
        />
        <meta
          property="og:image"
          content="https://codeShineTechnology.com/codeshinetechnology.png"
        />
        <meta property="og:url" content="https://codeShineTechnology.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div
        style={{ maxWidth: "1500px" }}
        className="mx-auto shadow-xl shadow-blue-500"
      >
        <div
          className="relative py-28 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/top-image.jpeg')", height: "500px" }} // Replace with your background image
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
            {/* Text Section */}
            <div className="animate__animated animate__fadeIn animate__delay-1s">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Welcome to <br />
                <span className="text-yellow-400">Code Shine Technology</span>
              </h1>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-2">
                We Build{" "}
                <span className="text-green-400">Creative Solutions</span>
              </h2>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">
                Expertise In-
                <TypeAnimation
                  sequence={[
                    "Web Development",
                    2000,
                    "Design Excellence",
                    2000,
                    "Innovative Solutions",
                    2000,
                  ]}
                  speed={20}
                  repeat={Infinity}
                  className="font-bold italic"
                />
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* end top section */}

      <Services />
      
      <FocusPage />

      <div style={{ maxWidth: "1500px" }} className="mx-auto shadow-2xl">
        <div className="">
          <Project />
        </div>
      </div>

      <Pricing />

      <Team />

      <Review />

      <About />

      <Contact />
    </div>
  );
}
