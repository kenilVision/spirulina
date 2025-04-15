import React,{useState} from 'react'


const states = [
 "Gujarat"
  ];
  const city = [
    'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'
     ];
  
function AddressModal({  isOpen, onClose, onSubmit, initialData, editmode, changeEditMode, handleChange }) {

      
  if (!isOpen) return null;

return (
    <div className="fixed inset-0 bg-[#7e7e7e80] flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-[750px]  rounded-lg shadow-lg p-6 relative mx-5">
        <h2 className="text-xl font-semibold mb-4"> {editmode ? "Edit Address":"Add a New Address"}</h2>
        <button
          onClick={()=>{
            onClose();
            changeEditMode();
            resetForm()
        }}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:cursor-pointer hover:text-black"
        >
          ×
        </button>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Country/Region</label>
            <select
              name="country"
              value={initialData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="India">India</option>
            </select>
          </div>

          {/* <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div> */}

                    {/* <div className="relative mb-6">
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                    onChange={handleChange}
                      className="peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-4 focus:outline-none placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    fullName <span className="text-red-500">*</span>
                    </span>
                  </div> */}


                    
                        <div className="relative mb-6 hidden">
                    <input
                        type="number"
                        name="addressid"
                        value={initialData.addressid}
                        className="peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-5 focus:outline-none placeholder-transparent"
                    />
                    </div>

                    <div className="relative mb-6">
                    <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Full Name"
                        value={initialData.fullName}
                        onChange={handleChange}
                        className="peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-5 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                        fullName <span className="text-red-500">*</span>
                    </span>
                    </div>

          {/* <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div> */}
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="relative mb-6">
                    <input
                      type="tel"
                      name="phone"
                      required
                       pattern="\d{10}"
                      placeholder="Phone"
                      value={initialData.phone}
                      onChange={handleChange}
                      className="peer w-full border text-sm border-[#dddddd]  px-3 py-3 pt-5  focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    phone <span className="text-red-500">*</span>
                    </span>
                  </div>

          {/* <div>
            <label className="block font-medium mb-1">Postal/Zip Code</label>
            <input
              type="text"
              name="zip"
              maxLength="6"
              pattern="\d{6}"
              placeholder="Postal/Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div> */}

                    <div className="relative mb-6">
                    <input
                      type="text"
                      name="zip"
                      maxLength="6"
                      pattern="\d{6}"
                      placeholder="Postal/Zip Code"
                      value={initialData.zip}
                      onChange={handleChange}
                      required
                      className="peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-5  focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    Zip Code <span className="text-red-500">*</span>
                    </span>
                  </div>
                  </div>
          {/* <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div> */}


                     <div className="relative mb-6">
                    <input
                      type="text"
                      name="address1"
                      placeholder="Address Line 1"
                      value={initialData.address1}
                      onChange={handleChange}
                      required
                      className="peer w-full border text-sm  border-[#dddddd] px-3 py-3 pt-5  focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    Address Line 1 <span className="text-red-500">*</span>
                    </span>
                  </div>

          {/* <div>
            <label className="block font-medium mb-1">Apartment, suite, etc.</label>
            <input
              type="text"
              name="address2"
              placeholder="Apartment, suite, etc."
              value={formData.address2}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div> */}


                    <div className="relative mb-6">
                    <input
                       type="text"
                       name="address2"
                       placeholder="Apartment, suite, etc."
                       value={initialData.address2}
                       onChange={handleChange}
                      required
                      className="peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-5  focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    Apartment, suite, etc.<span className="text-red-500">*</span>
                    </span>
                  </div>


                  <div  className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <select
              name="state"
              value={initialData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>


          
          {/* <div className="relative mb-6">
                    <input
                       type="text"
                       name="address2"
                       placeholder="Apartment, suite, etc."
                       value={formData.address2}
                       onChange={handleChange}
                      required
                      className="peer w-full border border-[#dddddd] px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent"
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                    Apartment, suite, etc.<span className="text-red-500">*</span>
                    </span>
                  </div> */}

          <div>
            <select
              name="city"
              value={initialData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select city</option>
              {city.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
            </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="default"
              name="default"
              checked={initialData.default}
              onChange={handleChange}
              className="w-4 h-4 "
            />
            <label htmlFor="default">Set as default address</label>
          </div>

          <div className="flex  space-x-3 pt-2">
          <button
              type="submit"
              className="px-4 py-2 text-[14px] bg-[#67BB8E] hover:cursor-pointer text-white "
            >
              {editmode ? "Update Address":"Add Address"}
            </button>
            <button
              type="button"
              onClick={()=>{
                onClose();
                changeEditMode();
                resetForm()
            }}
              className="px-4 py-2 border text-[14px] bg-[#16569D] hover:cursor-pointer text-white "
            >
              Cancel
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressModal
