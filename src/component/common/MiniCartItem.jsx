import React from 'react';
// import { add, remove, addwithQuantity } from '../../Slice/cart';
import { useSelector, useDispatch } from 'react-redux';

const MiniCartItem = ({ product }) => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id, name, image, price, qty, options } = product;

  const removeItem = () => {
    dispatch(remove({ id, options })); // Pass both id and options (variant)
  };

  const increaseQty = () => {
    if (qty < 10) {
      dispatch(addwithQuantity({ ...product, qty: qty + 1 }));
    }
  };

  const decreaseQty = () => {
    if (qty > 1) {
      dispatch(addwithQuantity({ ...product, qty: qty - 1 }));
    }
  };

  return (
    <div className="flex p-4 gap-2 bg-white  my-3">
      <div className="flex justify-center items-center">
        <img
          className="w-30 h-30 object-cover "
          src={image}
          alt={name}
        />
      </div>

      <div className="flex-1">
        <p className="text-md font-semibold text-gray-800">{name}</p>
        <div className="mt-1">
          <span className="text-md font-bold text-green-600">₹{price}</span>
        </div>

        {/* Display variant details here */}
        <div className="text-sm text-gray-600 mt-2">
          {options?.weight && <p>Weight: {options.weight}</p>}
          {options?.quantity && <p>Quantity: {options.quantity}</p>}
        </div>

        {/* Quantity controls */}
        <div className="mt-2 flex justify-between items-center gap-2 border border-gray-300 ">
          {/* Show bin button when qty is 1, else show minus button */}
          {qty === 1 ? (
            <button
              onClick={removeItem}
              className="p-1  text-white rounded-md "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M9 6V4h6v2" />
              </svg>
            </button>
          ) : (
            <button
              onClick={decreaseQty}
              className="p-1 "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          )}

          {/* Display Quantity */}
          <input
            type="text"
            value={qty}
            min="1"
            className="w-10 text-center border border-gray-300 rounded-md"
            readOnly
          />

          {/* Plus Button */}
          <button
            onClick={increaseQty}
            className="p-2 "
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        {/* Remove button for qty = 1 */}
        
        <button
          onClick={removeItem}
          className="mt-3 text-red-600 hover:text-red-800 flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9 6h6M4 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14M10 11v6M14 11v6" />
          </svg>
         
        </button>
      </div>
    </div>
  );
};

export default MiniCartItem;
