import React from 'react'

function SortBottomslider({isOpen2, setIsOpen2 ,selected , setSelected ,sortOptions}) {
  return (
    <>
              <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen2 ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen2(false)}
      ></div>

      <div
        className={`fixed bottom-0 right-0 left-0   w-full h-[311px]  bg-white shadow-lg transform ${
          isOpen2 ? "translate-y-0" : "translate-y-full"
        } transition-transform z-150`}
      >
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b-1 border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">
            SORT BY :
          </h2>
          <button
            onClick={() => setIsOpen2(false)}
            className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180"
          >
            <svg
              class="t4s-iconsvg-close"
              role="presentation"
              viewBox="0 0 16 14"
              width="16"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className=" overflow-y-auto max-h-[calc(311px-60px)]">
          <div className="  bg-white  ">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                className={`px-[10px] py-[15px] cursor-pointer  ${
                  selected.value === option.value
                    ? "bg-[#018D4314]  text-[#018d43]"
                    : " text-[#696969] "
                }`}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SortBottomslider
