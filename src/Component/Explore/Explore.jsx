import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "إضاءة", articles: 3, icon: "fa-sun" },
  { name: "بورتريه", articles: 3, icon: "fa-user" },
  { name: "مناظر طبيعية", articles: 2, icon: "fa-mountain-sun" },
  { name: "تقنيات", articles: 5, icon: "fa-sliders" },
  { name: "معدات", articles: 3, icon: "fa-sun" },
];

export default function Explore() {
  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="section-label inline-flex p-2 items-center border border-[#d23a10ca] rounded-full gap-2 mb-[40px] text-neutral-300 text-sm"
            style={{ backgroundColor: "rgba(249, 130, 22, 0.3)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            التصنيفات
          </span>
          <h2 className="section-title text-white text-[50px]">
            استكشف حسب الموضوع
          </h2>
          <p className="section-subtitle max-w-lg mx-auto text-[20px] text-gray-500">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/blog?category=${encodeURIComponent(cat.name)}`}
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i
                    className={`fa-solid ${cat.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                  />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  {cat.articles} مقالة
                </p>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-white rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
