import React,{useEffect, useState} from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSelector, useDispatch } from 'react-redux'
import {add,remove} from '../Slice/cart'
import MiniCartItem from "../component/common/MiniCartItem";
function CartSideBar({ cartbarOpen, setcartbarOpen }) {
   const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()
  
      const [progress, setProgress] = useState(50);


      useEffect(() => {

        const totalPrice = carts.reduce((acc, item) => acc + item.price * item.qty, 0);
        const targetPrice = 500; // Target price for free shipping
        const newProgress = Math.min((totalPrice / targetPrice) * 100, 100); // Ensure progress doesn't exceed 100%
        setProgress(newProgress);
      }
, [carts]);  
  return (
    <>
      <div
        className={`fixed inset-0  bg-black bg-opacity-50 z-40 transition-opacity ${
          cartbarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setcartbarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[calc(100vw-65px)] sm:w-[340px] z-110 h-full bg-white shadow-lg transform ${
          cartbarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-50`}
      >
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[50px] border-b-1 border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-medium">
            SHOPPING CART
          </h2>
          <button
            onClick={() => setcartbarOpen(false)}
            className="p-2 h-[50px] w-[50px] flex justify-center transition transform duration-700 hover:rotate-180"
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

        <div className="p-4  text-center rounded-md border-b border-gray-300 shadow-md">
          <div className="text-sm text-start text-[#696969]">
            Free Shipping for all orders over{" "}
            <span className="text-red-600 font-bold">₹500.00</span>
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
        </div>
        {carts && carts.length > 0 ? (
          <div className="overflow-y-auto max-h-[calc(100vh-50px)] px-4">
          {carts.map((x) => (
            <MiniCartItem product={x}  />
          ))}
        </div>
        ):(<div className="text-center mt-[2.5rem] text-[#696969] ">
          <svg
            id="icon-cart-empty"
            width="50"
            height="50"
            fill="#696969"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="mx-auto mb-[0.625rem]"
          >
            <path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path>
          </svg>
          <p className="text-lg font-medium text-gray-700 mb-4">
            Your cart is empty.
          </p>
          <button className="w-6/10 px-5 bg-[#018d43] hover:cursor-pointer text-white py-2   mb-[0.9375rem] hover:bg-[#16569d]">
            Return To Shop
          </button>
        </div>
          
        )}
      </div>
    </>
  );
}

export default CartSideBar;
