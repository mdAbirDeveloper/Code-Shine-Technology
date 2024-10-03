/* eslint-disable @next/next/no-img-element */
import { FaPhone, FaWhatsapp, FaEnvelope, FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaTwitter, FaCpanel } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiFiverr, SiHostinger, SiMongoose, SiNetlify, SiRedux, SiUpwork } from 'react-icons/si';

export default function Profile() {
  return (
    <div className="p-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8">

        {/* Left Section (Profile) */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center md:mb-0 mb-5">
          <div className="w-32 h-32 mb-4 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <img src="/profile-pic.jpg" alt="Shah Jalal" className="rounded-full w-full h-full object-cover" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-black">Shah Jalal</h2>
          <p className="text-gray-500">Full Stack Developer & Designer</p>
          <p className="mt-2 text-gray-700 text-center">
            Having <strong>4 years</strong> of experience in 20+ technologies.
          </p>
          <div className="mt-4 flex w-full justify-around">
            <a href="tel:+8801832822560" className="text-purple-600 p-3 md:p-4 border rounded-lg w-full mr-1 hover:bg-cyan-300">
              <FaPhone size={20} className='mx-auto' />
            </a>
            <a href="https://wa.me/8801832822560" className="text-green-600 p-3 md:p-4 border rounded-lg w-full mr-1 hover:bg-cyan-300">
              <FaWhatsapp size={20} className='mx-auto' />
            </a>
            <a href="mailto:shahjalal.profession@gmail.com" className="text-blue-600 p-3 md:p-4 border rounded-lg w-full mr-1 hover:bg-cyan-300">
              <FaEnvelope size={20} className='mx-auto' />
            </a>
          </div>
          <div className="flex mt-6 md:mt-8 space-x-6 md:space-x-4">
            <a href="https://github.com/mdAbirDeveloper" className="text-black">
              <FaGithub size={24} />
            </a>
            <a href="https://www.fiverr.com/shah_jalal_web" className="text-green-500">
              <SiFiverr size={24} />
            </a>
            <a href="https://www.upwork.com/freelancers/~01da9284068e6bfcca" className="text-green-500">
              <SiUpwork size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shah-jalal-programmer/" className="text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/SahjalalWeb" className="text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Right Section (Services) */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold">Services</h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Transforming Ideas into Innovative Reality. Elevate your vision with our expert Product Design and Development Services.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center text-black">
              <div className="p-4 border mb-2">
                <img className="h-16 md:h-20" src="/web.png" alt="Web Development" />
              </div>
              <p className="text-sm md:text-base">Web Development</p>
            </div>
            <div className="text-center text-black">
              <div className="p-4 border mb-2">
                <img className="h-16 md:h-20" src="/design.jpg" alt="UI/UX Design" />
              </div>
              <p className="text-sm md:text-base">UI/UX Design</p>
            </div>
            <div className="text-center text-black">
              <div className="p-4 border mb-2">
                <img className="h-16 md:h-20" src="/responsive.jpg" alt="Responsive" />
              </div>
              <p className="text-sm md:text-base">Responsive</p>
            </div>
            <div className="text-center text-black">
              <div className="p-4 border mb-2">
                <img className="h-16 md:h-20" src="/hosting.jpg" alt="Website Hosting" />
              </div>
              <p className="text-sm md:text-base">Hosting</p>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mt-8 md:mt-10 text-black">Worked in 20+ Technologies</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-black text-lg md:text-xl">
            <button className='p-4 rounded border'><FaHtml5 className="text-red-400" /></button>
            <button className='p-4 rounded border'><FaCss3 className="text-red-400" /></button>
            <button className='p-4 rounded border'><RiTailwindCssFill className="text-blue-400" /></button>
            <button className='p-4 rounded border'><FaBootstrap className="text-blue-800" /></button>
            <button className='p-4 rounded border'><IoLogoJavascript className="text-yellow-400" /></button>
            <button className='p-4 rounded border'><FaReact className="text-blue-400" /></button>
            <button className='p-4 rounded border'><FaNodeJs className="text-green-400" /></button>
            <button className='p-4 rounded border'><SiExpress className="text-green-400" /></button>
            <button className='p-4 rounded border'><SiRedux className="text-red-400" /></button>
            <button className='p-4 rounded border'><DiMongodb className="text-green-400" /></button>
            <button className='p-4 rounded border'><SiMongoose className="text-green-400" /></button>
            <button className='p-4 rounded border'><IoLogoFirebase className="text-yellow-400" /></button>
            <button className='p-4 rounded border'><SiHostinger className="text-blue-400" /></button>
            <button className='p-4 rounded border'><FaCpanel className="text-black" /></button>
            <button className='p-4 rounded border'><FaGithub className="text-slate-800" /></button>
            <button className='p-4 rounded border'><SiNetlify className="text-cyan-400" /></button>
            <button className='p-4 rounded border'><IoLogoVercel className="text-black" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
