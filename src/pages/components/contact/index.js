/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

const Contact = () => {
  const [submited, setSubmited] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmited("");
    setError("");
    try {
      const message = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      console.log(message);
      // Send data to MongoDB (modify endpoint and format if needed)
      const response = await fetch(
        "https://code-shine-technology.vercel.app/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        }
      );

      const result = await response.json();
      setSubmited("Your message has been sent successfully.");
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("Error sending data:", error);
      setLoading(false);
      setError("Message not sent. Something went wrong.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Code Shine Technology</title>
        <meta
          name="description"
          content="Get in touch with Code Shine Technology. We're here to answer your questions, discuss your projects, and provide the support you need for web development, design, and more."
        />
        <meta
          name="keywords"
          content="contact Code Shine Technology, web development inquiries, support, consultation, business inquiries"
        />
        <meta
          property="og:title"
          content="Contact Us | Code Shine Technology"
        />
        <meta
          property="og:description"
          content="Reach out to Code Shine Technology for all your web development needs. Contact us today to discuss your project and how we can help you succeed."
        />
        <meta
          property="og:image"
          content="https://codeshinetechnology.com/codeshinetechnology.png"
        />
        <meta
          property="og:url"
          content="https://codeshinetechnology.com/components/contact"
        />
        <meta property="og:site_name" content="Code Shine Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code Shine Technology" />
      </Head>

      <section className="max-w-[800px] mx-auto  mt-20 px-2">
        <header className="text-center">
          <h1 className="my-5 md:text-5xl text-3xl font-bold font-serif uppercase text-green-500 ">
            Get in Touch with Us
          </h1>
          <div className="divider md:w-1/3 w-full mx-auto">X</div>
          <p className="text-left">
            We are here to help! Whether you have a question about our services,
            need assistance with a project, or just want to learn more about how
            we can work together, feel free to reach out. Fill out the form
            below, and we will get back to you as soon as possible. Your success
            is our priority, and we look forward to hearing from you!
          </p>
          <div className="divider my-6"></div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div>
              <label htmlFor="name" className="font-serif font-thin">
                Your Name (required)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="text-green-500 input-bordered border h-10 rounded-none mt-3 w-full p-2"
                required
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="font-serif font-thin">
                Your Email (required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-green-500 input-bordered border h-10 rounded-none mt-3 w-full p-2"
                required
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="font-serif font-thin">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="text-green-500 input-bordered border h-10 rounded-none mt-3 w-full p-2"
                {...register("subject")}
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              required
              cols={10}
              rows={10}
              className="text-green-500 input-bordered border rounded-none w-full mt-2 p-2"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
            <p className="text-xl font-thin font-serif text-green-500">
              {submited}
            </p>
            <p className="text-xl font-thin font-serif text-red-500">{error}</p>
            <button
              type="submit"
              className="btn btn-outline bg-slate-800 text-white rounded-none"
              disabled={loading}
            >
              {loading ? "MESSAGE SENDING...." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
