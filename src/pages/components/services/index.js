import Head from "next/head";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const Services = () => {
  return (
    <div>
      <Head>
        <title>Our Services - Code Shine Technology</title>
        <meta name="description" content="Discover the range of services offered by Code Shine Technology, including front-end, back-end, and full stack web development. Our expertise covers a wide array of technologies to meet your digital needs." />
        <meta name="keywords" content="front-end development, back-end development, full stack development, web development services, Code Shine Technology" />
        <meta property="og:title" content="Our Services - Code Shine Technology" />
        <meta property="og:description" content="Discover the range of services offered by Code Shine Technology, including front-end, back-end, and full stack web development." />
        <meta property="og:image" content="/profile-pic.png" />
        <meta property="og:url" content="https://codeShineTechnology.com/components/services" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="max-w-[1500px] mx-auto">
        <h1 className="text-center text-5xl font-serif font-bold uppercase text-green-500 my-10">
          our services
        </h1>
        <p></p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-4 py-10 text-center animate-slide-in-left-rotate">
            <h2 className="text-3xl font-serif font-bold uppercase text-blue-500">
              Front_end <br></br>{" "}
              <span className="text-3xl font-serif font-bold uppercase text-green-500">
                web development
              </span>
            </h2>
            <div className="flex justify-around my-3 mb-6">
              <FaHtml5 className="text-3xl text-green-400" />
              <FaCss3 className="text-3xl text-yellow-400" />
              <FaReact className="text-3xl text-blue-400" />
              <IoLogoJavascript className="text-3xl text-yellow-400" />
              <FaBootstrap className="text-3xl text-blue-400" />
              <SiTailwindcss className="text-3xl text-blue-500" />
            </div>
            <p className="text-xl font-serif font-thin text-left mt-5 text-white">
              We craft visually stunning, responsive, and interactive interfaces
              using HTML, CSS, JavaScript, React.js, Next.js.js, Bootstrap,
              Tailwind CSS and various CSS libraries. Our focus is on delivering
              seamless user experiences with top-notch design and functionality.
            </p>
          </div>
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-4 py-10 text-center">
            <h2 className="text-3xl font-serif font-bold uppercase text-blue-500">
              Back end<br></br>{" "}
              <span className="text-3xl font-serif font-bold uppercase text-green-500">
                web development
              </span>
            </h2>
            <div className="flex justify-around my-3">
              <IoLogoJavascript className="text-3xl text-yellow-400" />
              <FaNodeJs className="text-3xl text-green-500" />
              <SiExpress className="text-3xl text-green-500" />
              <SiMongodb className="text-3xl text-green-500" />
              <SiMysql className="text-3xl text-white" />
            </div>
            <p className="text-xl font-serif font-thin text-left text-white">
              We specialize in robust and scalable back-end solutions using
              Node.js, Express, and various databases like MongoDB and SQL. Our
              services ensure your applications run smoothly, handle data
              efficiently, and provide secure, reliable performance.
            </p>
          </div>
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-4 py-10 text-center animate-slide-in-right-rotate">
            <h2 className="text-3xl font-serif font-bold uppercase text-blue-500">
              Full Stack<br></br>{" "}
              <span className="text-3xl font-serif font-bold uppercase text-green-500">
                web development
              </span>
            </h2>
            <div className="flex justify-around my-3">
              <FaHtml5 className="text-3xl text-green-400" />
              <FaCss3 className="text-3xl text-yellow-400" />
              <FaReact className="text-3xl text-blue-400" />
              <FaBootstrap className="text-3xl text-blue-400" />
              <SiTailwindcss className="text-3xl text-blue-500" />
              <IoLogoJavascript className="text-3xl text-yellow-400" />
              <FaNodeJs className="text-3xl text-green-500" />
              <SiExpress className="text-3xl text-green-500" />
              <SiMongodb className="text-3xl text-green-500" />
              <SiMysql className="text-3xl text-white" />
            </div>
            <p className="text-xl font-serif font-thin text-left text-white">
              We offer comprehensive full stack development services, combining
              both front-end and back-end expertise. Utilizing technologies like
              React.js, Node.js, Express, and databases such as MongoDB and SQL,
              we create complete, end-to-end solutions that are seamless,
              efficient, and scalable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
