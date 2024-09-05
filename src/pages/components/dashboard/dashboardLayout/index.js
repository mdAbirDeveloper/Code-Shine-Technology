import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const offMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <div className="md:flex block">
        <div className="w-52 shadow-md p-2 min-h-screen hidden md:block">
          <ul>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3">
              <Link href={"/components/dashboard/dComponents/messages"}>
                Messages
              </Link>
            </li>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3">
              <Link href={"/components/dashboard/dComponents/addProject"}>
                Add Project
              </Link>
            </li>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3">
              <Link href={"/components/dashboard/dComponents/addCustomer"}>
                AddCustomer
              </Link>
            </li>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3">
              <Link href={"/components/dashboard/dComponents/reviews"}>
                All Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:hidden block">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
          {menuOpen && (
            <ul className="shadow-md p-2">
              <Link href={"/components/dashboard/dComponents/messages"}>
                <li
                  onClick={offMenu}
                  className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3"
                >
                  Messages
                </li>
              </Link>
              <Link href={"/components/dashboard/dComponents/addProject"}>
                <li
                  onClick={offMenu}
                  className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3"
                >
                  Add Project
                </li>
              </Link>
              <Link href={"/components/dashboard/dComponents/addCustomer"}>
                <li
                  onClick={offMenu}
                  className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3"
                >
                  Add Customer
                </li>
              </Link>
              <Link href={"/components/dashboard/dComponents/reviews"}>
                <li
                  onClick={offMenu}
                  className="text-white text-lg mr-2 uppercase font-serif bg-green-500 text-center mb-2 p-3"
                >
                  All Reviews
                </li>
              </Link>
              
            </ul>
          )}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
