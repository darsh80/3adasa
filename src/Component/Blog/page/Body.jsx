import React from "react";
import { Link } from "react-router-dom";
import apiData from "../../../ComApi/Api.json";

export default function Body({ post }) {
  if (!post) return null;

  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        const headerId = `section-${content.split('\n\n').filter(p => p.startsWith('## ')).indexOf(paragraph)}`;
        return <h2 id={headerId} key={index} className="text-2xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24">
          <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
            <i className="fa-solid fa-camera text-orange-500" />
          </span>
          {paragraph.replace('## ', '')}
        </h2>
      }
      return <p key={index} className="text-neutral-300 leading-relaxed mb-6 text-lg">
        {paragraph}
      </p>
    });
  };

  // Get related posts (simple logic: same category, excluding current)
  const relatedPosts = apiData.posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <article className="bg-[#0a0a0a] min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            {/* المقال */}
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  "{post.excerpt}"
                </p>
              </div>

              {renderContent(post.content)}

              {/* الوسوم */}
              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-tags text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* السايد بار */}
            <aside className="order-1 lg:order-2 lg:sticky lg:top-[100px] self-start space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* محتويات المقال */}
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-list-ul text-orange-500 text-sm" />
                    </div>
                  </div>
                  <nav className="space-y-1">
                    {post.content.split('\n\n').filter(p => p.startsWith('## ')).map((header, idx) => (
                      <a
                        key={idx}
                        href={`#section-${idx}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(`section-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-white hover:bg-[#1a1a1a] transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#0a0a0a] rounded-lg text-xs font-bold text-neutral-500 group-hover:text-orange-500 transition-colors border border-[#262626] group-hover:border-orange-500/30">
                          {idx + 1}
                        </span>
                        <span className="text-sm line-clamp-1">{header.replace('## ', '')}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* معلومات المقال */}
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                      <p className="text-white font-bold">{post.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                      <p className="text-white font-bold text-sm">{post.date}</p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>
                {/* الاشتراك */}
                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-envelope text-orange-500 text-xl" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <Link
                      className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                      to="/blog"
                      data-discover="true"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-images text-orange-500 text-xl" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                to="/blog"
                data-discover="true"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.id}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  to={`/blog/${related.slug}`}
                  data-discover="true"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={related.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {related.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt={related.author.name}
                          className="w-6 h-6 rounded-full"
                          src={related.author.avatar}
                        />
                        {related.author.name}
                      </span>
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
              {relatedPosts.length === 0 && <p className="text-neutral-500">لا توجد مقالات مشابهة حالياً.</p>}
            </div>
          </div>
        </div >
      </article >
    </>
  );
}
