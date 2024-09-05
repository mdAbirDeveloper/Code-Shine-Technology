/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3); // State to control the number of visible projects
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch function to get projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Set loading to true when starting the fetch
        const response = await fetch("https://code-shine-technology.vercel.app/project");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data.reverse()); // Reverse to display the latest projects first
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchProjects(); // Call the fetch function when the component mounts
  }, []);

  // Handler to show all projects when "Show More" is clicked
  const handleShowMore = () => {
    setVisibleProjects(projects.length); // Show all projects
  };

  // Handler to show only the first 3 projects when "Show Less" is clicked
  const handleShowLess = () => {
    setVisibleProjects(3); // Show only 3 projects
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      {/* Show loading message when data is being fetched */}
      {loading ? (
        <p className="text-center text-lg">Loading projects...</p>
      ) : (
        <>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Display only the number of visible projects */}
            {projects.slice(0, visibleProjects).map((project) => (
              <div
                key={project._id}
                className="group bg-slate-950 hover:shadow-blue-500 shadow-xl rounded-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {projects.length > 3 && (
            <div className="text-center mt-8">
              {visibleProjects < projects.length ? (
                <button
                  onClick={handleShowMore}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                  Show More
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Project;
