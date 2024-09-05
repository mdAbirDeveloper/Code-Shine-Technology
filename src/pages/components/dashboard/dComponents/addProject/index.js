import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../dashboardLayout";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

const IMGBB_API_KEY = "Yd1fbaa0b9f043f285b08e6d997b387ef";

const AddProject = () => {
  // React Hook Form setup
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [eror, setError] = useState("");
  const [user, setUser] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  const fetchProject = async () => {
    const response = await fetch("https://code-shine-technology.vercel.app/project");
    if (!response.ok) {
      throw new Error("Failed to fetch Result");
    }
    return response.json();
  };

  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({ queryKey: ["project"], queryFn: fetchProject });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    const { heading, image } = data;
    const imageFile = image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const imgbbApiKey = "d1fbaa0b9f043f285b08e6d997b387ef"; // Replace with your API key
      const imgbbResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgbbData = await imgbbResponse.json();
      //console.log(imgbbData);

      if (!imgbbResponse.ok || !imgbbData.success) {
        throw new Error("Failed to upload image to imgbb");
      }

      const imageUrl = imgbbData.data.url;

      const resultData = {
        title: data.title,
        website: data.website,
        github: data.github,
        image: imageUrl,
        uploader: { name: user?.name, email: user?.email },
      };

      const response = await fetch("https://code-shine-technology.vercel.app/addProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resultData),
      });

      if (!response.ok) {
        throw new Error("Failed to save result in MongoDB");
      }
      // alert("result uploaded successfully!");
      queryClient.invalidateQueries({ queryKey: ["project"] });
    } catch (err) {
      setError(err.message);
      console.error("Error uploading result:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        // Delete result from MongoDB
        const response = await fetch(
          `https://code-shine-technology.vercel.app/projects/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete result");
        }
        queryClient.invalidateQueries({ queryKey: ["project"] });
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (!user || user?.email !== "MDSAHJALAL9778@GMAIL.COM") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-red-500">
            Access Denied
          </h1>
          <p className="text-lg text-gray-700">
            You do not have permission to view this page. Please contact the
            administrator if you believe this is an error.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="max-w-lg mx-auto p-6 bg-slate-900 mt-5 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-green-500">
            <div>
              <label className="block text-sm font-medium mb-1">
                Project Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                GitHub Link
              </label>
              <input
                type="url"
                {...register("github", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter GitHub link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Website Link
              </label>
              <input
                type="url"
                {...register("website", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter website link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Project Image
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="w-full p-2 border rounded-md"
                accept="image/*"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              {isLoading ? "Project Addeding...." : "Add Project"}
            </button>
          </form>
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">Projects List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full ">
              <thead>
                <tr className=" text-left">
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Website</th>
                  <th className="px-4 py-2 border">GitHub</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects?.map((project) => (
                  <tr key={project._id} className="">
                    <td className="px-4 py-2 border">{project.title}</td>
                    <td className="px-4 py-2 border">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {project.website}
                      </a>
                    </td>
                    <td className="px-4 py-2 border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {project.github}
                      </a>
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

// Setting the layout for the Messages page
AddProject.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
