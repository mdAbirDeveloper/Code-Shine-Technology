// // Signup.js
// import React from "react";
// import { useForm } from "react-hook-form";

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("https://code-shine-technology.vercel.app/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         alert("Signup successful!");
//       } else {
//         alert("Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         className="bg-white p-6 rounded shadow-md w-full max-w-md"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <h2 className="text-2xl font-bold mb-4">Signup</h2>

//         {/* Name Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             {...register("name", { required: "Name is required" })}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             placeholder="Enter your name"
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">{errors.name.message}</span>
//           )}
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: "Invalid email address",
//               },
//             })}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             placeholder="Enter your email"
//           />
//           {errors.email && (
//             <span className="text-red-500 text-sm">{errors.email.message}</span>
//           )}
//         </div>

//         {/* Password Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters",
//               },
//             })}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             placeholder="Enter your password"
//           />
//           {errors.password && (
//             <span className="text-red-500 text-sm">
//               {errors.password.message}
//             </span>
//           )}
//         </div>

//         {/* Phone Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Phone</label>
//           <input
//             type="tel"
//             {...register("phone", {
//               required: "Phone number is required",
//               pattern: {
//                 value: /^[0-9]{11}$/,
//                 message: "Invalid phone number",
//               },
//             })}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             placeholder="Enter your phone number"
//           />
//           {errors.phone && (
//             <span className="text-red-500 text-sm">{errors.phone.message}</span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//         >
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React from 'react'

const Signup = () => {
  return (
    <div>Signup</div>
  )
}

export default Signup