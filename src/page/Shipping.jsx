import React from 'react'

function Shipping() {
  return (
    <section className="bg-white my-[50px] md:my-[60px] leading-8">
  <div className="max-w-[1440px] mx-auto text-[#696969] text-[18px] px-[15px]">
    <div className="mb-8 text-center">
      <h1 className="text-[37px] text-black text-center font-bold">Shipping Policy</h1>
    </div>

    <div className="space-y-6">
      <ul className="list-disc ps-[17px] ">
        <li>
          Once your order is processed, you'll receive a confirmation email. It may be delayed due to technical issues.
        </li>
        <li>
          During checkout, enter your address and choose the shipping option, then click{" "}
          <a
            className="underline text-[#018d43]"
          >
            Continue to shipping.
          </a>
        </li>
        <li>Please mention your address correctly.</li>
        <li>
          Local delivery is available within Surat City. If unavailable, your address does not qualify for local delivery.
        </li>
        <li>
          Free shipping is available on all orders above <strong className='text-black'>500 Rupees</strong>.
        </li>
        <li>Delivery notifications will include real-time tracking information.</li>
        <li>Orders typically ship within 2 to 7 working days.</li>
        <li>You can track your order on the track menu.</li>
        <li>
          <a
            
            className="underline text-[#018d43]"

          >
            Track Your Order
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
  )
}

export default Shipping
