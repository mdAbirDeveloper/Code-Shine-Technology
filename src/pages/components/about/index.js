import React from "react";
import Head from "next/head"; // Import Head for Next.js

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Code Shine Technology</title>
        <meta name="description" content="Learn more about Code Shine Technology, our mission, expertise, and why you should choose us for your web development needs. Discover our commitment to delivering innovative and high-quality solutions." />
        <meta name="keywords" content="web development, front-end development, back-end development, full stack development, Code Shine Technology" />
        <meta property="og:title" content="About Us | Code Shine Technology" />
        <meta property="og:description" content="Learn more about Code Shine Technology, our mission, expertise, and why you should choose us for your web development needs." />
        <meta property="og:image" content="URL_TO_AN_IMAGE" />
        <meta property="og:url" content="https://codeShineTechnology.com/components/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="">
        <div className="max-w-[1500px] mx-auto shadow-lg ">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
              About Us
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              Welcome to{" "}
              <span className="font-semibold text-blue-600">Code Shine Technology</span>!
            </p>

            <p className="text-lg leading-relaxed mb-6">
              At <span className="font-semibold text-blue-600">Code Shine Technology</span>, we
              are passionate about turning ideas into reality through innovative
              web development solutions. With a team of skilled professionals, we
              specialize in creating visually stunning, user-friendly, and highly
              functional websites that drive success for our clients.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our mission is to empower businesses by providing cutting-edge web
              development services that enhance their online presence and help
              them achieve their goals. We believe in the power of technology to
              transform and elevate brands, making them stand out in a competitive
              market.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">Our Expertise</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
              <li>
                <span className="font-semibold text-blue-600">Front-End Development:</span>{" "}
                Crafting visually stunning and responsive interfaces using HTML,
                CSS, JavaScript, React.js, Next.js, Bootstrap, Tailwind CSS, and various CSS libraries.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Back-End Development:</span>{" "}
                Building robust and scalable solutions with Node.js, Express, and
                databases like MongoDB and SQL.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Full Stack Development:</span>{" "}
                Delivering complete end-to-end solutions by combining
                front-end and back-end expertise.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
              <li>
                <span className="font-semibold text-blue-600">Expert Team:</span> Our team
                consists of experienced developers, designers, and strategists
                dedicated to delivering the best results.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Innovative Solutions:</span> We
                stay updated with the latest technologies and trends to provide
                innovative and effective solutions.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Client-Centric Approach:</span> We
                prioritize our clients needs and work closely with them to ensure
                their vision is realized.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Quality Assurance:</span> We are
                committed to maintaining the highest standards of quality in every
                project we undertake.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">
              Join Us on Our Journey
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We are excited to collaborate with you and bring your vision to
              life. Whether you are a startup, a small business, or an established
              enterprise, we have the expertise and passion to help you succeed.
            </p>

            <p className="text-lg leading-relaxed">
              Thank you for choosing{" "}
              <span className="font-semibold text-blue-600">Code Shine Technology</span>. Let’s
              build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
