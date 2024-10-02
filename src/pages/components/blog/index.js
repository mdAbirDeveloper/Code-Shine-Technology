/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReviewText from "../../../../utils";
import Link from "next/link";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://code-shine-technology.vercel.app/blog"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-6 text-center text-4xl font-sans uppercase">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 text-center text-4xl font-sans uppercase">
        Error: {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="mt-6 text-center text-4xl font-sans uppercase">
        There are no blogs here
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto mt-6">
        {data?.map((blog) => (
          <div
            key={blog._id}
            className="bg-slate-950 hover:shadow-blue-500 shadow-xl rounded-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl flex flex-col"
          >
            <figure className="px-5 pt-5">
              <img
                src={blog.image_1}
                alt={blog.title_1}
                className="rounded object-cover w-full h-[200px] lg:h-[250px]"
              />
            </figure>
            <div className="card-body flex flex-col flex-grow px-5 py-4">
              <h2 className="card-title mb-auto text-md font-serif text-white">
                {blog.title_1}
              </h2>
              <ReviewText review={blog.description_1} wordLimit={40} />
              <div className=" mt-auto">
                <Link href={`/components/blog/${blog._id}`}>
                  <button className="btn rounded bg-green-500 shadow text-white w-full">
                    Continue Reading
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
