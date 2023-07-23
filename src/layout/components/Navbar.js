"use client";
import { useState } from "react";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          {/* ❖ */}
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="#sales"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Services
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#services"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Security Services
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#team"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Team
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#metrix"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Metrix.Place
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#cryptechtest"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          CryptectTest
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-main">
      <nav className="nav-bar to-width to-center flex filter drop-shadow-md px-4 py-4 h-24 items-center">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-1/5 flex items-center">
          <a
            className="to-hide text-2xl font-bold text-motion reflect-nav"
            href="/"
            id="header"
          >
            <span className="ct-logo">❖</span> CRYPTECH SERVICES
          </a>
        </div>
        <div className="w-3/5 flex justify-evenly items-center">
          <div
            className="z-50 ham flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <NavLink to="#sales">SERVICES</NavLink>
            <NavLink to="#services">SECURITY SERVICES</NavLink>
            <NavLink to="#team">TEAM</NavLink>
            <NavLink to="#metrix">METRIX.PLACE</NavLink>
            <NavLink to="#cryptechtest">CRYPTECHTEST</NavLink>
          </div>
        </div>
        <div className="to-hide w-1/5 flex justify-end items-end">
          <a className="home-button" href="#explorecourses">
            <div>
              <button type="button">
                {" "}
                <ContactPageOutlinedIcon />{" "}
                <span className="mailto:squid@cryptech.services">
                  Contact Us
                </span>
              </button>
            </div>
          </a>
        </div>
      </nav>
    </nav>
  );
}
