/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import DashboardLayout from "../../dashboardLayout";

// Function to fetch reviews from the backend
const fetchReviews = async () => {
  const response = await fetch("https://code-shine-technology.vercel.app/reviews");
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return response.json();
};

// Function to delete a review by ID
const deleteReview = async (id) => {
  const response = await fetch(`https://code-shine-technology.vercel.app/reviews/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete the review");
  }
  return response.json();
};

const AllReview = () => {
  const queryClient = useQueryClient();

  // Fetch reviews using React Query
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  // Mutation for deleting a review
  const { mutate: deleteReviewMutation } = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      // Invalidate and refetch reviews to update the UI automatically
      queryClient.invalidateQueries(["reviews"]);
    },
    onError: (error) => {
      console.error("Error deleting review:", error.message);
    },
  });

  // Function to handle review deletion
  const handleDelete = (id) => {
    deleteReviewMutation(id);
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Render reviews with delete button
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">All Reviews</h2>
      <div className="grid gap-4">
        {reviews?.slice().reverse().map((review) => (
          <div
            key={review._id}
            className="p-4 rounded-md shadow-md hover:shadow-lg transition shadow-blue-400"
          >
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img
                  className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md"
                  src={review.customerImage}
                  alt={`Profile picture of ${review.customerName}`}
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold ">
                    {review.customerName}
                  </h2>
                  <p className="text-sm ">{review.customerEmail}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(review._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
            <p className="mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;


AllReview.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}