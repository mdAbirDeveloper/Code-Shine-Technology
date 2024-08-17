import Image from "next/image";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import Project from "./components/project";
import About from "./components/about";
import Services from "./components/services";
import { TypeAnimation } from "react-type-animation";
import Team from "./components/team";
import Review from "./components/review";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <div style={{ maxWidth: "1500px" }} className="mx-auto shadow-2xl mt-4">
      <div className="lg:flex md:flex block justify-around py-44">
      {/* Image Section */}
      <div
        className="animate-slide-in-left-rotate" // Apply custom animation here
        id="image"
      >
        <Image
          width={500}
          height={500}
          src={"/profile-pic.png"}
          alt=""
          className="rounded-full shadow-lg shadow-blue-300 hover:shadow-2xl hover:shadow-blue-900"
        />
      </div>
      
      {/* Text Section */}
      <div className="md:text-left text-center animate-slide-in-right-rotate" id="text">
        <h2 className="font-serif md:text-6xl text-4xl font-bold mt-44">
          Hello! {`${"I'm"}`}
        </h2>
        <h2 className="font-serif md:text-8xl text-6xl font-bold mt-2">
          Shah <span className="text-blue-500">Jalal</span>
        </h2>
        <h1 className="font-serif text-4xl font-bold mt-2">
          A-
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Web Designer",
              1000,
              "Video Editor",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </h1>
      </div>
    </div>
      </div>

      {/* end top section */}

      <Services />

      <About />

      <div style={{ maxWidth: "1500px" }} className="mx-auto shadow-2xl">
        <div className="min-h-screen">
          <Project />
        </div>
      </div>

      <Team />

      <Review />

      <Contact />

    </div>
  );
}
