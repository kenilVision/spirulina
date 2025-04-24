import React, { useState, useEffect } from 'react';
import { Getaddress ,createAddress ,deleteaddress, UpdateAddress }from '../../../Api/address';
import { Tooltip } from 'react-tooltip';
import AddressModal from './AddressModal';

function ShipTo({ user, selectedAddressId, setSelectedAddressId}) {
  const [addresses, setAddresses] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
   const [trigger , settrigger] = useState(true)
     const [showModal, setShowModal] = useState(false);
     const [editmode, seteditmode] = useState(false);
     const [editData, setEditData] = useState(null);

  const limit = 5;
  const page = 1;

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        const addressRes = await Getaddress(page, limit);
        const addressList = addressRes?.customerAddresss || [];
        setAddresses(addressList);
        // Automatically select default address
        const defaultTitleAddress = addressList.find(addr => addr.title === 'Default Address');
        if (defaultTitleAddress) {
          setSelectedAddressId(defaultTitleAddress._id);
        } else if (addressList.length > 0) {
          setSelectedAddressId(addressList[0]._id); // fallback to first one
        }
      } catch (error) {
        console.error("Failed to load addresses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [trigger]);

  const handleChange = (id) => {
    setSelectedAddressId(id);
  };


  const handleEdit  = (item) => {
    let  data ={
        addressid: item._id,
        fullName: item.fullname,
        phone: item.phone,
        zip: item.zip,
        address1: item.address,
        address2: item.address2,
        state: item.state,
        city: item.city,
        country:  'India',
        isdefault: item.isDefault,
      }
      console.log(data)
      setEditData(data);
      seteditmode(true);
      setShowModal(true);
    }

    const handleformChange = (e) => {
      const { name, value, type, checked } = e.target;
      setEditData({ ...editData, [name]: type === 'checkbox' ? checked : value });
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const {
          addressid,
          fullName,
          phone,
          zip,
          address1,
          address2,
          state,
          city,
          country,
          isdefault,
        } = editData;
      
        // Create the newAddress object conditionally
        const newAddress = {
          fullname: fullName,
          address: address1,
          address2: address2,
          zip: zip,
          state: state,
          city: city,
          phone: phone,
          country: country,
          isDefault: isdefault,
        };
      
        // Add addressid only if it exists
        if (addressid) {
          newAddress.addressId = addressid;
          await UpdateAddress(newAddress)
          settrigger(!trigger)
        } else {
          try {
            await createAddress(newAddress);
            settrigger(!trigger)
          } catch (error) {
            console.error('Error creating address:', error);
          }
        }
      
        setShowModal(false);
        setEditData(null);
      };
    const removeAd=async (id)=>{
      const confirmed = window.confirm('Are you sure you want to delete this address?');
    if (confirmed) {
      const res  = await deleteaddress(id)
      settrigger(!trigger)
    }
    }


  const selectedAddress = addresses.find(addr => addr._id === selectedAddressId);

  return (
    <>
    <div className="py-4 border-b border-b-[#dedede]">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <span className="text-[#707070] hover:text-[#018d43] text-base font-medium">Ship to</span>
        <button className="rounded-full bg-[#F2F9F5] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            focusable="false"
            stroke="#018d43"
            strokeWidth={2}
            className="h-3 w-3 fill-none block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.75 7.354 9.396a.5.5 0 0 1-.708 0L2 4.75"
            ></path>
          </svg>
        </button>
      </div>

      {!isExpanded && selectedAddress && (
        <div className="mt-2 text-sm text-gray-700 truncate">
          <span className="font-medium">{selectedAddress.fullname}</span>, {selectedAddress.address}, {selectedAddress.city},{selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zip}, {selectedAddress.country}
        </div>
      )}

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {loading ? (
            <p>Loading addresses...</p>
          ) : addresses.length === 0 ? (
            <p className="text-sm text-gray-500">No addresses found.</p>
          ) : (
            addresses.map((addr) => (
                <label
                  key={addr._id}
                  className={`flex items-center justify-between rounded-xl p-4 cursor-pointer transition-all ${
                    selectedAddressId === addr._id ? 'bg-[#F2F9F5]' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      id={`address-${addr._id}`}
                      name="shippingAddress"
                      checked={selectedAddressId === addr._id}
                      onChange={() => handleChange(addr._id)}
                      className="mt-1 accent-green-600"
                    />
                    <div>
                      <p className="font-medium text-sm text-black">{addr.fullname}, {addr.address}</p>
                      <p className="text-xs text-gray-500">{addr.city}, {addr.state}, {addr.zip}, {addr.country}</p>
                    </div>
                  </div>
                  {selectedAddressId === addr._id && (
                  <div className="text-gray-400 text-sm" 
                  data-tooltip-id={`tooltip-${addr._id}`}
                  data-tooltip-place="top"
                    
                  data-tooltip-clickable="true"
                  data-tooltip-open-on-click
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 flex-col w-5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cy="5" cx="12" r="2" />
                      <circle cy="12" cx="12" r="2" />
                      <circle cy="19" cx="12" r="2" />
                    </svg>
                  </div>
                )}
               <Tooltip
                    id={`tooltip-${addr._id}`} 
                    place="top"
                    openOnClick
                    clickable
                    style={{ padding: '5px', fontSize: '13px' ,backgroundColor:'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.1)', borderRadius:"10px" }}
                    >
                    <div className="flex flex-col gap-2 ">
                        <button
                           onClick={() => handleEdit(addr)}
                        className="text-[#018d43]  px-2 py-1 rounded"
                        >
                        Edit
                        </button>
                        <button
                          onClick={() => removeAd(addr._id)}
                        className="text-red-500 px-2 py-1 rounded"
                        >
                        Delete
                        </button>
                    </div>
                    </Tooltip>
                 
                </label>
              ))

          )}
              <div>
              <button
                type="button"
                // onClick={onClick}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white  text-[#018d43]  transition-all"
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    className="w-4 h-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" d="M2 7h10M7 2v10" />
                  </svg>
                </span>
                <span 
                className="text-sm  font-medium"
                onClick={() => {

                  let data ={
                    fullName: '',
                    phone: '',
                    zip: '',
                    address1: '',
                    address2: '',
                    state: '',
                    city: '',
                    country: 'India',
                    isdefault: false,
                  }
        
                  setEditData(data);
                  setShowModal(true)}}
                >
                  Use a different address
                </span>
              </button>
            </div>
        </div>
      )}
    </div>
    <AddressModal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  onSubmit={handleSubmit}
                  initialData={editData}
                  editmode={editmode}
                  changeEditMode={() => seteditmode(false)}
                  handleChange={handleformChange}
               />
    </>
  );
}

export default ShipTo;
