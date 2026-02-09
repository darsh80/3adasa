import React from 'react'
import SecSearch from './SecSearch/SecSearch'

export default function Blog() {

  return (<>
    <section className="relative min-h-[60vh] pt-[50px] flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className=" z-20 max-w-7xl mx-auto px-6 py-20 text-center">
        <span
          className="inline-flex p-2 px-3 font-tajawal text-orange-500  items-center border border-[#d23a10ca] rounded-full gap-2 mb-6  text-sm relative"
          style={{ backgroundColor: "rgba(249, 130, 22, 0.3)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#924610] "></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
          </span>
          <i className="fa-regular fa-file-lines text-[14px] text-orange-500 "></i>
          مدونتنا
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          استكشف{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            مقالاتنا {" "}
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث{" "}
        </p>
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]
         bg-[size:60px_60px]"
      ></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

    </section>
    <SecSearch />
  </>

  )
}
