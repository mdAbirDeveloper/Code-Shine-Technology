import React, { useEffect, useState } from "react";
import { Menu, Close, ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { FaWhatsapp } from "react-icons/fa";

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
        className="mx-auto h-20 rounded shadow-2xl bg-slate-800"
      >
        <div className="flex justify-between items-center pt-5">
          <div>
            <Image
              alt=""
              width={150}
              height={80}
              src={"/logo.png"}
              className="ml-4 rounded-2xl -mt-2"
              title="This is AV Technology logo"
            />
          </div>
          <div className="hidden md:flex">
            <Link href={"/"}>
              <Button
                variant="contained"
                color="primary"
                className="mr-2 px-7 animate-fade-in-left-1" // Apply the animation class here
              >
                Home
              </Button>
            </Link>
            <Link href={"/components/services"}>
              <Button
                variant="contained"
                color="primary"
                className="mr-2 px-7 animate-fade-in-left-2" // Apply the animation class here
              >
                Service
              </Button>
            </Link>
            <Link href={"/components/project"}>
              <Button
                variant="contained"
                color="primary"
                className="mr-2 px-7 animate-fade-in-left-3" // Apply the animation class here
              >
                Project
              </Button>
            </Link>
            <Link href={"/components/about"}>
              <Button
                variant="contained"
                color="primary"
                className="mr-2 px-7 animate-fade-in-left-4" // Apply the animation class here
              >
                About
              </Button>
            </Link>
            <Link href={"/components/contact"}>
              <Button
                variant="contained"
                color="primary"
                className="mr-2 px-7 animate-fade-in-left-5" // Apply the animation class here
              >
                Contact
              </Button>
            </Link>
            {user && (
              <Link href="/components/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-2 px-7 animate-fade-in-left-5" // Apply the animation class here
                >
                  Dashboard
                </Button>
              </Link>
            )}
            {user ? (
              <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
                Logout
              </button>
            ) : (
              <Link href="/components/login">
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-2 px-7 animate-fade-in-left-5" // Apply the animation class here
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
          <div className="hidden md:block mr-4">
            <Button
              variant="contained"
              color="success"
              onClick={handleClick}
              className="flex items-center"
            >
              Contact Us <FaWhatsapp className="text-xl ml-1" />
            </Button>
          </div>
          <div className="md:hidden flex items-center mr-4">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? (
                <Close className="text-5xl" />
              ) : (
                <Menu className="text-5xl" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 px-4 absolute pb-5 left-0 right-0 bg-opacity-90 z-50">
            <Link href={"/"} onClick={toggleMenu}>
              <Button
                variant="contained"
                color="primary"
                className="w-full mb-2"
              >
                Home
              </Button>
            </Link>
            <Link href={"/components/services"} onClick={toggleMenu}>
              <Button
                variant="contained"
                color="primary"
                className="w-full mb-2"
              >
                Service
              </Button>
            </Link>
            <Link href={"/components/project"} onClick={toggleMenu}>
              <Button
                variant="contained"
                color="primary"
                className="w-full mb-2"
              >
                Project
              </Button>
            </Link>
            <Link href={"/components/about"} onClick={toggleMenu}>
              <Button
                variant="contained"
                color="primary"
                className="w-full mb-2"
              >
                About
              </Button>
            </Link>
            <Link href={"/components/contact"} onClick={toggleMenu}>
              <Button
                variant="contained"
                color="primary"
                className="w-full mb-2"
              >
                Contact
              </Button>
            </Link>
            {user && (
              <Link href="/components/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={toggleMenu}
                  className="w-full mb-2" // Apply the animation class here
                >
                  Dashboard
                </Button>
              </Link>
            )}
            {user ? (
              <button onClick={()=>{handleLogout(), toggleMenu()}} className="w-full mb-2 bg-red-500 py-1">
                Logout
              </button>
            ) : (
              <Link href="/components/login">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={toggleMenu}
                  className="w-full mb-2" // Apply the animation class here
                >
                  Login
                </Button>
              </Link>
            )}
            <Button
              variant="contained"
              color="success"
              className="w-full mb-2"
              onClick={() => {
                toggleMenu(), handleClick();
              }}
            >
              Contact Us <FaWhatsapp className="text-xl ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
