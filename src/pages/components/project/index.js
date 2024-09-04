/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head"; // Import Head for Next.js
import { FaGithub } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";

const Project = () => {
  return (
    <>
      <Head>
        <title>My Recent Projects | Code Shine Technology</title>
        <meta name="description" content="Explore the most recent projects by Code Shine Technology. Discover responsive websites built with Next.js, React.js, and Tailwind CSS. See our work in action and learn more about our capabilities." />
        <meta name="keywords" content="web development projects, Next.js, React.js, Tailwind CSS, responsive design, Code Shine Technology" />
        <meta property="og:title" content="My Recent Projects | Code Shine Technology" />
        <meta property="og:description" content="Explore the most recent projects by Code Shine Technology, including responsive websites built with Next.js, React.js, and Tailwind CSS." />
        <meta property="og:image" content="/project_1.png" />
        <meta property="og:url" content="https://codeShineTechnology.com/components/project" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="">
        <div className="max-w-[1500px] mx-auto min-h-screen shadow-md mt-0">
          <h1 className="text-center md:pb-10 pb-2 md:pt-20 pt-4 md:text-5xl text-2xl text-green-500 font-serif font-bold uppercase">
            Most Recent Projects
          </h1>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between md:px-20 py-2">
              <div>
                <div className="shadow-md p-5 pb-0">
                  <div className="w-full h-96 overflow-hidden md:overflow-y-scroll shadow-md shadow-blue-400 hover:shadow-2xl hover:shadow-blue-800">
                    <img
                      src="/project_2.png"
                      alt="Responsive Portfolio website built with Next.js and Tailwind CSS"
                      className=""
                    />
                  </div>
                  <div className="bg-green-400">
                    <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                      <TypeAnimation
                        sequence={[
                          "Responsive Portfolio website with Next.js and Tailwind CSS",
                          1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold italic"
                      />
                    </h1>
                    <div className="flex justify-center w-44 mx-auto border border-green-500 shadow-sm py-1 rounded">
                      <a href="https://github.com/your-repo-link">
                        <FaGithub className="text-4xl mr-5 bg-white text-black rounded-full" />
                      </a>
                      <a href="https://shahjalal-web.netlify.app/">
                        <LiaLaptopCodeSolid className="text-4xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="shadow-md p-5 pb-0">
                  <div className="w-full h-96 overflow-hidden md:overflow-y-scroll shadow-md shadow-blue-400 hover:shadow-2xl hover:shadow-blue-800">
                    <img
                      src="/project_3.png"
                      alt="Responsive Parlour website built with React.js and Tailwind CSS"
                      className=""
                    />
                  </div>
                  <div className="bg-green-400">
                    <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                      <TypeAnimation
                        sequence={[
                          "Responsive Parlour website with React.js and Tailwind CSS",
                          1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold italic"
                      />
                    </h1>
                    <div className="flex justify-center w-44 mx-auto border border-green-500 shadow-sm py-1 rounded">
                      <a href="https://github.com/mdAbirDeveloper/perlour">
                        <FaGithub className="text-4xl mr-5 bg-white text-black rounded-full" />
                      </a>
                      <a href="https://jerin-s-parlour-e93df.web.app/">
                        <LiaLaptopCodeSolid className="text-4xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="shadow-md p-5 pb-0">
                  <div className="w-full h-96 overflow-hidden md:overflow-y-scroll shadow-md shadow-blue-400 hover:shadow-2xl hover:shadow-blue-800">
                    <img
                      src="/project_4.png"
                      alt="Full-Stack Doctors portal website built with React.js and Tailwind CSS"
                      className=""
                    />
                  </div>
                  <div className="bg-green-400">
                    <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                      <TypeAnimation
                        sequence={[
                          "Full-Stack Doctors portal website with React.js and Tailwind CSS",
                          1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold italic"
                      />
                    </h1>
                    <div className="flex justify-center w-44 mx-auto border border-green-500 shadow-sm py-1 rounded">
                      <a href="https://github.com/mdAbirDeveloper/doctors-portal">
                        <FaGithub className="text-4xl mr-5 bg-white text-black rounded-full" />
                      </a>
                      <a href="https://doctors-portal-7e5df.web.app/">
                        <LiaLaptopCodeSolid className="text-4xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="shadow-md p-5 pb-0">
                  <div className="w-full h-96 overflow-hidden md:overflow-y-scroll shadow-md shadow-blue-400 hover:shadow-2xl hover:shadow-blue-800">
                    <img
                      src="/project_1.png"
                      alt="Full-Stack Arabic website built with Next.js and Tailwind CSS"
                      className=""
                    />
                  </div>
                  <div className="bg-green-400">
                    <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                      <TypeAnimation
                        sequence={[
                          "Full-Stack Arabic website with Next.js and Tailwind CSS",
                          1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold italic"
                      />
                    </h1>
                    <div className="flex justify-center w-44 mx-auto border border-green-500 shadow-sm py-1 rounded">
                      <a href="https://github.com/mdAbirDeveloper/usama-mir-front-end-again">
                        <FaGithub className="text-4xl mr-5 bg-white rounded-full" />
                      </a>
                      <a href="https://csc-fron-end.vercel.app/">
                        <LiaLaptopCodeSolid className="text-4xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
