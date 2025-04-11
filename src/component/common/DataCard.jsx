import React from "react";
import ProductCard from "./ProductCard";

function DataCard({ combinedData }) {
  const image2 = "https://spiruswastha.com/cdn/shop/files/Face_pack_cream_Benefits.jpg?v=1735895098&width=800"; // hover image

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(combinedData.length / itemsPerPage);
  const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getVisiblePages = () => {
    if (currentPage <= 4) return pageArray.slice(0, 5).concat(["..."], [totalPages]);
    if (currentPage >= totalPages - 3) return [1, "..."].concat(pageArray.slice(totalPages - 5));
    return [1, "...", ...pageArray.slice(currentPage - 2, currentPage + 1), "...", totalPages];
  };

  const visiblePages = totalPages > 7 ? getVisiblePages() : pageArray;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = combinedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] md:gap-x-[30px] md:gap-y-[30px] lg:grid-cols-4">
      
              <ProductCard data = {paginatedData}/>

      </div>

      {totalPages > 1 && (
        <div className="flex items-center border-t border-[#dddddd] justify-center mt-[30px] md:mt-[50px] pt-4 gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <div className="flex gap-x-[10px]">
            {visiblePages.map((x, i) =>
              x === "..." ? (
                <span key={i} className="px-3 py-2 text-[#8c8c8c]">...</span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(x)}
                  className={`px-3 py-2 rounded ${
                    currentPage === x
                      ? "text-[#018d43]"
                      : "text-[#8c8c8c] hover:text-[#018d43]"
                  }`}
                >
                  {x}
                </button>
              )
            )}
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
