import React, { useState, useEffect } from "react";
import SortBottomslider from "./SortBottomslider";
import FilterSideBar from "./FilterSideBar";
import "./Query.css";

function Query({
  sortOptions,
  selected,
  setSelected,
  isOpenfilter,
  setIsOpenfilter,
  isOpen,
  setIsOpen,
  pagination,
  isOpen2,
  setIsOpen2,
  value,
  setValue,
  minmaxcontrol,
  stock,
  instock,
  setinstock,
}) {


 

  useEffect(() => {
    if (isOpen2 || isOpenfilter || isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen2 , isOpen, isOpenfilter]);     // Effect to manage body overflow based on modal visibility
  
  return (
    <>
      <div className="flex justify-between items-center mt-[2.5rem] mb-[2.5rem]">
        <div>
          <button
            className="flex items-center gap-2 text-[14px] hover:cursor:pointer text-[#696969] "
            onClick={() => {
              setIsOpenfilter(!isOpenfilter)
              
            }
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              fill="#696969"
              height="16"
            >
              <path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path>
            </svg>
            filter
          </button>
        </div>

        <div className=" flex md:hidden">
          <button
            className="w-full flex justify-between gap-5 items-center  p-2 text-[14px] font-medium bg-white  text-[#696969]"
            onClick={() => setIsOpen2(!isOpen)}
          >
            Sort
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              className={`transition transform ${isOpen2 ? "rotate-180" : ""}`}
              fill="#696969"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                fill="#696969"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex">
          <div className=" relative w-[200px]">
            {/* Dropdown Button */}
            <button
              className="w-full flex justify-between  items-center border border-gray-300 p-2 text-[14px] font-medium bg-white  text-[#696969]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selected.label}
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className={`transition transform ${isOpen ? "rotate-180" : ""}`}
                fill="#696969"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                  fill="#696969"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0  bg-white  w-[280px] overflow-visible    mt-2 border border-gray-200 z-50">
                <div className="absolute left-[65%] -top-2 w-4 h-4 bg-white transform rotate-45 "></div>
                <div className="overflow-y-scroll h-[280px] shadow-lg text-[14px] font-medium py-[15px]  leading-4.5 ">
                  {sortOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`px-[10px] py-[15px] cursor-pointer  ${
                        selected.value === option.value
                          ? "bg-[#018D4314]  text-[#018d43]"
                          : " text-[#696969]"
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
            )}
          </div>
        </div>
      </div>

      <FilterSideBar 
        isOpenfilter={isOpenfilter}
        setIsOpenfilter={setIsOpenfilter}
        value={value}
        setValue={setValue}
        minmaxcontrol={minmaxcontrol}
        pagination={pagination}
        stock={stock}
        instock={instock}
        setinstock={setinstock}
      />
      <SortBottomslider
        isOpen2={isOpen2}
        setIsOpen2={setIsOpen2}
        selected={selected}
        setSelected={setSelected}
        sortOptions={sortOptions} 
        />
 
    </>
  );
}

export default Query;
