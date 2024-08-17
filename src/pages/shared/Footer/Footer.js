import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto mt-10">
        <footer className="footer bg-green-700 text-white p-10">
          <nav>
            <h6 className="font-bold font-serif text-3xl uppercase text-white">
              Services
            </h6>
            <a className="text-lg font-serif">Wen Design</a>
            <a className="text-lg font-serif">Web Development</a>
            <a className="text-lg font-serif">Front_end</a>
            <a className="text-lg font-serif">Back_end</a>
          </nav>
          <nav>
            <h6 className="font-bold font-serif text-3xl uppercase text-white">
              Company
            </h6>
            <Link
              href={"/components/about"}
              className="link link-hover text-lg font-serif"
            >
              About us
            </Link>
            <Link
              href={"/components/contact"}
              className="link link-hover text-lg font-serif"
            >
              Contact
            </Link>
            <Link
              href={"/components/services"}
              className="link link-hover text-lg font-serif"
            >
              Services
            </Link>
            <Link
              href={"/components/project"}
              className="link link-hover text-lg font-serif"
            >
              Projects
            </Link>
          </nav>
          <nav>
            <h6 className="font-bold font-serif text-3xl uppercase text-white">
              Social
            </h6>
            <div className="grid grid-flow-col gap-4 mt-2">
              <a
                href="https://wa.me/8801832822560"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <FaWhatsapp />
              </a>
              <a href="https://github.com/mdAbirDeveloper">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://x.com/SahjalalWeb">
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
