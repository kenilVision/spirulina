import React, { useEffect ,useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { GetCategories } from "../Api/Category";
import { openCartbar} from "../Slice/cart"; 
import Cookies from 'js-cookie';
function Navbar({
  loginbarOpen,
  setloginbarOpen,
  searchbarOpen,
  setsearchbarOpen,
  sidebarOpen,
  setSidebarOpen,
}) {

  const wishlist = useSelector(state => state.wishlist.items);
  const Cartcount = useSelector(state => state.cart.items )
  const cartbarOpen = useSelector((state) => state.cart.cartbarOpen);
  const dispatch = useDispatch()
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



  //  const carts = useSelector((state) => state.cart)
   const user = useSelector((state) => state.User)
  // const [Cartcount, setCartcount] = useState(0);
  
  const navigate = useNavigate();
  
  //       useEffect(() => {
  
  //         const totalitme = carts.reduce((acc, item) => acc +  item.qty, 0);
  //         setCartcount(totalitme);
  //       }
  // , [carts]); 
   
  useEffect(() => {
    if (sidebarOpen || searchbarOpen || loginbarOpen || cartbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen, searchbarOpen, loginbarOpen, cartbarOpen]);   // Close the sidebar when the component unmounts


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
      Cookies.remove("Token");
      navigate("/");
    };
  
  
    const menuItems = [
      {
        label: 'Dashboard',
        to: '/account/dashboard',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        ),
      },
      {
        label: 'Order History',
        to: '/account/orders',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"></path>
            <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H6C3 2 2 3.79 2 6V7Z" ></path>
            <path d="M6 9H12" ></path>
            <path d="M6.75 13H11.25" ></path>
          </svg>
        ),
      },
      {
        label: 'Addresses',
        to: '/account/addresses',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        ),
      },
      {
        label: 'Logout',
        to: '/logout', 
        onClick: handleLogout,
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        ),
      },
    ];
  

  return (
    <>
      <div className="py-[7px]  w-full flex justify-center items-center text-white bg-[#018d43]">
        <div className="px-[5px] w-auto md:px-[15px] text-[14px] text-center">
          <p>Spiru’s Summer Surprise – Save Up to 35% on Your Favorites! </p>
        </div>
      </div>
      <div className="xl:px-[32px] lg:min-h-[77px] w-full flex justify-between shadow-[0_1px_3px_#0000001a]">
        <div className="w-[68px] md:w-[190px] flex lg:hidden items-center">
          <button
            className="lg:hidden px-4 py-2 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="16"
              viewBox="0 0 30 16"
              fill="currentColor"
            >
              <rect width="30" height="1.5"></rect>
              <rect y="7" width="20" height="1.5"></rect>
              <rect y="14" width="30" height="1.5"></rect>
            </svg>
          </button>
        </div>

        <div className="px-[15px] flex justify-center items-center  w-auto">
          <NavLink to="/" className="ms-[10px] flex justify-center items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0611/1038/6771/t/25/assets/spiru_logo.svg"
              className="py-[5px] w-[95px] lg:max-w-[150px] lg:w-full object-contain"
            />
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center px-[15px]">
          <nav>
            <ul className="flex">
              {navigation.map((x) => (
                <li key={x.id}>
                  <NavLink
                     to={`/collection/${x.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={({ isActive }) =>
                      `flex items-center font-medium py-[5px] text-[16px] px-[1.375rem] whitespace-nowrap hover:text-[#018d43] ${
                        isActive ? "text-[#018d43]" : "text-[#222222]"
                      }`
                    }
                  >
                  <img
                      src={`http://localhost:5050/image/categories/icons/${x.icon}`}
                      height="24"
                      width="24"
                      className="me-[7px]"
                      alt={`${x.name} icon`}
                    />
                    {x.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-end px-[15px]">
          <div className="px-[5px] flex items-center ">
            <button
              className="relative flex items-center justify-center  rounded-lg hover:cursor-pointer stroke-current  hover:stroke-[#018d43]"
              onClick={() => setsearchbarOpen(true)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="px-[5px] hidden lg:flex">
            <button className="relative flex items-center justify-center  hover:cursor-pointer rounded-lg  ">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="black"
                className="hover:fill-[#018d43]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.34531 13.6758L8.08516 13.3922C8.01953 13.3219 6.48906 11.6437 5.50937 10.2188C5.12734 9.66328 4.88594 9.22969 4.76875 8.88984C4.70078 8.69531 4.65156 8.49609 4.61641 8.29219C4.58125 8.08125 4.5625 7.86797 4.5625 7.65234C4.5625 7.46484 4.57656 7.27734 4.60469 7.09453C4.73594 6.20625 5.18359 5.39062 5.86562 4.79766C6.55 4.19766 7.43125 3.86719 8.34531 3.86719C10.4312 3.86719 12.1305 5.56406 12.1305 7.65234C12.1305 7.8 12.1211 7.95 12.1047 8.09531C12.0977 8.16094 12.0883 8.22656 12.0766 8.29219C12.0414 8.49375 11.9898 8.69297 11.9242 8.8875C11.807 9.22734 11.5633 9.66328 11.1812 10.2188C10.2016 11.6461 8.66875 13.3219 8.60547 13.3922L8.34531 13.6758ZM8.34531 4.57031C6.82891 4.57031 5.51875 5.7 5.29844 7.19531C5.27734 7.34531 5.26562 7.49766 5.26562 7.65C5.26562 7.82578 5.27969 8.00156 5.31016 8.17266C5.33828 8.33672 5.38047 8.50078 5.43437 8.65781C5.53047 8.93437 5.75078 9.32344 6.09062 9.82031C6.80781 10.8633 7.8625 12.0844 8.34766 12.6281C8.83047 12.082 9.8875 10.8633 10.6047 9.82031C10.9445 9.32578 11.1672 8.93437 11.2609 8.65781C11.3148 8.50078 11.357 8.33906 11.3852 8.17266C11.3945 8.12109 11.4016 8.06719 11.4086 8.01562C11.4227 7.89609 11.4297 7.77422 11.4297 7.65234C11.4273 5.95312 10.0445 4.57031 8.34531 4.57031Z"

                ></path>
                <path
                  d="M14.5898 18.5908H8.31328L8.30859 18.2439C8.30156 17.6041 7.77656 17.0861 7.13672 17.0861C6.49688 17.0861 5.97188 17.6064 5.96484 18.2439L5.96016 18.5908H3.48984C3.15 18.5908 2.81016 18.4596 2.55937 18.2275C2.29219 17.9814 2.14453 17.6557 2.14453 17.3064V9.17363C2.14453 8.47285 2.76094 7.87988 3.48984 7.87988H5.25703L5.30625 8.17285C5.33437 8.33691 5.37656 8.50098 5.43047 8.65801C5.52656 8.93457 5.74688 9.32363 6.08672 9.82051C6.80391 10.8635 7.85859 12.0846 8.34375 12.6283C8.82656 12.0822 9.88359 10.8635 10.6008 9.82051C10.9406 9.32598 11.1633 8.93457 11.257 8.65801C11.3109 8.50098 11.3531 8.33926 11.3813 8.17285L11.4305 7.87988H13.3148C14.0297 7.87988 14.5898 8.44941 14.5898 9.17363V18.5908ZM8.97656 17.8877H13.8867V9.17598C13.8867 8.84316 13.6359 8.58535 13.3148 8.58535H12.0117C11.9859 8.68848 11.9555 8.78926 11.9203 8.8877C11.8031 9.22754 11.5594 9.66348 11.1773 10.2189C10.1977 11.6463 8.66484 13.3221 8.60156 13.3924L8.34375 13.676L8.08359 13.3924C8.01797 13.3221 6.4875 11.6439 5.50781 10.2189C5.12578 9.66348 4.88437 9.22988 4.76719 8.89004C4.73203 8.78926 4.70156 8.68848 4.67578 8.58535H3.48984C3.14766 8.58535 2.84766 8.86191 2.84766 9.17598V17.3088C2.84766 17.6182 3.14766 17.89 3.48984 17.89H5.29922C5.37188 17.5268 5.55 17.1916 5.81953 16.9268C6.17344 16.5775 6.64219 16.3854 7.13906 16.3854C7.63594 16.3854 8.10469 16.5775 8.45859 16.9268C8.72578 17.1916 8.90391 17.5244 8.97656 17.8877Z"

                ></path>
                <path
                  d="M17.3047 20.1328C16.2711 20.1328 15.4297 19.2914 15.4297 18.2578C15.4297 18.2484 15.4297 18.2414 15.4297 18.232C15.4367 17.7375 15.6336 17.2734 15.9852 16.9242C16.3391 16.575 16.8078 16.3828 17.3047 16.3828C17.8016 16.3828 18.2703 16.575 18.6242 16.9242C18.9758 17.2734 19.1727 17.7375 19.1797 18.232V18.2578C19.1797 19.2914 18.3383 20.1328 17.3047 20.1328ZM17.3047 17.0859C16.6648 17.0859 16.1398 17.6063 16.1328 18.2438V18.2531V18.2578C16.1328 18.9047 16.6578 19.4297 17.3047 19.4297C17.9516 19.4297 18.4766 18.9047 18.4766 18.2578V18.2438C18.4695 17.6063 17.9445 17.0859 17.3047 17.0859Z"

                ></path>
                <path
                  d="M21.8539 18.5908H18.4812L18.4766 18.2439C18.4695 17.6041 17.9445 17.0861 17.3047 17.0861C16.6648 17.0861 16.1398 17.6064 16.1328 18.2439L16.1281 18.5908H13.8828V9.61426H18.7602L21.8516 13.4838V18.5908H21.8539ZM19.1445 17.8877H21.1508V13.7299L18.425 10.3174H14.5883V17.8877H15.4672C15.5398 17.5244 15.718 17.1893 15.9875 16.9244C16.3414 16.5752 16.8102 16.383 17.307 16.383C17.8039 16.383 18.2727 16.5752 18.6266 16.9244C18.8937 17.1916 19.0719 17.5244 19.1445 17.8877Z"

                ></path>
                <path
                  d="M7.14062 20.1328C6.10703 20.1328 5.26562 19.2914 5.26562 18.2578C5.26562 18.2484 5.26562 18.2414 5.26562 18.232C5.27266 17.7375 5.46953 17.2734 5.82109 16.9242C6.175 16.575 6.64375 16.3828 7.14062 16.3828C7.6375 16.3828 8.10625 16.575 8.46016 16.9242C8.81172 17.2734 9.00859 17.7375 9.01562 18.232V18.2578C9.01562 19.2914 8.17422 20.1328 7.14062 20.1328ZM7.14062 17.0859C6.50078 17.0859 5.97578 17.6063 5.96875 18.2438V18.2555V18.2578C5.96875 18.9047 6.49375 19.4297 7.14062 19.4297C7.7875 19.4297 8.3125 18.9047 8.3125 18.2578V18.2438C8.30547 17.6063 7.77813 17.0859 7.14062 17.0859Z"

                ></path>
                <path
                  d="M16.2891 13.2656H21.4922V13.9688H16.2891V13.2656Z"

                ></path>
                <path
                  d="M8.34531 8.85469C7.68203 8.85469 7.14062 8.31562 7.14062 7.65C7.14062 6.98672 7.67969 6.44531 8.34531 6.44531C9.00859 6.44531 9.55 6.98437 9.55 7.65C9.55 8.31562 9.00859 8.85469 8.34531 8.85469ZM8.34531 7.15078C8.06875 7.15078 7.84375 7.37578 7.84375 7.65234C7.84375 7.92891 8.06875 8.15391 8.34531 8.15391C8.62187 8.15391 8.84687 7.92891 8.84687 7.65234C8.84687 7.37578 8.62187 7.15078 8.34531 7.15078Z"

                ></path>
              </svg>
            </button>
          </div>

          <div 
              className=" relative hidden md:flex px-[5px]"
              onMouseEnter={() => {
                const Token = Cookies.get("Token");
                if (Token) setDropdownOpen(true);
              }}
              onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="relative flex items-center justify-center hover:cursor-pointer  rounded-lg stroke-current  hover:stroke-[#018d43]"
              onClick={() => {
                const Token = Cookies.get("Token");
                if (!Token) {
                  setloginbarOpen(true);
                }
              }}
                
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                strokeWidth="1"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-[15px]  mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-500">
                  {menuItems.map(({ label, to, icon, onClick  }) =>
                    onClick ? (
                      <div
                        key={label}
                        onClick={onClick}
                        className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md transition text-gray-700 cursor-pointer"
                      >
                        {icon}
                        <span>{label}</span>
                      </div>
                    ) : (
                      <NavLink
                        key={label}
                        to={to}
                        className={({ isActive }) =>
                          `flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md transition ${
                            isActive ? 'text-[#018d43]' : 'text-gray-700'
                          }`
                        }
                      >
                        {icon}
                        <span>{label}</span>
                      </NavLink>
                    )
                  )}
              </div>
            )}
          </div>
          <div className="hidden md:flex px-[5px]">
            <NavLink
              to="/Wishlist"
              className="relative flex items-center justify-center  rounded-lg hover:cursor-pointer stroke-current  hover:stroke-[#018d43] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                strokeWidth="1"

              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 6.784a5.443 5.443 0 00-9.193-2.143l-.559.626-.56-.626a5.443 5.443 0 00-9.192 2.143 5.634 5.634 0 001.272 6.295l8.48 8.482 8.48-8.482a5.634 5.634 0 001.272-6.295z"
                />
              </svg>

              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#018d43] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {wishlist.length}
              </span>
            </NavLink>
          </div>
          <div className="px-[5px]">
            <button
              className="relative flex items-center justify-center hover:cursor-pointer stroke-current  hover:stroke-[#018d43]  rounded-lg "
              onClick={() => dispatch(openCartbar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1"
                width="24"
                fill="none"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.5l1.5 9h12.75a1.5 1.5 0 001.47-1.21l.75-3.75a1.5 1.5 0 00-1.47-1.79H6.21"
                />
                <circle
                  cx="7"
                  cy="20"
                  r="1.4"
                  fill="none"
                  strokeWidth="1.5"
                  
                />
                <circle
                  cx="17"
                  cy="20"
                  r="1.4"
                  fill="none"
                  strokeWidth="1.5"
                />
              </svg>

              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#018d43] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {Cartcount.reduce((total, item) => total + item.qty, 0)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
