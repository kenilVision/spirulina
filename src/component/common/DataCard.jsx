import React from 'react'
import ProductCard from './ProductCard'

function DataCard({ data, image }) {
  const image2 = "https://spiruswastha.com/cdn/shop/files/Face_pack_cream_Benefits.jpg?v=1735895098&width=800"

  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 16
  const pages = Math.ceil(data.length / itemsPerPage)

  const arr = Array.from({ length: pages }, (_, i) => i + 1)

  const getVisiblePages = () => {
    if (currentPage <= 4) {
      return arr.slice(0, 5).concat(["..."], [pages])
    } else if (currentPage >= pages - 3) {
      return [1, "..."].concat(arr.slice(pages - 5))
    } else {
      return [1, "..."].concat(
        arr.slice(currentPage - 2, currentPage + 1),
        ["..."],
        [pages]
      )
    }
  }

  const visiblePages = pages > 7 ? getVisiblePages() : arr

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedData = data.slice(startIndex, endIndex)

  return (
    <>
      <div className='grid grid-cols-2 gap-x-[30px] gap-y-[30px] lg:grid-cols-4'>
        {paginatedData.map((item, index) => {
          const hasDiscount = item.price && item.price.discounted !== undefined

          return (
            <ProductCard
              key={startIndex + index}
              title={item.name}
              image={image[startIndex + index]}
              image2={image2}
              orignalPrice={hasDiscount ? item.price.original : null}
              discountedPrice={hasDiscount ? item.price.discounted : null}
              discountPercentage={hasDiscount ? item.price.discount_percentage : null}
              price={!hasDiscount && item.price_range ? `₹${item.price_range.from} - ₹${item.price_range.to}` : null}
            />
          )
        })}
      </div>

      {pages > 1 && (
        <div className='flex items-center border-t border-[#dddddd] justify-center mt-[30px] md:mt-[50px] pt-4 gap-2'>

          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className='px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300'
            hidden={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Buttons */}
          <div className='flex gap-x-[10px]'
          hidden={visiblePages.length <= 1}
          >
            {visiblePages.map((x, i) =>
              x === "..." ? (
                <span
                  key={i}
                  className="px-3 py-2 text-[#8c8c8c]"
                >
                  {x}
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(x)}
                  className={`px-3 py-2 rounded ${
                    currentPage === x
                      ? "text-[#018d43] "
                      : "text-[#8c8c8c] hover:text-[#018d43]"
                  }`}
                >
                  {x}
                </button>
              )
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages))}
            className='px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300'
            hidden={currentPage === pages}
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default DataCard
