/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head"; // Import Head for Next.js

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const TeamMember = ({ name, title, bio, img }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="shadow-lg shadow-blue-400 p-5 hover:shadow-blue-500 hover:shadow-2xl transition-transform transform hover:-translate-y-2 rounded-lg">
      <div className="flex">
        <img
          className="rounded-full left-0 w-24 h-24"
          src={img}
          alt={`${name} - ${title}`}
        />
        <div className="ml-4">
          <h2 className="text-xl font-serif mt-5 md:mt-5">{name}</h2>
          <p className="text-gray-100">{title}</p>
        </div>
      </div>
      <p className="text-justify mt-4 text-gray-100">
        {isExpanded ? bio : truncateText(bio, 40)}
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 cursor-pointer ml-2"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </span>
      </p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      img: "profile-pic.jpg",
      name: "Shah Jalal",
      title: "Full-Stack Web Developer",
      bio: `Shah Jalal, CEO of Code Shine Technology, leads the agency with expertise in full-stack web development. Proficient in React.js, Next.js, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, he builds responsive, secure, and scalable web applications. Shah Jalal also excels in managing deployments with Vercel, Netlify, and GitHub, ensuring seamless hosting setups and efficient workflows. His leadership drives the delivery of innovative web solutions tailored to client needs.`,
    },
    {
      img: "member-1.png",
      name: "Siam",
      title: "Front-End Web Developer",
      bio: `As a front-end web developer, Siam is a creative and detail-oriented professional with a passion for crafting visually stunning and user-friendly websites. With expertise in HTML, CSS, and JavaScript, Siam brings a keen eye for design and a commitment to delivering high-quality, responsive web experiences. Their dedication to staying current with the latest trends and technologies in front-end development ensures that every project is functional and aesthetically pleasing.`,
    },
    {
      img: "logo.jpg",
      name: "Mohammad Ali",
      title: "Back-End Web Developer",
      bio: `As a back-end web developer, Mohammad Ali is a highly skilled and analytical professional with a deep understanding of server-side technologies and database management. With expertise in Node.js, Python, Java, and PHP, Mohammad Ali excels in building robust, scalable, and secure server-side applications. Their proficiency with databases (SQL and NoSQL) ensures efficient data storage and retrieval.`,
    },
    {
      img: "taspia.png",
      name: "Taspia",
      title: "Front-End Developer",
      bio: `Taspia is a talented front-end developer at Code Shine Technology, specializing in building intuitive and visually engaging user interfaces. With expertise in React.js, Next.js, Redux, and Tailwind CSS, Taspia creates responsive and dynamic web applications that deliver seamless user experiences.`,
    },
    {
      img: "habiba.jpg",
      name: "Umme Habiba",
      title: "Front-End Developer",
      bio: `Umme Habiba is a skilled front-end developer at Code Shine Technology, focused on creating visually appealing and responsive web interfaces. With expertise in React.js, Next.js, Redux, and Tailwind CSS, she delivers smooth, intuitive user experiences across devices. Umme’s attention to detail ensures that each project not only looks great but functions flawlessly.`,
    },
    {
      img: "bahar.png",
      name: "Bahar",
      title: "Graphics Designer & Video Editor",
      bio: `Bahar is a creative graphics designer and video editor at Code Shine Technology, known for crafting visually stunning designs and engaging multimedia content. With expertise in branding, digital illustrations, and motion graphics, Bahar brings concepts to life through compelling visuals and storytelling.`,
    },
  ];

  return (
    <>
      <Head>
        <title>Meet Our Team | Code Shine Technology</title>
        <meta
          name="description"
          content="Meet the talented team behind Code Shine Technology. Learn about our experts in web development, design, and digital solutions who are dedicated to delivering exceptional results."
        />
        <meta
          name="keywords"
          content="team, web development team, design experts, Code Shine Technology, meet our team, digital solutions"
        />
        <meta
          property="og:title"
          content="Meet Our Team | Code Shine Technology"
        />
        <meta
          property="og:description"
          content="Get to know the team at Code Shine Technology. Discover the professionals behind our web development and design services, and see how their expertise drives our success."
        />
        <meta
          property="og:image"
          content="https://codeshinetechnology.com/codeshinetechnology.png"
        />
        <meta
          property="og:url"
          content="https://codeshinetechnology.com/components/team"
        />
        <meta property="og:site_name" content="Code Shine Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code Shine Technology" />
      </Head>

      <div className="px-4 md:px-10 lg:px-20">
        <div className="max-w-[1500px] mx-auto shadow-md mt-20 p-5">
          <h1 className="uppercase font-bold font-serif md:text-4xl text-3xl text-blue-500 text-center py-6">
            Our Experienced Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                img={member.img}
                name={member.name}
                title={member.title}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
