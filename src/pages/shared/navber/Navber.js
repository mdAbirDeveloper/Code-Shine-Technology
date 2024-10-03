/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUser, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);

  const handleClick = () => {
    window.open("https://wa.me/8801832822560", "_blank");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        style={{ maxWidth: "1500px" }}
        className="mx-auto h-20 shadow-2xl bg-slate-800 shadow-blue-500"
      >
        <div className="flex justify-between items-center h-full px-4 lg:px-8">
          <div>
            <img
              alt="Logo"
              src={"/logo.jpg"}
              className="ml-2 lg:ml-4 rounded-full w-14 h-14 lg:w-16 lg:h-16"
              title="This is AV Technology logo"
            />
          </div>

          {/* Full navbar (hidden if screen width < 1419px) */}
          <div className="hidden min-[1419px]:flex space-x-3 lg:space-x-5">
            <Link href={"/"}>
              <Button
                variant="contained"
                color="primary"
                className="px-5 lg:px-7 animate-fade-in-left-1"
              >
                Home
              </Button>
            </Link>
            <Link href={"/components/services"}>
              <Button
                variant="contained"
                color="primary"
                className="px-5 lg:px-7 animate-fade-in-left-2"
              >
                Service
              </Button>
            </Link>
            <Link href={"/components/project"}>
              <Button
                variant="contained"
                color="primary"
                className="px-5 lg:px-7 animate-fade-in-left-3"
              >
                Project
              </Button>
            </Link>
            <Link href={"/components/about"}>
              <Button
                variant="contained"
                color="primary"
                className="px-5 lg:px-7 animate-fade-in-left-4"
              >
                About
              </Button>
            </Link>
            <Link href={"/components/blog"}>
              <Button
                variant="contained"
                color="primary"
                className="px-5 lg:px-7 animate-fade-in-left-4"
              >
                Blogs
              </Button>
            </Link>
            <Link href={"/components/contact"}>
              <Button
                variant="contained"
                color="primary"
                className="px-5 lg:px-7 animate-fade-in-left-5"
              >
                Contact
              </Button>
            </Link>
            {user && (
              <Link href="/components/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  className="px-5 lg:px-7 animate-fade-in-left-5"
                >
                  Dashboard
                </Button>
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link href="/components/login">
                <Button
                  variant="contained"
                  color="primary"
                  className="px-5 lg:px-7 animate-fade-in-left-5"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Contact button (hidden if screen width < 1419px) */}
          <div className="hidden min-[1419px]:flex">
            <Link href={"/components/profile"} className="rounded-lg bg-blue-500 px-5 py-2 uppercase font-bold">Profile</Link>
          </div>

          {/* Dropdown menu (visible if screen width < 1419px) */}
          <div className="flex min-[1419px]:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? (
                <Close className="text-3xl lg:text-4xl" />
              ) : (
                <Menu className="text-3xl lg:text-4xl" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for smaller screens */}
        {menuOpen && (
          <div className="bg-slate-800 py-4 fixed right-0 w-64 z-50 transition-transform transform translate-x-0 animate-slide-in-left">
            <div className="space-y-3 px-4">
              <Link href={"/"} onClick={toggleMenu}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full mt-2"
                >
                  Home
                </Button>
              </Link>
              <Link href={"/components/services"} onClick={toggleMenu}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full mt-2"
                >
                  Service
                </Button>
              </Link>
              <Link href={"/components/project"} onClick={toggleMenu}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full mt-2"
                >
                  Project
                </Button>
              </Link>
              <Link href={"/components/about"} onClick={toggleMenu}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full mt-2"
                >
                  About
                </Button>
              </Link>
              <Link href={"/components/blog"} onClick={toggleMenu}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full mt-2"
                >
                  Blog
                </Button>
              </Link>
              <Link href={"/components/contact"} onClick={toggleMenu}>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full mt-2"
                >
                  Contact
                </Button>
              </Link>
              {user && (
                <Link href="/components/dashboard" onClick={toggleMenu}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full mt-2"
                  >
                    Dashboard
                  </Button>
                </Link>
              )}
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="bg-red-500 text-white py-2 rounded w-full"
                >
                  Logout
                </button>
              ) : (
                <Link href="/components/login" onClick={toggleMenu}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full mt-2"
                  >
                    Login
                  </Button>
                </Link>
              )}
              <Link href={'/components/profile'}>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  toggleMenu();
                }}
                className="w-full flex justify-center mt-2"
              >
                Profile <FaUser className="ml-2" />
              </Button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
