import React from "react";
import { Link } from "react-router-dom";

export default function TeamSection() {
  return (
    <>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-flex text-orange-500  p-3 items-center border border-orange-500 rounded-full gap-2 mb-6 text-neutral-300 text-sm relative"
              style={{ backgroundColor: "rgba(249, 130, 22, 0.1)" }}
            >
              <span className="relative  flex h-2 w-2">
                <span className="animate-ping  absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative  inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
             فريقنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
              <div className="relative inline-block mb-4">
                <img
                  alt="سالم أحمد"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-white text-lg">سالم أحمد</h3>
              <p className="text-orange-500 text-sm font-medium mb-4">
                مصور محترف
              </p>
              <div className="flex justify-center gap-3">
                <Link
                  to="https://x.com/"
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link
                  to="https://github.com/"
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  to="https://Linkedin.com/"
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
