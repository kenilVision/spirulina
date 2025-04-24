import React from 'react';

function Bill({ cart, total }) {

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className="w-full max-w-[520px] h-full p-[38px] rounded-lg ">
     
      <section>
        
        <div className="overflow-y-auto max-h-[444px]">
         

          {cart.map((item, index) => {
            // Determine price and image based on item type
            const isProduct = item.data.type === "product";
            const price = isProduct 
              ? item.data.variants?.price * item.qty 
              : item.data.price * item.qty;
            const image = isProduct 
              ? item.data.variants?.images?.[0] 
              : item.data.image;
            const variantLabel = isProduct 
              ? item.data.variants?.label 
              : "Combo";

            return (
              <div key={index} className="grid grid-cols-4 items-center py-4 ">
                <div className="flex relative items-center justify-center">
                  <div className='relative'>
                <img
                    src={
                      isProduct
                        ? `http://localhost:5050/image/products/${item.data.variants?.image}`
                        : `http://localhost:5050/image/productCombo/${item.data.images}`
                    }
                    alt={item.data.name}
                    className="w-16 h-16 object-cover rounded"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                  <div className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {item.qty}
                </div>
                </div>
                </div>

                <div>
                  <p className="font-medium text-sm">{item.data.name}</p>
                  <p className="text-xs text-gray-500">
                    {variantLabel}
                  </p>
                </div>


                <div className="text-right font-semibold">₹{price}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-medium mb-2">Discount</h3>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Discount code"
            className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
          type="button"
            className=" text-[#696969] border border-[#dddddd] shadow-sm  px-4 py-2 rounded bg-transparent transition"
          >
            Apply
          </button>
        </form>
      </section>

      <section className="mt-6  pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal. {totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          <span >
             FREE 
          </span>
        </div>

        <div className="flex justify-between text-lg font-semibold mt-4 pt-2">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        
      </section>
    </div>
  );
}

export default Bill;