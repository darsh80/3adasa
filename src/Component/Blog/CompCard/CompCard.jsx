import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompCard() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/page");
  };

  return (
    <>
      <div className=" bg-black">
        <div className="w-[85%] mx-auto w px-4 sm:px-6 bg-black lg:px-8 py-12">
          <div className="mb-8 flex items-center justify-between flex-row-reverse">
            <p className="text-neutral-400">
              عرض <span className="font-bold text-white">28</span> مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button className="p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white">
                  <i class="fa-solid fa-table-cells-large text-[18px]"></i>
                </button>
                <button className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white">
                  <i class="fa-solid fa-bars text-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              onClick={handleCardClick}
              className="group overflow-hidden bg-[#111] rounded-2xl border border-[#262626] transition hover:border-[#333] hover:-translate-y-1 hover:shadow-lg transform cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=500&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt=""
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Category */}
                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  إضاءة
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                  <span>8 دقائق للقراءة</span>
                  <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                  <span>15 يناير 2024</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3  leading-snug group-hover:text-orange-500 transition">
                  إتقان تصوير الساعة الذهبية: دليل شامل
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                  احترافية حول الإضاءة والتكوين.
                </p>

                {/* Author */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=12"
                      className="w-9 h-9 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p className="text-sm text-white">سالم أحمد</p>
                      <p className="text-xs text-neutral-400">مصور محترف</p>
                    </div>
                  </div>

                  <button className="w-8 h-8 flex bg-[#9246108f] items-center justify-center rounded-full border border-[#262626] text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <div className="w-[85%] mx-auto w px-4 sm:px-6 bg-black lg:px-8 py-12">
          {/* Top Bar */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض <span className="font-bold text-white">28</span> مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button className="p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white">
                  <i class="fa-solid fa-table-cells-large text-[18px]"></i>
                </button>
                <button className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white">
                  <i class="fa-solid fa-bars text-lg"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <article
              onClick={handleCardClick}
              className="group overflow-hidden bg-[#111] rounded-2xl border border-[#262626] transition hover:border-[#333] hover:-translate-y-1 hover:shadow-lg transform cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=500&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt=""
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Category */}
                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  إضاءة
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                  <span>8 دقائق للقراءة</span>
                  <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                  <span>15 يناير 2024</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3  leading-snug group-hover:text-orange-500 transition">
                  إتقان تصوير الساعة الذهبية: دليل شامل
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                  احترافية حول الإضاءة والتكوين.
                </p>

                {/* Author */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=12"
                      className="w-9 h-9 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p className="text-sm text-white">سالم أحمد</p>
                      <p className="text-xs text-neutral-400">مصور محترف</p>
                    </div>
                  </div>

                  <button className="w-8 h-8 flex bg-[#9246108f] items-center justify-center rounded-full border border-[#262626] text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
