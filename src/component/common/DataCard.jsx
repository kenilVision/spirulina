import React from "react";
import ProductCard from "./ProductCard";

function DataCard({ combinedData = [] }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 16;

  // Memoized calculations
  const { totalPages, paginatedData, visiblePages } = React.useMemo(() => {
    const totalPages = Math.ceil(combinedData.length / itemsPerPage);
    const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = combinedData.slice(startIndex, startIndex + itemsPerPage);

    const getVisiblePages = () => {
      if (totalPages <= 7) return pageArray;
      if (currentPage <= 4) return [...pageArray.slice(0, 5), "...", totalPages];
      if (currentPage >= totalPages - 3) return [1, "...", ...pageArray.slice(totalPages - 5)];
      return [1, "...", ...pageArray.slice(currentPage - 2, currentPage + 1), "...", totalPages];
    };

    return {
      totalPages,
      paginatedData,
      visiblePages: getVisiblePages()
    };
  }, [combinedData, currentPage]);

  if (combinedData.length === 0) {
    return <div className="text-center py-8">No products found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] md:gap-x-[30px] md:gap-y-[30px] lg:grid-cols-4">
        <ProductCard data={paginatedData} />
      </div>

      {totalPages > 1 && (
        <div 
          className="flex items-center border-t border-[#dddddd] justify-center mt-[30px] md:mt-[50px] pt-4 gap-2" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <div className="flex gap-x-[10px]">
            {visiblePages.map((page, i) => (
              page === "..." ? (
                <span key={`ellipsis-${i}`} className="px-3 py-2 text-[#8c8c8c]">...</span>
              ) : (
                <button
                  key={`page-${page}`}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded ${
                    currentPage === page
                      ? "text-[#018d43] font-medium"
                      : "text-[#8c8c8c] hover:text-[#018d43]"
                  }`}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default DataCard;