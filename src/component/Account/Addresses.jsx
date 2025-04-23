import React ,{useState,useEffect} from 'react';
import AddressModal from './AddressModal'
import { Getaddress ,createAddress ,deleteaddress, UpdateAddress } from '../../Api/address';


function Addresses() {

  const [showModal, setShowModal] = useState(false);
  const [editmode, seteditmode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trigger , settrigger] = useState(true)
 const [addresses, setAddresses] = useState([]);


 const [page, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(1);

 const limit = 5
 useEffect(() => {
  const loadUserData = async () => {
    try {
      setLoading(true);
      const addressRes = await Getaddress(page , limit);
      const addressList = addressRes?.customerAddresss || [];
      setTotalPages(addressRes?.pagination?.totalPages || 1);
      setAddresses(addressList);
    } catch (error) {   
      console.error("Failed to load addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  loadUserData();
}, [trigger, page]);


const onPageChange = (pageNum) => {
  if (pageNum >= 1 && pageNum <= totalPages) {
    setPage(pageNum);
  }
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


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData({ ...editData, [name]: type === 'checkbox' ? checked : value });
    console.log(editData)
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
      console.log(newAddress)
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



  const getVisiblePages = () => {
    const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages <= 7) return pageArray;
    if (page <= 4) return [...pageArray.slice(0, 5), "...", totalPages];
    if (page >= totalPages - 3) return [1, "...", ...pageArray.slice(totalPages - 5)];
    return [1, "...", ...pageArray.slice(page - 2, page + 1), "...", totalPages];
  };
  
  const visiblePages = totalPages ? getVisiblePages() : [];

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
          <img 
              src="https://spiruswastha.com/cdn/shop/t/25/assets/t4s_loader.svg?v=145003788389301961301736154755" 
              alt="Loading..." 
              className="w-16 h-16"
            />
      </div>
    )
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
            isdefault: false,
          }

          setEditData(data);
          setShowModal(true)}}
        >
                Add a New Address
              </button>
        </div>
              

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        { addresses.length > 0  ? (
          addresses.map((item, index) => (
            <div key={index} className="bg-white rounded-xl  p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[26px] ">
                  {item.title}
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
                    removeAd(item._id)  
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
                  <div className="px-4 py-4 ">{item.fullname}</div>
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



{totalPages > 1 && (
        <div 
          className="flex items-center border-t border-[#dddddd] justify-center mt-[30px] md:mt-[50px] pt-4 gap-2" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <button
            onClick={() => onPageChange(page - 1)}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300"
            disabled={page === 1}
          >
            Prev
          </button>

          <div className="flex gap-x-[10px]">
            {visiblePages.map((pageNum, i) => (
              pageNum === "..." ? (
                <span key={`ellipsis-${i}`} className="px-3 py-2 text-[#8c8c8c]">...</span>
              ) : (
                <button
                  key={`page-${pageNum}`}
                  onClick={() => onPageChange(pageNum)}
                  className={`px-3 py-2 rounded ${
                    page === pageNum
                      ? "text-[#018d43] font-medium"
                      : "text-[#8c8c8c] hover:text-[#018d43]"
                  }`}
                >
                  {pageNum}
                </button>
              )
            ))}
          </div>

          <button
            onClick={() => onPageChange(page + 1)}
            className="px-3 py-2 text-[#8c8c8c] hover:text-[#018d43] disabled:text-gray-300"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )} 
              </>
  );
}

export default Addresses;
