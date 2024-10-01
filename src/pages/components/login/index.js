// Login.js
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FaEye, FaSlackHash } from "react-icons/fa";
import Head from "next/head";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://code-shine-technology.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem("user", JSON.stringify(userData));
        setSuccess("Login successful!");
        // Optionally redirect to a dashboard or another page
        router.reload();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Login | Code Shine Technology</title>
        <meta
          name="description"
          content="Log in to your Code Shine Technology account to access your dashboard, manage your projects, and utilize our web development and design services."
        />
        <meta
          name="keywords"
          content="login, Code Shine Technology, account access, web development dashboard"
        />
        <meta property="og:title" content="Login | Code Shine Technology" />
        <meta
          property="og:description"
          content="Access your Code Shine Technology account to manage your projects and take advantage of our web development services. Secure login for your convenience."
        />
        <meta
          property="og:image"
          content="https://codeshinetechnology.com/codeshinetechnology.png"
        />
        <meta
          property="og:url"
          content="https://codeshinetechnology.com/components/login"
        />
        <meta property="og:site_name" content="Code Shine Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code Shine Technology" />
      </Head>

      <div className="flex justify-center items-center bg-slate-800">
        <div className="bg-slate-900 p-8 rounded shadow-md w-full  mt-10 max-w-md hover:shadow-blue-500 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-white">Email or Phone</label>
              <input
                {...register("identifier", {
                  required: "Email or Phone is required",
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 text-green-500"
                placeholder="Enter your email or phone number"
              />
              {errors.identifier && (
                <span className="text-red-500 text-sm">
                  {errors.identifier.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-green-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3"
                >
                  <FaEye
                    icon={showPassword ? FaSlackHash : FaEye}
                    className="text-gray-500"
                  />
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {user ? (
              <button
                disabled
                className="w-full bg-blue-200 text-white p-2 rounded"
              >
                Already Logged In
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            )}
          </form>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {success && (
            <p className="text-green-500 mt-4 text-center">{success}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
