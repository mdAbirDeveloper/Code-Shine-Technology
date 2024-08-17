/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
      //console.log(project);
      const message = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      // Send data to MongoDB (modify endpoint and format if needed)
      // const response = await fetch("https://usama-mir-server-again.vercel.app/message", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(message),
      // });

      // const result = await response.json();
      setSubmited("your message send successfully");
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("Error uploading images or sending data:", error);
      // setError('message not send, something are wrong')
      setLoading(false);
      // Handle errors appropriately, e.g., display error messages
    }
  };

  return (
    <div>
      <div className="max-w-[800px] mx-auto min-h-screen mt-20 px-2">
        <div className="text-center">
          {/* <div>
            <img src="" className="p-2 border" />
          </div> */}
          <div>
            <h1 className="my-5 md:text-5xl text-3xl font-bold font-serif uppercase text-green-700 opacity-70">
              Get in Touch with Us
            </h1>
            <div className="divider md:w-1/3 w-full mx-auto">X</div>
            <p className="text-left">
              We are here to help! Whether you have a question about our
              services, need assistance with a project, or just want to learn
              more about how we can work together, feel free to reach out. Fill
              out the form below, and we will get back to you as soon as
              possible. Your success is our priority, and we look forward to
              hearing from you!
            </p>
            <div className="divider my-6"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div>
              <label className=" font-serif font-thin">
                Your Name (required)
              </label>
              <br />
              <input
                type="text"
                name="name"
                className="input-bordered border h-10 rounded-none mt-3 w-full p-2"
                required
                {...register("name")}
              />
            </div>
            <div>
              <label className=" font-serif font-thin">
                Your Email (required)
              </label>
              <br />
              <input
                type="email"
                name="email"
                className="input-bordered border h-10 rounded-none mt-3 w-full p-2"
                required
                {...register("email")}
              />
            </div>
            <div>
              <label className=" font-serif font-thin">Subject</label>
              <br />
              <input
                type="text"
                name="name"
                className="input-bordered border h-10 rounded-none mt-3 w-full p-2"
                {...register("subject")}
              />
            </div>
          </div>
          <div className="mt-5">
            <label>Your Message</label>
            <textarea
              type="text"
              cols={10}
              rows={10}
              className=" input-bordered border rounded-none w-full mt-2 p-2"
              {...register("message")}
            />
            <p className="text-xl font-thin font-serif text-green-500">
              {submited}
            </p>
            <p className="text-xl font-thin font-serif text-red-500">{error}</p>
            <button className="btn btn-outline bg-black text-white rounded-none">
              {loading ? "MESSAGE SENDING...." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
