import React  from "react";
import { NavLink } from "react-router-dom";
import { GetCategories } from "../Api/Category";
import { useState ,useEffect } from "react";
import {GetproductbyCategories} from "../Api/product"
import { useNavigate } from "react-router-dom";
function SearchSideBar({ searchbarOpen, setsearchbarOpen }) {
  const navigate = useNavigate();

  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetCategories();
      if (data) {
        setNavigation(data);
      }
    };

    fetchCategories();
  }, []);

  
  const [params,setparams] = useState({
    categoryId:"",
    search:"",
    page: 1,      // Page number (defaults to 1)
    limit: 5,    // Number of items per page (defaults to 55)
  })
  useEffect(()=>{
    setparams({
      categoryId:"",
      search:"",
      page: 1,      // Page number (defaults to 1)
      limit: 5,    // Number of items per page (defaults to 55)
    })
  },[searchbarOpen])

  const getSlug = (productName, type) =>
    `${productName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .trim()
      .replace(/\s+/g, '-')}${type === 'combo' ? '-combo' : ''}`;
      const type = "product"
  const [Product,setProduct]=useState([])
  useEffect(() => {
    const fetchCategories = async () => {

      const query = new URLSearchParams(params).toString();
      const data = await GetproductbyCategories(query);
      setProduct(data.products)
    };

    fetchCategories();
  }, [params]);



    const handleParamsChange = (e) => {
      const { name, value } = e.target;
      setparams((prev) => ({ ...prev, [name]: value }));
    };
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          searchbarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setsearchbarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[calc(100vw-65px)] z-110 sm:w-[340px] bg-white shadow-lg transform ${
          searchbarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-50 max-h-screen h-screen flex flex-col`}
      >
        <div className="flex justify-between items-center ps-4 py-[0.3125rem] min-h-[60px] border-b border-[#dddddd]">
          <h2 className="text-[16px] leading-[1.425rem] font-semibold">
            SEARCH OUR SITE
          </h2>
          <button
            onClick={() => setsearchbarOpen(false)}
            className="p-2 transition h-[50px] w-[50px] flex justify-center transform duration-700 hover:rotate-180"
          >
            <svg role="presentation" viewBox="0 0 16 14" width="16">
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-5 border-1 border-[#dddddd]">
          <div className=" bg-white  ">
            <form>
              <div className="w-full mb-5 h-[40px] flex justify-center border  border-[#dddddd] relative">
                {/* <select className="w-full ps-[15px] pe-[30px] focus:outline-none text-[14px] focus:border-0 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_10px_top_50%] bg-[length:auto_18px]">
                  <option value="*">All Categories</option>
                  <option value="Powder">Powder</option>
                </select> */}
                <select
                    name="categoryId"
                    value={params.categoryId}
                    onChange={handleParamsChange}
                    className="w-full ps-[15px] pe-[30px] focus:outline-none text-[14px] focus:border-0 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_10px_top_50%] bg-[length:auto_18px]"
                    required
                >
                     <option value="">Select a category</option>
                    {navigation.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                        {cat.name}
                    </option>
                    ))}
                    
                </select>
              </div>

              <div className="flex  border-1 border-[#dddddd] ">
                <input
                  autoComplete="off"
                  className="w-full border-0 ps-[20px] pe-50px focus:outline-none focus:border-0 h-[40px] text-[14px]"
                  type="text"
                  placeholder="Search"
                  name="search"
                  value= {params.search}
                  onChange={handleParamsChange}
                />
                {/* <input type="search"   readOnly /> */}
                <button type="submit" className="w-[50px]">
                  <svg viewBox="0 0 18 19" width="16">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="font-semibold text-secondary-color px-5 py-[10px] border-b border-[#dddddd]  shadow-md leading-[36px]
          "
        >
          Need some inspiration?
        </div>

        <div className="flex-grow overflow-auto p-5">
        { Product ? (
            Product.map((product) => (
              <div 
                key={product._id} 
                className="flex pb-[10px] mb-[10px]"
                onClick={() => {
                  navigate(`/product/${product.slug}`);
                  setsearchbarOpen(false);
                }}
              >
                <img
                  src={`http://localhost:5050/image/products/${product.variants[0].images[0]}`}
                  alt={product.name}
                  className="h-20 w-20 ps-[15px] object-cover hover:cursor-pointer"
                />
                <h2 className="flex items-center px-[15px] hover:cursor-pointer hover:text-[#018d43]">
                  {product.name}
                </h2>
              </div>
            ))
          ) : (
            <div className="px-[15px] py-4 text-gray-500 flex justify-center" >No product found</div>
          )}
        </div>

        <div className="sticky bottom-0 left-0 w-full border-t border-gray-300 shadow-md bg-white">
          <NavLink
            to="/collection/all"
            className="w-full flex  items-center py-[12px] px-[20px]"
            onClick={() => setsearchbarOpen(false)}
          >
            View All
            <svg
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SearchSideBar;
