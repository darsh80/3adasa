import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  <>
<footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">

  <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    
      <div>
        <a href="/" className="flex items-center gap-3 mb-6 group">
          <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300" style={{boxShadow: '0 4px 20px rgba(249,115,22,.3)'}}>
            <span className="text-white font-bold text-xl">ع</span>
          </div>
          <span className="text-xl font-bold text-white">عدسة</span>
        </a>
        <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية.
        </p>
      </div>
      
      <div>
        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
          استكشف
        </h3>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              المدونة
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              من نحن
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
          التصنيفات
        </h3>
        <ul className="space-y-4">
          <li>
            <Link to="/blog?category=إضاءة" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              إضاءة
            </Link>
          </li>
          <li>
            <Link to="/blog?category=بورتريه" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              بورتريه
            </Link >
          </li>
          <li>
            <Link to="/blog?category=مناظر طبيعية" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              مناظر طبيعية
            </Link >
          </li>
          <li>
            <Link to="/blog?category=تقنيات" className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2 group">
              <span className="opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180">
                ➜
              </span>
              تقنيات
            </Link >
          </li>
        </ul>
      </div>
     
      <div>
        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
          ابقى على اطلاع
        </h3>
        <p className="text-sm text-neutral-500 mb-4">
          اشترك للحصول على أحدث المقالات.
        </p>
        <form className="space-y-3">
          <input type="email" placeholder="أدخل بريدك الإلكتروني" className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-sm transition">
            اشترك
          </button>
        </form>
      </div>
    </div>
  </div>
 
  <div className="border-t border-[#262626]">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-neutral-600">
        © 2026 عدسة. صنع بكل ❤️
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-neutral-600 hover:text-orange-500 transition">
          سياسة الخصوصية
        </a>
        <a href="#" className="text-sm text-neutral-600 hover:text-orange-500 transition">
          شروط الخدمة
        </a>
      </div>
    </div>
  </div>
</footer>
  </>
  )
}
