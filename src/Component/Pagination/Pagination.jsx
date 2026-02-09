import React from "react";

export default function Pagination({ numberOfpages, currentPage, setCurrentPage }) {
  if (numberOfpages <= 1) return null;

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (currentPage < numberOfpages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center mb-[60px] gap-2">
      <ul className="flex gap-3 justify-center items-center">

    
        <li
          onClick={prevPage}
          className={`border-2 flex justify-center items-center rounded-[10px]
            w-[45px] h-[40px] transition relative
            ${currentPage === 1
              ? "border-[#262626] text-neutral-600 cursor-not-allowed"
              : "border-[#262626] text-white cursor-pointer"
            }`}
        >
          <i className="fa-solid fa-chevron-right text-sm"></i>

        
          {currentPage !== 1 && (
            <span className="absolute hidden group-hover:flex w-4 h-4 border border-white rounded-full -top-2 -right-2 pointer-events-none" />
          )}
        </li>

    
        {Array.from({ length: numberOfpages }, (_, i) => (
          <li
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`border-2 flex justify-center items-center rounded-[10px]
              w-[45px] h-[40px] transition relative
              ${currentPage === i + 1
                ? "bg-orange-500 border-orange-500 text-white"
                : "border-[#262626] text-neutral-400 cursor-pointer hover:border-orange-500 hover:text-white"
              } group`}
          >
            {i + 1}
          </li>
        ))}

        <li
          onClick={nextPage}
          className={`border-2 flex justify-center items-center rounded-[10px]
            w-[45px] h-[40px] transition relative
            ${currentPage === numberOfpages
              ? "border-[#262626] text-neutral-600 cursor-not-allowed"
              : "border-[#262626] text-white cursor-pointer"
            } group`}
        >
          <i className="fa-solid fa-chevron-left text-sm"></i>

        </li>
      </ul>

    
      <p className="text-[#a1a1a1] text-sm">
        صفحة {currentPage} من {numberOfpages}
      </p>
    </div>
  );
}
