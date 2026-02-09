import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import imgLans from "../../../public/image/imgi_1_logo-GdqARQRt.png";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper function for NavLink classes
  const navClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
      : "text-neutral-400 hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `px-4 py-2 rounded transition-colors ${isActive
      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
      : "text-neutral-400 hover:text-white hover:bg-[#262626]"
    }`;

  return (

    <div className=" fixed top-0 left-0 w-full z-50 bg-black  py-2 border-b border-[#262626] text-white px-4 md:px-10">
      {/* Navbar */}
      <div className="flex w-[85%] mx-auto justify-between items-center h-20">
        {/* Logo */}
        <NavLink
          className="flex items-center gap-3 group"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
            <img
              alt="Photography Logo"
              className="w-full h-full object-cover"
              src="/image/imgi_1_logo-GdqARQRt.png"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold gradient-text">عدسة</span>
            <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </NavLink>

        {/* Center links */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            <NavLink to="/" className={navClass}>
              الرئيسية
            </NavLink>
            <NavLink to="/blog" className={navClass}>
              المدونة
            </NavLink>
            <NavLink to="/about" className={navClass}>
              من نحن
            </NavLink>
          </div>
        </div>

        {/* Left side buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="icon-btn">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <NavLink to="/blog" className="btn-primary text-white">
            ابدأ القراءة
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden icon-btn"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-2 bg-[#161616] rounded-lg p-2 space-y-2 md:hidden">
          <NavLink
            to="/"
            className={mobileNavClass}
            onClick={() => setMenuOpen(false)}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={mobileNavClass}
            onClick={() => setMenuOpen(false)}
          >
            المدونة
          </NavLink>
          <NavLink
            to="/about"
            className={mobileNavClass}
            onClick={() => setMenuOpen(false)}
          >
            من نحن
          </NavLink>
        </div>
      )}
    </div>
  );
}
