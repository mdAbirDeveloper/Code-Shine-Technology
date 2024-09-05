import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../dashboardLayout";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const AddCustomer = () => {
  // React Hook Form setup
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  const fetchCustomer = async () => {
    const response = await fetch("https://code-shine-technology.vercel.app/customer");
    if (!response.ok) {
      throw new Error("Failed to fetch customer");
    }
    return response.json();
  };

  const {
    data: customers,
  } = useQuery({ queryKey: ["customer"], queryFn: fetchCustomer });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    const { image } = data;
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
        name: data.name,
        email: data.email,
        phone: data.phone,
        customerId: data.customerId,
        image: imageUrl,
        uploader: { name: user?.name, email: user?.email },
      };

      const response = await fetch("https://code-shine-technology.vercel.app/AddCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resultData),
      });

      if (!response.ok) {
        setLoading(false)
        setError("something is wrong, data not posted")
      }
      // alert("result uploaded successfully!");
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      setLoading(false)
    } catch (err) {
      setError(err.message);
      setLoading(false)
      console.error("Error uploading result:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        // Delete result from MongoDB
        const response = await fetch(`https://code-shine-technology.vercel.app/customer/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete customer");
        }
        queryClient.invalidateQueries({ queryKey: ["customer"] });
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-green-500"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer name"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer email"
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                {...register("phone", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer phone"
              />
              {errors.phone && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Customer Id</label>
              <input
                type="text"
                {...register("customerId", { required: true })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customerId"
              />
              {errors.customerId && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Customer Image
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="w-full p-2 border rounded-md"
                accept="image/*"
              />
              {errors.image && <span className="text-red-500">This field is required</span>}
            </div>
            <p className="text-red-500">{error}</p>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              {loading ? "customer Addeding...." : "Add customer"}
            </button>
          </form>
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">customer List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full ">
              <thead>
                <tr className=" text-left">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">CustomerId</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {customers?.slice().reverse().map((customer) => (
                  <tr key={customer._id} className="">
                    <td className="px-4 py-2 border">{customer.name}</td>
                    <td className="px-4 py-2 border">{customer.email}</td>
                    <td className="px-4 py-2 border">{customer.phone}</td>
                    <td className="px-4 py-2 border">{customer.customerId}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleDelete(customer._id)}
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

export default AddCustomer;

// Setting the layout for the Messages page
AddCustomer.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
