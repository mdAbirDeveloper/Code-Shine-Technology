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
    <div className="shadow p-5 hover:shadow-blue-500 hover:shadow-2xl">
      <div className="flex items-center">
        <img
          className="rounded-full w-24 md:ml-14 mr-10 hover:shadow-xl"
          src={img}
          alt={`${name} - ${title}`}
        />
        <div>
          <h2 className="text-2xl font-serif mt-5">{name}</h2>
          <p className="text-lg">{title}</p>
        </div>
      </div>
      <p>
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
      img: 'profile-pic.png',
      name: "Shah Jalal",
      title: "Full-Stack Web Developer",
      bio: `As a full-stack web developer, Shah Jalal is a versatile and highly skilled professional with a comprehensive understanding of both front-end and back-end technologies. With expertise in JavaScript frameworks (React, Angular, Vue.js), HTML, CSS, Node.js, Python, Java, and PHP, Shah Jalal excels in building dynamic, responsive, and user-friendly web applications. Their proficiency in working with databases (SQL and NoSQL) ensures efficient data storage and retrieval. Shah Jalal is dedicated to optimizing performance, implementing best practices for security and reliability, and ensuring seamless integration between client-side and server-side components. They collaborate closely with designers, front-end developers, back-end developers, and other team members to deliver comprehensive web solutions that meet user and stakeholder needs.`
    },
    {
      img: 'member-1.png',
      name: "Siam",
      title: "Front-End Web Developer",
      bio: `As a front-end web developer, Siam is a creative and detail-oriented professional with a passion for crafting visually stunning and user-friendly websites. With expertise in HTML, CSS, and JavaScript, Siam brings a keen eye for design and a commitment to delivering high-quality, responsive web experiences. Their dedication to staying current with the latest trends and technologies in front-end development ensures that every project is functional and aesthetically pleasing. Collaborating with the rest of the team, Siam plays a crucial role in bringing web projects to life.`
    },
    {
      img: 'review-1.png',
      name: "Mohammad Ali",
      title: "Back-End Web Developer",
      bio: `As a back-end web developer, Mohammad Ali is a highly skilled and analytical professional with a deep understanding of server-side technologies and database management. With expertise in Node.js, Python, Java, and PHP, Mohammad Ali excels in building robust, scalable, and secure server-side applications. Their proficiency with databases (SQL and NoSQL) ensures efficient data storage and retrieval. Mohammad Ali is dedicated to optimizing performance and implementing best practices for security and reliability. By collaborating with front-end developers and other team members, Mohammad Ali plays a pivotal role in delivering seamless and efficient web solutions that meet user and stakeholder needs.`
    },
  ];

  return (
    <>
      <Head>
        <title>Meet Our Team | Code Shine Technology</title>
        <meta name="description" content="Meet the experienced team behind Code Shine Technology. Learn about our full-stack, front-end, and back-end web developers and their roles in delivering exceptional web solutions." />
        <meta name="keywords" content="web development team, full-stack developer, front-end developer, back-end developer, Code Shine Technology" />
        <meta property="og:title" content="Meet Our Team | Code Shine Technology" />
        <meta property="og:description" content="Meet the experienced team behind Code Shine Technology. Discover the roles and expertise of our full-stack, front-end, and back-end developers." />
        <meta property="og:image" content="URL_TO_AN_IMAGE" />
        <meta property="og:url" content="https://codeShineTechnology.com/components/team" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="bg-gray-100">
        <div className="max-w-[1500px] mx-auto shadow-md mt-20 p-5">
          <h1 className="uppercase font-bold font-serif md:text-4xl text-3xl text-blue-500 text-center py-6">
            Our Experienced Team
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 justify-center">
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
