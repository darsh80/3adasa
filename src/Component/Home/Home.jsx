import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Explore from "../Explore/Explore";
import LatestaArticles from "../LatestArticles/LatestaArticles";
import OurNewsletter from "../OurNewsletter/OurNewsletter";
import apiData from "../../ComApi/Api.json";
import { BsInfoCircle } from "react-icons/bs";

export default function Home() {
  const [API, setAPI] = useState({ posts: [] });

  useEffect(() => {
    setAPI(apiData);
  }, []);

  return (
    <>
      <div>
        <section className="relative min-h-[90vh] pt-[50px] flex items-center overflow-hidden bg-[#0a0a0a]">

<div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />


<div className="absolute inset-0 z-10 pointer-events-none" />
<div className="absolute top-16 left-6 z-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
<div className="absolute bottom-16 right-6 z-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

          <div className="z-20 max-w-7xl mx-auto px-6 py-20 text-center">
            <span
              className="  section-label inline-flex p-3 items-center border border-[#d23a10ca] rounded-full gap-2 mb-6 text-neutral-300 text-sm"
              style={{ backgroundColor: "rgba(249, 130, 22, 0.3)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              مرحباً بك في عدسة
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              اكتشف{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                فن
              </span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-medium transition-transform duration-300 hover:-translate-y-1 group"
              >
                استكشف المقالات
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-all duration-300"></i>
              </Link>

              <Link
                to="/About"
                className="px-6 py-3 justify-center items-center  gap-2 flex hover:border-[#924610] hover:bg-[#2B180B] hover:text-orange-500 transition-all duration-300 rounded-full border border-neutral-600 text-white"
              >
                <BsInfoCircle className="text-[18px]" />{" "}
                <p className="pl-2 font-bold">اعرف المزيد</p>
              </Link>
            </div>

            <div className="grid grid-cols-2 pt-[50px] md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <Stat icon="fa-newspaper" value="+50" label="مقالة" />
              <Stat icon="fa-users" value="+10 ألف" label="قارئ" />
              <Stat icon="fa-folder-open" value="4" label="تصنيفات" />
              <Stat icon="fa-pen-nib" value="6" label="كاتب" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span
                  className="section-label inline-flex p-2 items-center border border-[#d23a10ca] rounded-full gap-2 mb-[40px] text-neutral-300 text-sm"
                  style={{ backgroundColor: "rgba(249, 130, 22, 0.3)" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  مميز
                </span>

                <h2 className="text-white text-5xl font-bold mb-2">
                  مقالات مختارة
                </h2>
                <p className="text-neutral-400">محتوى منتقى لبدء رحلة تعلمك</p>
              </div>

              <Link
                to="/blog"
                className="px-5 py-2.5 bg-gradient-to-r text-white from-orange-500 to-orange-600 rounded-xl"
              >
                عرض الكل
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {API.posts.slice(0, 3).map((article) => (
                <article
                  key={article.id}
                  className="group rounded-3xl overflow-hidden border border-[#262626] bg-white/5 backdrop-blur flex flex-col md:flex-row"
                >
                  <Link to={`/blog/${article.slug}`}>
                    <div className="relative w-full md:h-full overflow-hidden">
                      <img
                        src={article.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      {article.featured && (
                        <span className="absolute top-4 right-4 px-3 py-1 text-xs text-white rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
                          مميز
                        </span>
                      )}
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 mb-2 w-max">
                      {article.category}
                    </span>

                    <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                      {article.title}
                    </h3>

                    <p className="text-neutral-400 mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex justify-between items-center gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={article.author.avatar}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {article.author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {article.date}
                          </p>
                        </div>
                      </div>

                      <Link to={`/blog/${article.slug}`}>
                        <span className="text-orange-500 font-semibold text-sm">
                          اقرأ المقال
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Explore />
      <LatestaArticles />
      <OurNewsletter />
    </>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
      <i className={`fa-solid ${icon} text-2xl text-orange-500 mb-1`}></i>
      <p className="text-2xl md:text-3xl font-bold gradient-text">{value}</p>
      <p className="text-neutral-500 text-sm">{label}</p>
    </div>
  );
}
