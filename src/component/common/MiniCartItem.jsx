import React from 'react';

const MiniCartItem = ({ product  }) => {
  const {
      name,
      image,
      price,
    qty,
  } = product;

  return (
    <div className="flex p-5 gap-x-2">
      <a  className=" flex items-center">
        <img
          className="lazyautosizes"
          width="120"
          height="120"
          src={image}
          alt={name}

        />
      </a>

      <div className="">
        <p className="">
          {name}
        </p>

       
            <div className="">
              <span className="money">₹{price}</span>
            </div>

        <div className=" ">
          <div className="flex border border-[#dddddd] rounded-md overflow-hidden w-fit"> 
            <button  className="" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>

            </button>

            <input
              type="text"
              value={qty}
              min="1"
              className="w-10 text-center "
              readOnly
            />

            <button  className="t4s-quantity-selector is--plus" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>

            </button>
          </div>

          <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M9 6V4h6v2" />
              </svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCartItem;
