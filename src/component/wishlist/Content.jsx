import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AddtoWishlist, RemovefromWishlist } from '../../Slice/wishlist';
import ProductcardWishlist from '../common/ProductcardWishlist';
function Content() {
const wishlist = useSelector(state => state.wishlist.items);
const dispatch = useDispatch()



  return (
    <section 
    className=" bg-white"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
      >

        {wishlist.length > 0 ? (
          <>
          <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
          <div 
        className='grid grid-cols-1  sm:grid-cols-2 my-[80px] gap-x-[30px] gap-y-[30px] md:grid-cols-3 lg:grid-cols-4  ' 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        >   
        {wishlist.map((product, index) => ( 
          <ProductcardWishlist key={product._id || index} product={product} type={product.type} />
        ))}
               </div>
               </div>
          </>
        ):(

        <div className="max-w-[1440px] mx-auto grid px-[15px] mt-[0] mb-[50px] md:mt-[80px] md:mb-[60px] lg:my-[80px]  text-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="mx-auto h-[100px] w-[100px] md:h-[150px] md:w-[150px] text-[#dddddd] mb-4"
          fill="currentColor"
        >
          <path d="M298.7 97.64L257 143.7L213.5 97.91C173.6 57.42 110 52.6 70.71 86.82L70.53 86.97C21.8 128.7 19.4 203.3 62.71 248.2L62.73 248.2L256.4 447.9C256.5 447.9 256.6 447.8 256.7 447.7L269.1 434.8C273.4 445.3 278.7 455.3 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C102.8 16.41 184.1 24.47 234.3 73.46C235 74.19 235.7 74.92 236.5 75.67L256.4 96.64L275.4 75.67C276.3 74.76 277.2 73.87 278.1 72.99C328.3 24.42 408.3 16.56 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C497.4 204.2 487.3 200.5 476.8 197.8C486.3 158.8 474.8 115.3 442.4 87C400.9 52.33 338.2 57.7 298.7 97.64V97.64zM454.6 368L491.3 404.7C497.6 410.9 497.6 421.1 491.3 427.3C485.1 433.6 474.9 433.6 468.7 427.3L432 390.6L395.3 427.3C389.1 433.6 378.9 433.6 372.7 427.3C366.4 421.1 366.4 410.9 372.7 404.7L409.4 368L372.7 331.3C366.4 325.1 366.4 314.9 372.7 308.7C378.9 302.4 389.1 302.4 395.3 308.7L432 345.4L468.7 308.7C474.9 302.4 485.1 302.4 491.3 308.7C497.6 314.9 497.6 325.1 491.3 331.3L454.6 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256z" />
        </svg>

        <h4 className="text-[30px] font-semibold text-gray-800 mb-2">Wishlist is empty.</h4>
        <p className="text-[#696969] text-[14px]">
          You don't have any products in the wishlist yet.<br />
          You will find a lot of interesting products on our Shop
          page.
        </p>
        </div>
        
        )}
      
    </section>
  );
}

export default Content;
