import React from 'react';
// import { add, remove, addwithQuantity } from '../../Slice/cart';
import { RemovefromCart , AddtoCart , DecreaseQty ,IncreaseQty } from '../../Slice/cart'
import { useDispatch , useSelector } from 'react-redux';
import {checkStock} from '../../Api/product'
import { showTimedNotification } from '../../Slice/notification';


const MiniCartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { _id, name,  variants ,  type } = product.data;
  const qty = product.qty
  const cart = useSelector((state) => state.cart);

  const removeItem = (_id, type, label = null) => {
    dispatch(RemovefromCart({ _id, type, label }));
  };
  
  const increaseQty = async (qty, _id, type, label = null , variantsId) => {

                             let stockData;
                            console.log(variantsId)
                        if (type === "product") {
                          stockData = {
                            productId: _id,
                            variantId: variantsId,
                            quantity: qty + 1,
                            type: type,
                          };
                        } else {
                          stockData = {
                            comboId: _id,
                            quantity: 1,
                            type: type,
                          };
                        }
                      
                        const stockCheck = await checkStock(stockData); 
                  
                        if (!stockCheck?.success) {
                          dispatch(showTimedNotification({
                                                          message: stockCheck.response.data.message
                                                        }));
                          return;
                        }
                  
                        if (cart.totalQuantity + 1 > 50) {
                          console.warn("Cart limit exceeded! You can only have up to 50 items in the cart.");
                            dispatch(showTimedNotification({
                                                            message: "Cart limit exceeded! You can only have up to 50 items in the cart."
                                                          }));
                          return;
                        }


    dispatch(IncreaseQty({ _id, type, label }));
  };
  
  const decreaseQty = (_id, type, label = null) => {
    if (qty > 1) {
      dispatch(DecreaseQty({ _id, type, label }));
    }
  };

 
  return (
    <div className="flex p-4 gap-2 border border-[#DDDDDD] bg-white  ">
      <div className="flex justify-center items-center">
      <img
              src={`http://localhost:5050/image/${type === 'combo' ? `productCombo/${product.data.images}` : `products/${variants.image}`}`}
              alt={name}
              className="w-30 h-30 object-cover "
            />
      </div>

      <div className="flex-1 overflow-hidden">
        <p className="text-md font-semibold text-gray-800 truncate">{name}</p>
        <div className="text-sm text-gray-600 mt-2">
          {variants?.label}
        </div>
        <div className="mt-1">
          <span className="text-md font-bold text-green-600">₹{type=="combo" ?  product.data.price : variants.price }</span>
        </div>

        {/* Display variant details here */}

        {/* Quantity controls */}
        <div className="mt-2 max-w-[120px] flex justify-between items-center gap-2 border  ">
          {/* Show bin button when qty is 1, else show minus button */}
          {qty === 1 ? (
            <button
            onClick={()=>{
              removeItem(_id, type, type === "combo" ? null : variants.label)
            }}
              className="p-1  text-white rounded-md "
              type="button"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                 className='stroke-black hover:stroke-green-600'
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
            </button>
          ) : (
            <button
              onClick={()=>{
                decreaseQty(_id, type, type === "combo" ? null : variants.label);
              }}
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
            className="w-10 text-center  rounded-md"
            readOnly
          />

          {/* Plus Button */}
          <button
                 onClick={()=>{
                  increaseQty( qty ,_id, type, type === "combo" ? null : variants.label , type === "combo" ? null : variants.variantid)
                }}
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
          onClick={()=>{
            removeItem(_id, type, type === "combo" ? null : variants.label)
          }}
          className="mt-3  flex items-center gap-1"
        >
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" fill="none"  
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        className='stroke-black hover:stroke-green-600'
        >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
         
        </button>
      </div>
    </div>
  );
};

export default MiniCartItem;
