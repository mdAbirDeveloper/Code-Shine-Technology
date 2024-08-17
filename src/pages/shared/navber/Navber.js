// import { ArrowRight } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Navber = () => {
//   return (
//     <div>
//       <div
//         style={{ maxWidth: "1500px" }}
//         className="mx-auto h-20 bg-base-100 rounded shadow-2xl"
//       >
//         <div className="flex justify-between pt-5">
//           <div>
//             <Image
//               alt=""
//               width={150}
//               height={80}
//               src={"/logo.png"}
//               className="ml-4 rounded-2xl -mt-2"
//               title="this is av tectnoloty logo"
//             />
//           </div>
//           <div>
//             <Link href={"/"}>
//               <Button variant="contained" color="primary" className="mr-2 px-7">
//                 Home
//               </Button>
//             </Link>
//             <Link href={"/components/services"}>
//               <Button variant="contained" color="primary" className="mr-2 px-7">
//                 service
//               </Button>
//             </Link>
//             <Link href={"/components/project"}>
//               <Button variant="contained" color="primary" className="mr-2 px-7">
//                 project
//               </Button>
//             </Link>
//             <Link href={"/components/about"}>
//               <Button variant="contained" color="primary" className="mr-2 px-7">
//                 about
//               </Button>
//             </Link>
//             <Link href={"/components/contact"}>
//               <Button variant="contained" color="primary" className="mr-2 px-7">
//                 contact
//               </Button>
//             </Link>
//           </div>
//           <div className="mr-4">
//             <Button variant="contained" color="success">
//               Contact Us <ArrowRight></ArrowRight>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navber;

import React, { useState } from "react";
import { Menu, Close, ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        style={{ maxWidth: "1500px" }}
        className="mx-auto h-20 bg-base-100 rounded shadow-2xl"
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
          </div>
          <div className="hidden md:block mr-4">
            <Button variant="contained" color="success">
              Contact Us <ArrowRight />
            </Button>
          </div>
          <div className="md:hidden flex items-center mr-4">
            <button onClick={toggleMenu} className="">
              {menuOpen ? (
                <Close className="text-5xl" />
              ) : (
                <Menu className="text-5xl" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 px-4">
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
            <Button
              variant="contained"
              color="success"
              className="w-full mt-4"
              onClick={toggleMenu}
            >
              Contact Us <ArrowRight />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
