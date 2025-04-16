import React ,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddress, setAddress  , removeAddress} from '../../Slice/user'; 

import AddressModal from './AddressModal';


function Addresses() {
  const {  address } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editmode, seteditmode] = useState(false);
  const [editData, setEditData] = useState(null);


 console.log(removeAddress)



  const handleEdit  = (item) => {
  let  data ={
      addressid: item.addressid,
      fullName: item.fullName,
      phone: item.phone,
      zip: item.zip,
      address1: item.address,
      address2: item.address2,
      state: item.state,
      city: item.city,
      country:  'India',
      default: item.default,
    }
    setEditData(data);
    seteditmode(true);
    setShowModal(true);
  }


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData({ ...editData, [name]: type === 'checkbox' ? checked : value });
    console.log(editData)
  };



  const handleSubmit = (e) => {
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
      default: isDefault,
    } = editData;

    const newAddress = {
      addressid: addressid || Date.now(),
      fullName: fullName,
      address: address1,
      address2,
      zip,
      state,
      city,
      phone,
      country,
      default: isDefault,
    };

    if (addressid) {
      dispatch(updateAddress({ addressid, updatedAddress: newAddress }));
    } else {
      dispatch(setAddress({ address: newAddress }));
    }

    setShowModal(false);
    setEditData(null);

  };

  const removeAd=(add)=>{
    const confirmed = window.confirm('Are you sure you want to delete this address?');
  if (confirmed) {
    dispatch(removeAddress({ addressid: add}));
  }
  }






  return (
    <>
    <div className="w-full  p-4">

        <div className='flex'>
        <button 
        className=" ms-auto p-2 bg-[#018d43] w-fit text-white rounded mb-4 hover:cursor-pointer"
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
            default: false,
          }

          setEditData(data);
          setShowModal(true)}}
        >
                Add a New Address
              </button>
        </div>
              

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {address && address.length > 0 ? (
          address.map((item, index) => (
            <div key={index} className="bg-white rounded-xl  p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[26px] ">
                  {item.default ? 'Default Address' : `Address ${index + 1}`}
                </h2>
                <div className="flex space-x-2">
                  <div className='hover:cursor-pointer'
                   onClick={() => {
                          handleEdit(item) 
                                }
                   }
                  >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V16.25" stroke="#018D43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M20.0513 3.77361L10.2013 13.6236C9.82631 13.9986 9.45131 14.7361 9.37631 15.2736L8.83881 19.0361C8.63881 20.3986 9.60131 21.3486 10.9638 21.1611L14.7263 20.6236C15.2513 20.5486 15.9888 20.1736 16.3763 19.7986L26.2263 9.94861C27.9263 8.24861 28.7263 6.27361 26.2263 3.77361C23.7263 1.27361 21.7513 2.07361 20.0513 3.77361Z" stroke="#018D43" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M18.6406 5.18848C19.4781 8.17598 21.8156 10.5135 24.8156 11.3635" stroke="#018D43" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                </div>
                <div className='hover:cursor-pointer'
                  onClick={() => {
                    removeAd(item.addressid)  
                  }}  
                >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.25 7.4751C22.0875 7.0626 17.9 6.8501 13.725 6.8501C11.25 6.8501 8.775 6.9751 6.3 7.2251L3.75 7.4751" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10.6289 6.2125L10.9039 4.575C11.1039 3.3875 11.2539 2.5 13.3664 2.5H16.6414C18.7539 2.5 18.9164 3.4375 19.1039 4.5875L19.3789 6.2125" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M23.5625 11.4253L22.75 24.0128C22.6125 25.9753 22.5 27.5003 19.0125 27.5003H10.9875C7.5 27.5003 7.3875 25.9753 7.25 24.0128L6.4375 11.4253" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12.9102 20.6255H17.0731" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.875 15.625H18.1256" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                </div>
                </div>
              </div>
              <div className="border border-gray-300 text-[18px] rounded overflow-hidden">
              <div className="grid grid-cols-2 border-gray-300 border-b">
                  <div className="px-4 py-4 font-medium">Full Name:</div>
                  <div className="px-4 py-4 ">{item.fullName}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="px-4 py-4 font-medium">Address:</div>
                  <div className="px-4 py-4">{item.address}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="px-4 py-4 font-medium">Address2:</div>
                  <div className="px-4 py-4">{item.address2}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="px-4 py-4 font-medium">Mobile Number:</div>
                  <div className="px-4 py-4">{item.phone}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="px-4 py-4 font-medium">Pincode:</div>
                  <div className="px-4 py-4">{item.zip}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="px-4 py-4 font-medium">Country:</div>
                  <div className="px-4 py-4">{item.country || 'India'}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="px-4 py-4 font-medium">State:</div>
                  <div className="px-4 py-4">{item.state}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-4 font-medium">Town/City:</div>
                  <div className="px-4 py-4">{item.city}</div>
                </div>
              </div>
            </div>
 
          ))
        ) : (
          <p className="text-gray-500">No saved addresses found.</p>
        )}
      </div>
    </div>
               <AddressModal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  onSubmit={handleSubmit}
                  initialData={editData}
                  editmode={editmode}
                  changeEditMode={() => seteditmode(false)}
                  handleChange={handleChange}
               />
              </>
  );
}

export default Addresses;
