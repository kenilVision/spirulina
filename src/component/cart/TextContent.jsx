import React , {useState , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { RemovefromCart  , DecreaseQty ,IncreaseQty } from '../../Slice/cart'
import {  useNavigate } from "react-router-dom";
function TextContent() {
 
    const navigate = useNavigate()
    const carts = useSelector(state => state.cart.items )
    const dispatch = useDispatch()
    

    const [progress, setProgress] = useState(0);
      
    const [total,settotal] = useState()
          useEffect(() => {
           
            const totalPrice = carts.reduce((acc, item) => {
              const isCombo = item.data.type === "combo";
              const itemPrice = isCombo ? item.data.price : item.data.variants.price;
              return acc + itemPrice * item.qty;
            }, 0);
            settotal(totalPrice)
            const targetPrice = 500; 
            const newProgress = Math.min((totalPrice / targetPrice) * 100, 100); 
            setProgress(newProgress);
          }
    , [carts]);  

   

      const removeItem = (_id, type, label = null) => {
        dispatch(RemovefromCart({ _id, type, label }));
      };
      
      const increaseQty = (_id, type, label = null) => {
        console.log(_id, type, label)
        dispatch(IncreaseQty({ _id, type, label }));
      };
      
      const decreaseQty = (qty ,_id, type, label = null) => {
        if (qty > 1) {
          dispatch(DecreaseQty({ _id, type, label }));
        }
      };



  return (
    <>  
    <div className="w-full h-full bg-[#f8f8f8]">
     <div className="flex max-w-[1440px] mx-auto py-[60px] lg:py-[80px]  px-[15px] ">
     <div className="container w-3/4 p-5 mx-4 bg-white my-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-6 gap-4 font-semibold  border border-[#dddddd] rounded-t-lg ">
        <div className="col-span-2 p-2 ">Product</div>
        <div className="text-center p-2">Price</div>
        <div className="text-center p-2">Quantity</div>
        <div className="text-center p-2">Total</div>
        <div className="text-center p-2">action</div>
      </div>

      {carts.map((item , index) => (
        <div
          key={item._id}
          className={`grid grid-cols-6 gap-4 items-center border-[#dddddd] text-[#696969] p-4 border border-t-0 ${` index === carts.length - 1 ? "rounded-b-lg" : ""` }`}
        >
          {/* Product */}
          <div className="col-span-2 flex items-center hover:text-green-600 gap-4">
            
          <img
              src={`http://localhost:5050/image/${item.data.type === 'combo' ? `productCombo/${item.data.images}` : `products/${item.data.variants.image}`}`}
              alt={item.data.name}
              className="w-30 h-30 object-cover  "
            />
            <div>
              <p
              onClick={()=>navigate(`/product/${item.data.slug}`,{state:item.data.type})}
              >
                {item.data.name}
                </p>
              <div className="text-sm text-gray-500">{item.data?.variants?.label}</div>
            </div>
          </div>

          {/* Price */}
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">
            ₹{item.data.type=="combo" ?  item.data.price : item.data.variants.price }
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-center bg-[#F8F8F8] rounded-full gap-2">
                      {item.qty === 1 ? (
            <button
            onClick={()=>{
              removeItem(item.data._id, item.data.type, item.type === "combo" ? null : item.data.variants.label)
            }}
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
              onClick={()=>{
                decreaseQty(item.qty,item.data._id, item.data.type, item.data.type === "combo" ? null : item.data.variants.label);
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
            value={item.qty}
            min="1"
            className="w-10 text-center  rounded-md"
            readOnly
          />

          {/* Plus Button */}
          <button
                 onClick={()=>{
                  increaseQty(item.data._id, item.data.type, item.data.type === "combo" ? null : item.data.variants.label)
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

          {/* Total */}
          <div className="text-center font-bold text-green-600">
            ₹{item.data.type=="combo" ?  item.data.price : item.data.variants.price  * item.qty}
          </div>
          <div className="text-center font-bold text-gray-800">
          <button
            onClick={()=>{
              removeItem(item.data._id, item.data.type, item.data.type === "combo" ? null : item.data.variants.label)
            }}
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
          </div>
        </div>
      ))}
    </div>
    <div className="  w-1/4 h-fit p-5 mx-4 bg-white my-8">
        <h2 className="text-2xl font-bold mb-6">Cart total</h2>
        <div>
          <p><span className="text-green-600 ">Congratulations! </span> You've got free shipping!</p>
          <div className="flex align-items-center my-5 justify-between">
                <div >
                  <strong>Subtotal:</strong>
                </div>
                <div >
                  <div >
                    <span>   ₹{total}
                </span>
                  </div>
                </div>
              </div>
              <div className="relative w-full bg-gray-200 h-2 rounded-full mt-2 overflow-visible">
           
           <RangeSlider
             className="opacity-0 absolute pointer-events-none"
             defaultValue={[0, progress]}
             thumbsDisabled={[true, true]}
             rangeSlideDisabled={true}
           />

           <div
             className="absolute left-0 top-0 h-full bg-[#428445] rounded-full"
             style={{ width: `${progress}%` }}
           >
             <span
               className="absolute top-0 left-0 h-full w-full z-0"
               style={{
                 backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                   `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='60' height='30'><path fill='#fff' fill-opacity='0.47' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'/></svg>`
                 )}`,
                 backgroundRepeat: "repeat",
                 backgroundSize: "40px",
                 animation: "movePattern 5s linear infinite",
               }}
             />
           </div>
           <style>{`
       @keyframes movePattern {
         0% {
           background-position-x: 0px;
           background-position-y: 0px;
         }
         100% {
           background-position-x: -100px;
           background-position-y: -100px;
         }
       }
     `}</style>

           
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 640 512"
             width="26"
             className="absolute -top-3 z-10 transition-all duration-300"
             style={{ left: `calc(${progress}% - 11px)` }}
           >
             <path
               className="fill-current text-red-600"
               d="M64 48C64 21.49 85.49 0 112 0H368C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H574.9C567.1 361.7 520.4 320 464 320C407.6 320 360.9 361.7 353.1 416H286.9C279.1 361.7 232.4 320 176 320C127.9 320 86.84 350.4 70.99 392.1C66.56 385.7 64 377.1 64 368V256H208C216.8 256 224 248.8 224 240C224 231.2 216.8 224 208 224H64V192H240C248.8 192 256 184.8 256 176C256 167.2 248.8 160 240 160H64V128H272C280.8 128 288 120.8 288 112C288 103.2 280.8 96 272 96H64L64 48zM544 256V237.3L466.7 160H416V256H544z"
             ></path>
             <path
               className="fill-current text-white"
               d="M272 128H16C7.164 128 0 120.8 0 112C0 103.2 7.164 96 16 96H272C280.8 96 288 103.2 288 112C288 120.8 280.8 128 272 128zM240 160C248.8 160 256 167.2 256 176C256 184.8 248.8 192 240 192H48C39.16 192 32 184.8 32 176C32 167.2 39.16 160 48 160H240zM208 224C216.8 224 224 231.2 224 240C224 248.8 216.8 256 208 256H16C7.164 256 0 248.8 0 240C0 231.2 7.164 224 16 224H208zM256 432C256 476.2 220.2 512 176 512C131.8 512 96 476.2 96 432C96 387.8 131.8 352 176 352C220.2 352 256 387.8 256 432zM544 432C544 476.2 508.2 512 464 512C419.8 512 384 476.2 384 432C384 387.8 419.8 352 464 352C508.2 352 544 387.8 544 432z"
             ></path>
           </svg>
         </div>
         <div>
            <button className="w-full mt-3 p-2 rounded-xl text-white bg-[#36662f] "> 
              checkout 
            </button>
         </div>
        </div>
    </div>
     </div>
     </div>
    </>
  );
}

export default TextContent;
