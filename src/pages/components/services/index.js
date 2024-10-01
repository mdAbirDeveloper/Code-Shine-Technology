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
        <title>Our Services | Code Shine Technology</title>
        <meta
          name="description"
          content="Discover the range of services offered by Code Shine Technology. From web development and design to digital solutions, learn how we can help your business succeed."
        />
        <meta
          name="keywords"
          content="services, web development, design, digital solutions, Code Shine Technology, business solutions"
        />
        <meta
          property="og:title"
          content="Our Services | Code Shine Technology"
        />
        <meta
          property="og:description"
          content="Explore the services provided by Code Shine Technology. Find out how our expertise in web development, design, and digital solutions can benefit your business."
        />
        <meta
          property="og:image"
          content="https://codeshinetechnology.com/codeshinetechnology.png"
        />
        <meta
          property="og:url"
          content="https://codeshinetechnology.com/components/services"
        />
        <meta property="og:site_name" content="Code Shine Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code Shine Technology" />
      </Head>

      <div className="max-w-[1500px] mx-auto">
        <h1 className="text-center text-5xl font-serif font-bold uppercase text-white my-10">
          our services
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-4 py-10 text-center  transition-transform transform hover:-translate-y-2">
            <h2 className="text-3xl font-serif font-bold uppercase text-blue-400">
              Front end<br></br>
              <span className="text-3xl font-serif font-bold uppercase text-lime-400">
                web development
              </span>
            </h2>
            <div className="flex justify-around my-3 mb-6">
              <FaHtml5 className="text-3xl text-red-500" />
              <FaCss3 className="text-3xl text-blue-500" />
              <FaReact className="text-3xl text-blue-400" />
              <IoLogoJavascript className="text-3xl text-yellow-400" />
              <FaBootstrap className="text-3xl text-purple-500" />
              <SiTailwindcss className="text-3xl text-teal-500" />
            </div>
            <p className="text-xl font-serif font-thin text-left mt-5 text-white">
              We craft visually stunning, responsive, and interactive interfaces
              using HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, Tailwind CSS, and
              various CSS libraries. Our focus is on delivering seamless user
              experiences with top-notch design and functionality.
            </p>
          </div>

          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-4 py-10 text-center transition-transform transform hover:-translate-y-2">
            <h2 className="text-3xl font-serif font-bold uppercase text-blue-400">
              Back end<br></br>
              <span className="text-3xl font-serif font-bold uppercase text-lime-400">
                web development
              </span>
            </h2>
            <div className="flex justify-around my-3">
              <IoLogoJavascript className="text-3xl text-yellow-400" />
              <FaNodeJs className="text-3xl text-green-400" />
              <SiExpress className="text-3xl text-green-400" />
              <SiMongodb className="text-3xl text-green-400" />
              <SiMysql className="text-3xl text-white" />
            </div>
            <p className="text-xl font-serif font-thin text-left text-white">
              We specialize in robust and scalable back-end solutions using
              Node.js, Express, and various databases like MongoDB and SQL. Our
              services ensure your applications run smoothly, handle data
              efficiently, and provide secure, reliable performance.
            </p>
          </div>

          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-4 py-10 text-center  transition-transform transform hover:-translate-y-2">
            <h2 className="text-3xl font-serif font-bold uppercase text-blue-400">
              Full Stack<br></br>
              <span className="text-3xl font-serif font-bold uppercase text-lime-400">
                web development
              </span>
            </h2>
            <div className="flex justify-around my-3">
              <FaHtml5 className="text-3xl text-red-500" />
              <FaCss3 className="text-3xl text-blue-500" />
              <FaReact className="text-3xl text-blue-400" />
              <FaBootstrap className="text-3xl text-purple-500" />
              <SiTailwindcss className="text-3xl text-teal-500" />
              <IoLogoJavascript className="text-3xl text-yellow-400" />
              <FaNodeJs className="text-3xl text-green-400" />
              <SiExpress className="text-3xl text-green-400" />
              <SiMongodb className="text-3xl text-green-400" />
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
