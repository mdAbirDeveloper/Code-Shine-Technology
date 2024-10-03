/* eslint-disable @next/next/no-img-element */
import React from 'react';

const FocusPage = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto p-6 mt-16">
          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-cyan-300">Our Main Focus On</h1>
            <p className="mt-4 text-lg text-cyan-300 font-serif md:w-3/4 w-full mx-auto">
              A good website design is one that effectively meets the needs of its target audience, facilitates easy navigation and interaction, and aligns with the goals of the website owner or organization.
            </p>
          </div>

          {/* Focus Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speed */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src="/gif (1).gif"
                alt="Speed"
                className="w-16 h-16 mb-4 opacity-100 transition duration-500 hover:opacity-80"
              />
              <h3 className="text-xl font-semibold text-black">Speed</h3>
              <p className="text-gray-600 mt-2">
                Site <span className="font-bold">speed</span> is so <span className="font-bold">important</span> as it plays a direct <span className="font-bold">role</span> in user experience.
              </p>
            </div>

            {/* Security */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src="/gif (2).gif"
                alt="Security"
                className="w-16 h-16 mb-4 opacity-100 transition duration-500 hover:opacity-80"
              />
              <h3 className="text-xl font-semibold text-black">Security</h3>
              <p className="text-gray-600 mt-2">
                <span className="font-bold">Security</span> is important to keep hackers from accessing <span className="font-bold">sensitive information</span>.
              </p>
            </div>

            {/* Simplified Layout */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src="/gif (4).gif"
                alt="Simplified Layout"
                className="w-16 h-16 mb-4 opacity-100 transition duration-500 hover:opacity-80"
              />
              <h3 className="text-xl font-semibold text-black">Simplified Layout</h3>
              <p className="text-gray-600 mt-2">
                A <span className="font-bold">clean layout</span> will give the site’s visitors easy access to <span className="font-bold">valuable information</span>.
              </p>
            </div>

            {/* SEO Optimization */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src="/gif (3).gif"
                alt="SEO Optimization"
                className="w-16 h-16 mb-4 opacity-100 transition duration-500 hover:opacity-80"
              />
              <h3 className="text-xl font-semibold text-black">SEO Optimization</h3>
              <p className="text-gray-600 mt-2">
                <span className="font-bold">Search Engine Optimization</span> will help you <span className="font-bold">find your website</span> on Google easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default FocusPage;