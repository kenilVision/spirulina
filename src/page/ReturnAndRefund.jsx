import React from 'react'

function ReturnAndRefund() {
  return (
    <section className="bg-white my-[50px] md:my-[60px]">
  <div className="max-w-[1440px] mx-auto text-[#696969] text-[16px] px-[15px]">
    <div className="mb-8 text-center">
      <h1 className="text-[32px] text-black text-center font-bold">Refund Policy</h1>
    </div>

    <div className="space-y-6">
      <p>Last Updated: 31-12-2024</p>
      <p>
        Spiru Swastha values customer satisfaction and strives to make the cancellation, returns, and refund process as seamless as possible. This policy outlines the terms and conditions governing cancellations, returns, exchanges, and refunds.
      </p>

      <h2 className="text-[24px] text-black font-semibold mb-2">1. Cancellation Policy</h2>
      <h3 className="font-semibold text-[18px] text-black">Cancellation Before Shipment</h3>
      <ul className="list-disc ps-[17px]">
        <li>Orders can be canceled at any time before the shipment is dispatched. To cancel an order, contact our customer support team via email at <a className="underline text-[#018d43]" >info@spiruswastha.com</a>.</li>
        <li>Upon successful cancellation, a refund will be processed within <strong className='text-black'>2–5 business days</strong> to the original payment method.</li>
      </ul>

      <h3 className="font-semibold text-[18px] text-black">Cancellation After Shipment</h3>
      <ul className="list-disc ps-[17px] ">
        <li>Once an order has been dispatched, cancellations will no longer be accepted. In such cases, customers may initiate a return upon receiving the item.</li>
      </ul>

      <h2 className="text-[24px] text-black font-semibold mb-2">2. Return Policy</h2>
      <p>We offer a <strong className='text-black'>30-day return window</strong> for eligible products, allowing you to return items within 30 days of receipt. Returns must meet the following conditions:</p>

      <h3 className="font-semibold text-black text-[18px]">Eligibility for Returns</h3>
      <ul className="list-disc ps-[17px] ">
        <li>The item must be in its original condition, unused, unworn, with tags, and in its original packaging.</li>
        <li>Proof of purchase (receipt or invoice) is required.</li>
      </ul>

      <h3 className="font-semibold text-black text-[18px]">Non-Returnable Items</h3>
      <ul className="list-disc ps-[17px] ">
        <li>Perishable goods (e.g., food items).</li>
        <li>Custom or personalized products.</li>
        <li>Hazardous materials or flammable liquids and gases.</li>
        <li>Sale items and gift cards.</li>
      </ul>

      <h3 className="font-semibold text-black text-[18px]">How to Initiate a Return</h3>
      <ol className="list-decimal ps-[20px] ">
        <li>Contact our customer support at <a className="underline text-[#018d43]">info@spiruswastha.com</a> to request a return.</li>
        <li>Provide your order ID, proof of purchase, and images or videos (if the item is damaged or defective).</li>
        <li>Once the return is approved, we will provide a return shipping label and instructions for sending the item back.</li>
        <li>Returns must be sent to the following address:<br />
          <strong className='text-black'>Spiru Swastha Pvt Ltd,</strong><br />
          2nd Floor, Flat No. A/203,<br />
          Dev Prayag Residency, Opp. Shraddhadip Society,<br />
          Causeway Singanpor Road, Singanpor, Surat, Gujarat, 395004
        </li>
      </ol>

      <h3 className="font-semibold text-black text-[18px]">Conditions for Return Denial</h3>
      <ul className="list-disc ps-[17px] ">
        <li>The product’s original packaging, tags, or seals are missing or tampered with.</li>
        <li>The return request is initiated beyond the 30-day return window.</li>
        <li>The product is a free gift or promotional item.</li>
      </ul>

      <h2 className="text-[24px] text-black font-semibold mb-2">3. Damaged or Incorrect Items</h2>
      <p>If you receive a damaged, defective, or incorrect product, please follow these steps:</p>
      <ol className="list-decimal ps-[20px] ">
        <li>Contact us at <a className="underline" >info@spiruswastha.com</a> within 5 days of receiving the order.</li>
        <li>Provide images or videos clearly showing the damage, defect, or incorrect item, along with batch details and the invoice.</li>
        <li>Once verified, we will arrange for a replacement or initiate a refund, subject to availability.</li>
      </ol>

      <h2 className="text-[24px] text-black font-semibold mb-2">4. Refund Policy</h2>
      <h3 className="font-semibold text-black text-[18px]">Refund Processing</h3>
      <ul className="list-disc ps-[17px] ">
        <li>Refunds are processed within <strong>2–5 business days</strong> of receiving and inspecting the returned item.</li>
        <li>Refunds will be credited to the original payment method. It may take an additional <strong>2–3 business days</strong> for the amount to reflect in your account, depending on your bank or payment provider.</li>
      </ul>

      <h3 className="font-semibold text-black text-[18px]">For Cash on Delivery (COD) Orders</h3>
      <ul className="list-disc ps-[17px] ">
        <li>Refunds for COD orders will be processed via bank transfer. Customers must provide their bank account details for processing.</li>
      </ul>

      <h3 className="font-semibold text-black text-[18px]">Follow-Up on Refunds</h3>
      <ul className="list-disc ps-[17px] ">
        <li>If you do not receive your refund within <strong>15 business days</strong> of approval, contact us at <a className="underline text-[#018d43]" >info@spiruswastha.com</a>.</li>
      </ul>

      <h2 className="text-[24px] text-black font-semibold mb-2">5. European Union (EU) 14-Day Cooling-Off Period</h2>
      <p>
        If your order is being shipped to the EU, you have the right to cancel or return your order within 14 days for any reason. Items must meet the same return eligibility criteria as outlined above. Refunds for EU returns will be processed within 14 business days of receiving the item.
      </p>

      <h2 className="text-[24px] text-black font-semibold mb-2">6. Contact Information</h2>
      <p><strong className='text-black'>Email:</strong> <a className= " text-[#018d43] underline" >info@spiruswastha.com</a></p>
      <p>
        <strong className='text-black'>Address:</strong><br />
        2nd Floor, Flat No. A/203,<br />
        Dev Prayag Residency, Opp. Shraddhadip Society,<br />
        Causeway Singanpor Road, Singanpor, Surat, Gujarat, 395004
      </p>

      <p className="mt-6">
        By purchasing from Spiru Swastha, you agree to this Cancellation, Returns, and Refund Policy.
      </p>
    </div>
  </div>
</section>

  )
}

export default ReturnAndRefund
