/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";

const Project = () => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto min-h-screen shadow-md mt-0">
        <h1 className="text-center md:pb-10 pb-2 md:pt-20 pt-4 md:text-5xl text-2xl text-green-800 font-serif font-bold uppercase">
          most recent projects
        </h1>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between md:px-20 py-2">
            <div>
              <div className="shadow-md p-5 pb-0">
                <div className="w-full h-96 overflow-hidden md:overflow-y-scroll shadow-md shadow-blue-400 hover:shadow-2xl hover:shadow-blue-800">
                  <img className="" src="/project_2.png"></img>
                </div>
                <div className="bg-green-400">
                  <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                    {/* Responsive website with Next.js and Tailwind CSS */}
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
                    <a href="">
                      <FaGithub className="text-4xl mr-5 bg-white rounded-full" />
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
                  <img className="" src="/project_3.png"></img>
                </div>
                <div className="bg-green-400">
                  <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                    {/* Responsive website with Next.js and Tailwind CSS */}
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
                      <FaGithub className="text-4xl mr-5 bg-white rounded-full" />
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
                  <img className="" src="/project_4.png"></img>
                </div>
                <div className="bg-green-400">
                  <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                    {/* Responsive website with Next.js and Tailwind CSS */}
                    <TypeAnimation
                      sequence={[
                        "Full-Stck Doctors portal website with React.js and Tailwind CSS",
                        1000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                      className="font-bold italic"
                    />
                  </h1>
                  <div className="flex justify-center w-44 mx-auto border border-green-500 shadow-sm py-1 rounded">
                    <a href="https://github.com/mdAbirDeveloper/doctors-portal">
                      <FaGithub className="text-4xl mr-5 bg-white rounded-full" />
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
                  <img className="" src="/project_1.png"></img>
                </div>
                <div className="bg-green-400">
                  <h1 className="text-center font-serif font-bold text-2xl text-white pt-2 md:h-20">
                    {/* Responsive website with Next.js and Tailwind CSS */}
                    <TypeAnimation
                      sequence={[
                        "Full-Stack arabic website with Next.js and Tailwind CSS",
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
  );
};

export default Project;
