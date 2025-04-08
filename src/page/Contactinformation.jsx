import React from 'react'

function Contactinformation() {
  return (
    <section className="bg-white my-[50px] md:my-[60px]">
    <div className="max-w-[1440px] mx-auto text-[#696969] text-[16px] px-[15px]">
      <div className="mb-8 text-center">
        <h1 className="text-[32px] text-black text-center font-bold">Contact Information</h1>
      </div>
  
      <div className="space-y-4">
        <p>
          <strong className='text-black'>Trade Name:</strong> SPIRU SWASTHA INDIA PRIVATE LIMITED
        </p>
        <p>
          <strong className='text-black'>Email:</strong>
          <a
            className="underline text-[#018d43]"
          >
            info@spiruswastha.com
          </a>
        </p>
        <p>
          <strong className='text-black' >Physical Address:</strong><br />
          2nd Floor, Flat No. A/203,<br />
          Dev Prayag Residency, Opp. Shraddhadip Society,<br />
          Causeway Singanpor Road, Singanpor,<br />
          Surat, Gujarat, 395004
        </p>
        <p>
          <strong className='text-black'>GST Number:</strong> 24ABKCS6852Q1ZH
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Contactinformation
