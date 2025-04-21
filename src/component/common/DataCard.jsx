import React from "react";
import ProductCard from "./ProductCard";

function DataCard({ combinedData, pagination, onPageChange }) {
  const { page, totalPages } = pagination;

  const getVisiblePages = () => {
    const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages <= 7) return pageArray;
    if (page <= 4) return [...pageArray.slice(0, 5), "...", totalPages];
    if (page >= totalPages - 3) return [1, "...", ...pageArray.slice(totalPages - 5)];
    return [1, "...", ...pageArray.slice(page - 2, page + 1), "...", totalPages];
  };

  const visiblePages = getVisiblePages();

  if (!combinedData || combinedData.length === 0) {
    return <div className="text-center py-8">No products found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] md:gap-x-[30px] md:gap-y-[30px] lg:grid-cols-4">
        <ProductCard data={combinedData} />
      </div>

      {totalPages > 1 && (
        <div 
          className="flex items-center border-t border-[#dddddd] justify-center mt-[30px] md:mt-[50px] pt-4 gap-2" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <button
            onClick={() => onPageChange(page - 1)}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] hover:cursor-pointer disabled:text-gray-300"
            disabled={page === 1}
          >
            Prev
          </button>

          <div className="flex gap-x-[10px]">
            {visiblePages.map((pageNum, i) => (
              pageNum === "..." ? (
                <span key={`ellipsis-${i}`} className="px-3 py-2 text-[#8c8c8c]">...</span>
              ) : (
                <button
                  key={`page-${pageNum}`}
                  onClick={() => onPageChange(pageNum)}
                  className={`px-3 py-2 rounded ${
                    page === pageNum
                      ? "text-[#018d43] font-medium"
                      : "text-[#8c8c8c] hover:cursor-pointer hover:text-[#018d43]"
                  }`}
                >
                  {pageNum}
                </button>
              )
            ))}
          </div>

          <button
            onClick={() => onPageChange(page + 1)}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] hover:cursor-pointer disabled:text-gray-300"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default DataCard;
