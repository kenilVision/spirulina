import React ,{useState , useEffect} from 'react'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import './Query.css'

function Query() {

   

   const sortOptions  = [
        { "label": "Featured", "value": "manual",  },
        { "label": "Best selling", "value": "best-selling",  },
        { "label": "Alphabetically, A-Z", "value": "title-ascending",  },
        { "label": "Alphabetically, Z-A", "value": "title-descending",  },
        { "label": "Price, low to high", "value": "price-ascending", },
        { "label": "Price, high to low", "value": "price-descending",  },
        { "label": "Date, old to new", "value": "created-ascending",  },
        { "label": "Date, new to old", "value": "created-descending",  }
      ]

    const [selected, setSelected] = useState(sortOptions[0]); 
    const [isOpenfilter, setIsOpenfilter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const [value, setValue] = useState([0.00, 3599.00]);

    useEffect(() => {
        console.log(value); 
      }, [value]);
    

  useEffect(() => {
    if (isOpen2 ,isOpenfilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen2 , isOpenfilter ]);



  

  return (
    <>
   <div className='flex justify-between items-center mt-[2.5rem] mb-[2.5rem]'>
    <div>
        <button className='flex items-center gap-2 text-[14px] hover:cursor:pointer text-[#696969] '
        onClick={() => setIsOpenfilter(!isOpenfilter)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" fill="#696969" height="16"><path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path></svg>
            filter</button>
    </div>


    <div className=' flex md:hidden'>


    <button
        className="w-full flex justify-between gap-5 items-center  p-2 text-[14px] font-medium bg-white  text-[#696969]"
        onClick={() => setIsOpen2(!isOpen)}
      >
        Sort
        <svg width="24px" height="24px" viewBox="0 0 24 24" className={`transition transform ${isOpen2 ? "rotate-180" : ""}`} fill="#696969" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#696969"/>
        </svg>  
      </button>


    </div>




    <div className='hidden md:flex'>  
    <div className=" relative w-[200px]">
      {/* Dropdown Button */}
      <button
        className="w-full flex justify-between  items-center border border-gray-300 p-2 text-[14px] font-medium bg-white  text-[#696969]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.label}
        <svg width="24px" height="24px" viewBox="0 0 24 24" className={`transition transform ${isOpen ? "rotate-180" : ""}`} fill="#696969" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#696969"/>
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
                selected.value === option.value ? "bg-[#018D4314]  text-[#018d43]" : " text-[#696969] "
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


   <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpenfilter ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpenfilter(false)}></div>

<div>
      <div className={`fixed flex top-0 left-0 w-[calc(100vw-20px)] sm:w-[340px] h-full shadow-lg transform ${isOpenfilter ? 'translate-x-0' : '-translate-x-full'} transition-transform z-50`}>
        <div className='  bg-white w-full'>
        <div className="flex justify-between items-center p-4 min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-semibold">Filter</h2>
          <button onClick={() => setIsOpenfilter(false)} className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180">
          <svg  role="presentation" viewBox="0 0 16 14" width="16"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg>
          </button>
        </div>
      
        <div className='p-[20px] border-b border-[#dddddd] '>
        <div className="mb-[20px] font-bold w-[60px] text-[16px] border-b-2 border-black ">Availability</div>
        <ul>
      <li className='mb-[10px]'>
        <label className="flex items-center gap-2 text-sm cursor-pointer text-[18px]">
        <input
          type="checkbox"
          className="w-[16px] h-[16px] border-b border-[#dddddd]  me-[10px]"
        />
        <span className="text-black">In Stock (16)</span>
      </label>
      </li>
      <li className='mb-[10px]'>
      {/* Out of Stock */}
      <label className="flex items-center gap-2 text-sm cursor-pointer text-[18px] ">
        <input
          type="checkbox"
        disabled
          className="w-[16px] h-[16px] border-b border-[#dddddd] rounded-0   me-[10px]"
        />
        <span className="text-gray-400">Out Of Stock (0)</span>
      </label>
      </li>
      </ul>
        </div>   





       <div className='p-[20px] border-b border-[#dddddd] '>



       <div className="mb-[40px] font-bold w-[60px]  border-b-2 border-black ">Price</div>
       <RangeSlider value={value} min={0.00} max={3599.00} onInput={setValue} className='mb-[20px]' />
        <div className="text-[14px] text-[#696969] font-bold leading-4.5  mb-[10px] ">
        Price: <span className="text-black">₹{value[0]} - ₹{value[1]}</span>
        </div>
        <button className="py-[10px] px-[14px] mb-[10px] bg-[#018d43] text-white text-[12px] min-w-[100px]   leading-4 tracking-[.3px] font-semibold">
        Filter
        </button>
       </div>   
        </div>
        
      </div>
      </div>





<div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen2 ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen2(false)}></div>

      <div className={`fixed bottom-0 right-0 left-0   w-full h-[311px]  bg-white shadow-lg transform ${isOpen2 ? 'translate-y-0' : 'translate-y-full'} transition-transform z-150`}>
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b-1 border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">SORT BY :</h2>
          <button onClick={() => setIsOpen2(false)} className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180">
          <svg class="t4s-iconsvg-close" role="presentation" viewBox="0 0 16 14" width="16"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg>
          </button>
        </div>
    <div className=' overflow-y-auto max-h-[calc(311px-60px)]'>
        <div className="  bg-white  ">


        {sortOptions.map((option) => (
            <div
              key={option.value}
              className={`px-[10px] py-[15px] cursor-pointer  ${
                selected.value === option.value ? "bg-[#018D4314]  text-[#018d43]" : " text-[#696969] "
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

export default Query
