import React, { useState, useEffect } from "react";
import { Getaddress } from "../../../Api/address";

const states = ["Gujarat"];
const cities = ["Ahmedabad", "Surat", "Vadodara", "Rajkot"];

function BillingAddress({
  selectedType,
  setSelectedType,
  formData,
  setFormData,
  errors,
  setErrors
}) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(true);
  const limit = 5;
  const page = 1;


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "new") {
      setShowNewAddressForm(true);
      setSelectedAddressId(value);
      setFormData({
        country: "India",
        fullname: "",
        phone: "",
        zip: "",
        isDefault: false,
        address: "",
        address2: "",
        state: "",
        city: "",
      });
      setErrors({});
    } else {
      setShowNewAddressForm(true);
      setSelectedAddressId(value);
      
      const selected = addresses.find((addr) => addr._id === value);
      if (selected) {
        setFormData({
          country: "India",
          addressId: selected._id,
          fullname: selected.fullname || "",
          phone: selected.phone || "",
          zip: selected.zip || "",
          isDefault: false,
          address: selected.address || "",
          address2: selected.address2 || "",
          state: selected.state || "",
          city: selected.city || "",
        });
        setErrors({});
      }
    }
  };

  const resetForm = () => {
    setFormData({
      country: "India",
      fullname: "",
      phone: "",
      zip: "",
      isDefault: false,
      address: "",
      address2: "",
      state: "",
      city: "",
    });
    setErrors({});
  };

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        const addressRes = await Getaddress(page, limit);
        const addressList = addressRes?.customerAddresss || [];
        setAddresses(addressList);
        const defaultAddress = addressList.find(addr => 
          addr.title === "Default Address" || addr.isDefault
        ) || addressList[0];
  
        if (defaultAddress) {
          setSelectedAddressId(defaultAddress._id);
        } else {
          resetForm();
        }
      } catch (error) {
        console.error("Failed to load addresses:", error);
      } finally {
        setLoading(false);
      }
    };
  
    loadUserData();
  }, []);

  useEffect(() => {
    if (selectedAddressId) {
      handleSelectChange({ target: { value: selectedAddressId } });
    }
  }, [selectedAddressId]);

  const selectedAddress = addresses.find(
    (addr) => addr._id === selectedAddressId
  );

  return (
    <div className="mt-[15px]">
      <div>
        <h2 className="text-lg font-semibold mb-2">Billing Address</h2>
      </div>

      {/* Same as shipping address option */}
      <div
        className={`border rounded-t-lg cursor-pointer ${
          selectedType === "same" ? "border-[#018d43]" : "border-gray-300"
        }`}
        onClick={() => setSelectedType("same")}
      >
        <div
          className={`flex p-4 rounded-t-lg items-start justify-between ${
            selectedType === "same" ? "bg-[#F3F8F4]" : "bg-white"
          }`}
        >
          <div className="flex items-start gap-3">
            <input
              type="radio"
              id="same"
              name="billingAddress"
              checked={selectedType === "same"}
              onChange={() => setSelectedType("same")}
              className="accent-green-600 w-4 h-4 mt-1"
            />
            <label htmlFor="same" className="text-gray-800 font-medium">
              Same as shipping address
            </label>
          </div>
        </div>
      </div>

      {/* Different billing address option */}
      <div
        className={`border rounded-b-lg cursor-pointer ${
          selectedType === "different" ? "border-[#018d43]" : "border-gray-300"
        }`}
        onClick={() => {
          setSelectedType("different");
        }}
      >
        <div
          className={`flex p-4 items-center gap-3 ${
            selectedType === "different" ? "bg-[#F3F8F4]" : "bg-white"
          }`}
        >
          <input
            type="radio"
            id="different"
            name="billingAddress"
            checked={selectedType === "different"}
            onChange={() => {
              setSelectedType("different");
              handleSelectChange({ target: { value: selectedAddressId } });
            }}
            className="accent-green-600 w-4 h-4"
          />
          <label className="text-gray-800 font-medium">
            Use a different billing address
          </label>
        </div>

        {/* Content that appears when "different" is selected */}
        <div
          className={`bg-[#F4F4F4] overflow-hidden transition-all rounded-b-lg duration-300 ${
            selectedType === "different" ? "h-auto p-5" : "h-0 p-0"
          }`}
        >
          {loading ? (
            <div className="text-center py-4">Loading addresses...</div>
          ) : (
            <>
              <div className="rounded-b-lg">
                <label className="block font-medium mb-1">Select Address</label>
                <select
                  className="w-full border bg-white border-gray-300 rounded px-3 py-2"
                  value={selectedAddressId}
                  onChange={handleSelectChange}
                >
                  {!showNewAddressForm && selectedAddressId === "" && (
                    <option value="" disabled>
                      Select an address
                    </option>
                  )}
                  {addresses.map((address) => (
                    <option key={address._id} value={address._id}>
                      {address.fullname}, {address.address}, {address.city}, {address.state} - {address.zip}
                    </option>
                  ))}
                  <option value="new">Add New Address</option>
                </select>
              </div>

              {showNewAddressForm && (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {/* Form fields for address input */}
                  <div>
                    <label className="block font-medium mb-1">
                      Country/Region
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                      className="w-full border border-gray-300  bg-white rounded px-3 py-2"
                    >
                      <option value="India">India</option>
                    </select>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="fullname"
                      required
                      placeholder="Full Name"
                      value={formData.fullname}
                      onChange={handleFormChange}
                      className={`peer w-full border text-sm border-[#dddddd] bg-white px-3 py-3 pt-5 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent ${
                        errors.fullname ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                      Full Name <span className="text-red-500">*</span>
                    </span>
                    {errors.fullname && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="\d{10}"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className={`peer w-full border text-sm border-[#dddddd] px-3 bg-white py-3 pt-5 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent ${
                          errors.phone ? 'border-red-500' : ''
                        }`}
                      />
                      <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                        Phone <span className="text-red-500">*</span>
                      </span>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="zip"
                        maxLength="6"
                        pattern="\d{6}"
                        placeholder="Postal/Zip Code"
                        value={formData.zip}
                        onChange={handleFormChange}
                        required
                        className={`peer w-full border text-sm border-[#dddddd] px-3 py-3 bg-white pt-5 focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent ${
                          errors.zip ? 'border-red-500' : ''
                        }`}
                      />
                      <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                        Zip Code <span className="text-red-500">*</span>
                      </span>
                      {errors.zip && (
                        <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address Line 1"
                      value={formData.address}
                      onChange={handleFormChange}
                      required
                      className={`peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent ${
                        errors.address ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                      Address Line 1 <span className="text-red-500">*</span>
                    </span>
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="address2"
                      placeholder="Apartment, suite, etc."
                      value={formData.address2}
                      onChange={handleFormChange}
                      className={`peer w-full border text-sm border-[#dddddd] px-3 py-3 pt-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#018d43] placeholder-transparent
                        ${errors.address ? 'border-red-500' : '' }
                        `}
                    />
                    <span className="absolute left-3 text-sm text-[#696969] transition-all duration-200 top-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600">
                      Apartment, suite, etc.
                    </span>
                    {errors.address2 && (
                      <p className="text-red-500 text-xs mt-1">{errors.address2}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <select
                        name="state"
                        value={formData.state}
                        required
                        onChange={handleFormChange}
                        className={`w-full border border-gray-300 bg-white rounded px-3 py-2 ${
                          errors.state ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                      )}
                    </div>

                    <div>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleFormChange}
                        required
                        className={`w-full border border-gray-300 bg-white rounded px-3 py-2 ${
                          errors.city ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BillingAddress;