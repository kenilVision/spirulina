import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
function FilterSideBar({
  instock,
  setinstock,
  isOpenfilter,
  pagination,
  stock,
  setIsOpenfilter,
  value,
  setValue,
  minmaxcontrol,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpenfilter ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpenfilter(false)}
      ></div>

      <div>
        <div
          className={`fixed flex top-0 left-0 w-[calc(100vw-20px)] z-110 sm:w-[340px] h-full shadow-lg transform ${
            isOpenfilter ? "translate-x-0" : "-translate-x-full"
          } transition-transform z-50`}
        >
          <div className="  bg-white w-full">
            <div className="flex justify-between items-center p-4 min-h-[60px] border-b border-[#dddddd]">
              <h2 className="text-[16px] leading-[1.425rem] font-semibold">
                Filter
              </h2>
              <button
                onClick={() => setIsOpenfilter(false)}
                className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180"
              >
                <svg role="presentation" viewBox="0 0 16 14" width="16">
                  <path
                    d="M15 0L1 14m14 0L1 0"
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-[20px] border-b border-[#dddddd] ">
              <div className="mb-[20px] font-bold w-[60px] text-[16px] border-b-2 border-black ">
                Availability
              </div>
              <ul>
                <li className="mb-[10px]">
                  <label className="flex items-center gap-2 text-sm cursor-pointer text-[18px]">
                    <input
                      type="checkbox"
                      checked={instock}
                      onChange={(e) => setinstock(e.target.checked)}
                      onClick={() => setIsOpenfilter(false)}
                      className="w-[16px] h-[16px] border-b border-[#dddddd]  me-[10px]"
                    />
                    <span className="text-black">In Stock ({stock})</span>
                  </label>
                </li>
                <li className="mb-[10px]">
                  {/* Out of Stock */}
                  <label className="flex items-center gap-2 text-sm cursor-pointer text-[18px] ">
                    <input
                      type="checkbox"
                      disabled
                      className="w-[16px] h-[16px] border-b border-[#dddddd] rounded-0   me-[10px]"
                    />
                    <span className="text-gray-400">
                      Out Of Stock ({pagination.total - stock})
                    </span>
                  </label>
                </li>
              </ul>
            </div>

            <div className="p-[20px] border-b border-[#dddddd] ">
              <div className="mb-[40px] font-bold w-[60px]  border-b-2 border-black ">
                Price
              </div>
              <RangeSlider
                value={value}
                min={0.0}
                max={3599.0}
                onInput={setValue}
                className="mb-[20px]"
              />
              <div className="text-[14px] text-[#696969] font-bold leading-4.5  mb-[10px] ">
                Price:{" "}
                <span className="text-black">
                  ₹{value[0]} - ₹{value[1]}
                </span>
              </div>
              <button
                className="py-[10px] px-[14px] hover:cursor-pointer mb-[10px] bg-[#018d43] text-white text-[12px] min-w-[100px]   leading-4 tracking-[.3px] font-semibold"
                onClick={() => {
                  setIsOpenfilter(false);
                  minmaxcontrol();
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSideBar;
