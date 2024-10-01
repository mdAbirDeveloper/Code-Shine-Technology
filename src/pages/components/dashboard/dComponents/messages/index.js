// Messages.js
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../dashboardLayout";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://code-shine-technology.vercel.app/messages"); // Update the URL according to your backend endpoint

      if (!response.ok) {
        throw new Error("Failed to fetch messages.");
      }

      const data = await response.json();

      // Reverse the order of messages to show the newest first
      setMessages(data.reverse());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();

    // Set up interval to fetch messages every 30 seconds
    const intervalId = setInterval(fetchMessages, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Delete a message
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const response = await fetch(`https://code-shine-technology.vercel.app/messages/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted message from the state
        setMessages(messages.filter((message) => message._id !== id));
      } else {
        setError("Failed to delete the message.");
      }
    } catch (error) {
      setError("An error occurred while deleting the message.");
    }
  };

  
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  if (!user || user?.email !== "MDSAHJALAL9778@GMAIL.COM") {
    return (
      <div className=" flex items-center justify-center bg-gray-100 text-center p-4">
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      {loading && <p>Loading messages...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && messages.length === 0 && (
        <p className="text-center text-gray-600">No messages found.</p>
      )}

      {!loading && !error && messages.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Message</th>
                <th className="py-3 px-6 text-left">Uploaded Time</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {messages.map((message) => (
                <tr
                  key={message._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{message.name}</td>
                  <td className="py-3 px-6">{message.email}</td>
                  <td className="py-3 px-6">{message.subject}</td>
                  <td className="py-3 px-6">{message.message}</td>
                  <td className="py-3 px-6">
                    {new Date(message.uplotedTime).toLocaleString()}
                  </td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => handleDelete(message._id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;

// Setting the layout for the Messages page
Messages.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
