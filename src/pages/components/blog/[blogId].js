// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable react-hooks/rules-of-hooks */
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const blogDetails = ({}) => {
//   const rounter = useRouter();
//   const { blogId } = rounter.query;
//   console.log(blogId);

//   const [loading, setLoading] = useState(false);
//   const [blogs, setBlogs] = useState();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://code-shine-technology.vercel.app/blog/${blogId}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data = await response.json();
//         setBlogs(data);
//         setLoading(false);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//         // Handle error, show error message, etc.
//       }
//     };

//     if (blogId) {
//       fetchProduct();
//     }
//   }, [blogId]);
//   if (loading) {
//     return (
//       <div className="text-center text-2xl text-green-500 font-serif font-bold my-6 ">
//         <span className="loading loading-spinner text-primary"></span>
//         <span className="loading loading-spinner text-secondary"></span>
//         <span className="loading loading-spinner text-accent"></span>
//         <span className="loading loading-spinner text-neutral"></span>
//         <span className="loading loading-spinner text-info"></span>
//         <span className="loading loading-spinner text-success"></span>
//         <span className="loading loading-spinner text-warning"></span>
//         <span className="loading loading-spinner text-error"></span>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="max-w-[1000px] mx-auto mt-5">
//         <img src={blogs?.image_1} className="md:px-20 px-1" />
//         <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
//           {blogs?.title_1}
//         </h1>
//         <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
//           {blogs?.description_1}
//         </p>
//         <img src={blogs?.image_2} className="md:px-20 px-1" />
//         <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
//           {blogs?.title_2}
//         </h1>
//         <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
//           {blogs?.description_2}
//         </p>
//         <img src={blogs?.image_3} className="md:px-20 px-1" />
//         <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
//           {blogs?.title_3}
//         </h1>
//         <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
//           {blogs?.description_3}
//         </p>
//         <img src={blogs?.image_4} className="md:px-20 px-1" />
//         <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
//           {blogs?.title_4}
//         </h1>
//         <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
//           {blogs?.description_4}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default blogDetails;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";

const blogDetails = () => {
  const router = useRouter();
  const { blogId } = router.query;
  console.log(blogId);

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState();
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://code-shine-technology.vercel.app/blog/${blogId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (blogId) {
      fetchProduct();
    }
  }, [blogId]);

  // Fetch comments
  const { data: comments, refetch } = useQuery({
    queryKey: ["comments", blogId],
    queryFn: async () => {
      const response = await fetch(`https://code-shine-technology.vercel.app/comments/${blogId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      return response.json();
    },
    enabled: !!blogId, // Fetch only when blogId is available
  });

  // Add comment mutation
  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const response = await fetch(`https://code-shine-technology.vercel.app/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }
      return response.json();
    },
    onSuccess: () => {
      refetch(); // Refetch comments after a successful submission
    },
  });

  const handleShowMore = () => {
    setShowAllComments(true);
  };

  const handleShowLess = () => {
    setShowAllComments(false);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const commentData = {
      blogId, // Pass the blogId to identify which blog to post the comment on
      name: data.name,
      email: data.email,
      comment: data.comment,
    };
    mutation.mutate(commentData);
    reset(); // Reset form after submission
  };

  if (loading) {
    return (
      <div className="text-center text-2xl text-green-500 font-serif font-bold my-6 ">
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

  return (
    <div>
      <div className="max-w-[1000px] mx-auto mt-5">
        <img src={blogs?.image_1} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_1}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_1}
        </p>
        <img src={blogs?.image_2} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_2}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_2}
        </p>
        <img src={blogs?.image_3} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_3}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_3}
        </p>
        <img src={blogs?.image_4} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_4}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_4}
        </p>

        {/* Add more sections as needed */}

        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {comments?.length > 0 ? (
            <div>
              {comments
                .slice()
                .reverse()
                .slice(0, showAllComments ? comments?.length : 5) // Display only a subset based on state
                .map((comment) => (
                  <div key={comment._id} className="p-4 border-b">
                    <p className="font-semibold">{comment.name}</p>
                    <p className="text-sm text-gray-600">{comment.email}</p>
                    <p className="mt-2">{comment.comment}</p>
                  </div>
                ))}
              {comments.length > 5 && (
                <button
                  onClick={showAllComments ? handleShowLess : handleShowMore}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  {showAllComments ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 p-4 border rounded-md text-green-500"
        >
          <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
          <div className="mb-4">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <textarea
              {...register("comment", { required: true })}
              placeholder="Comment"
              className="w-full p-2 border rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default blogDetails;
