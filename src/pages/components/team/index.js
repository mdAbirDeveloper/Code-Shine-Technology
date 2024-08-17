/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

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
      <div className="flex">
        <img
          className="rounded-full w-24 md:ml-14 mr-10 hover:shadow-xl"
          src={img}
          alt={`${name} profile`}
        />
        <div>
          <h2 className="text-2xl font-serif mt-5">{name}</h2>
          <p>{title}</p>
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
      title: "A full_stack web Developer",
      bio: `As a full stack web developer, Shah Jalal is a versatile and highly skilled professional with a comprehensive understanding of both front end and back end technologies. With expertise in languages such as JavaScript (including frameworks like React, Angular, and Vue.js), HTML, CSS, Node.js, Python, Java, and PHP, Shah Jalal excels in building dynamic, responsive, and user-friendly web applications. Their proficiency in working with various databases, including SQL and NoSQL, ensures efficient data storage and retrieval. Shah Jalal is dedicated to optimizing performance, implementing best practices for security and reliability, and ensuring seamless integration between the client-side and server-side components. By collaborating closely with designers, front end developers, back end developers, and other team members, Shah Jalal plays a pivotal role in delivering comprehensive web solutions that meet the needs of users and stakeholders alike. Their ability to navigate and bridge the gap between front end and back end development makes them an invaluable asset to any development team. ---`
    },
    {
      img: 'member-1.png',
      name: "Siam",
      title: "A Front_end web Developer",
      bio: `As a front end web developer, Siam is a creative and detail-oriented professional with a passion for crafting visually stunning and user-friendly websites. With expertise in HTML, CSS, and JavaScript, Siam brings a keen eye for design and a commitment to delivering high-quality, responsive web experiences. Their dedication to staying current with the latest trends and technologies in front end development ensures that every project they work on is not only functional but also aesthetically pleasing. Collaborating with [Your Name] and the rest of the team, Siam plays a crucial role in bringing your web projects to life.`
    },
    {
      img: 'review-1.png',
      name: "Mohammad Ali",
      title: "A back_end web Developer",
      bio: `As a back end web developer, Mohammad Ali is a highly skilled and analytical professional with a deep understanding of server-side technologies and database management. With expertise in languages such as Node.js, Python, Java, and PHP, Mohammad Ali excels in building robust, scalable, and secure server-side applications. Their proficiency in working with various databases, including SQL and NoSQL, ensures efficient data storage and retrieval. Mohammad Ali is dedicated to optimizing performance and implementing best practices for security and reliability. By collaborating closely with front end developers and other team members, Mohammad Ali plays a pivotal role in delivering seamless and efficient web solutions that meet the needs of users and stakeholders alike. ---`
    },
  ];

  return (
    <div>
      <div className="max-w-[1500px] mx-auto shadow-md mt-20 p-5">
        <h1 className="uppercase font-bold font-serif md:text-4xl text-3xl text-blue-500 text-center py-6">
          Our experiences team
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
  );
};

export default Team;
