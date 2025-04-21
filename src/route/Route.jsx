import Home from "../page/Home";
import About from "../page/About";
import Products from "../page/Products";
import Contact from "../page/Contact";
import FAQ from "../page/FAQ";
import Training from "../page/Training";
import MyAccount from "../page/MyAccount";
import Wishlist from "../page/Wishlist";
import PrivacyPolicy from "../page/PrivacyPolicy";
import TermsAndServices from "../page/TermsAndServices";
import ReturnAndRefund from "../page/ReturnAndRefund";
import Shipping from "../page/Shipping";
import Contactinformation from "../page/Contactinformation";
import Success from "../page/Success";
import Cancel from "../page/Cancel";
import Account from "../page/Account";
import Dashboard from "../component/Account/Dashboard";
import Orders from "../component/Account/Orders";
import Addresses from "../component/Account/Addresses";
import Collection from "../page/Collection";
import Cart from '../page/Cart'
export const roots = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collection/:collectionName",
    element: <Collection />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/product/:slug",
    element: <Products />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/Training",
    element: <Training />,
  },
  {
    path: "/MyAccount",
    element: <MyAccount />,
  },
  {
    path: "/Wishlist",
    element: <Wishlist />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsAndServices",
    element: <TermsAndServices />,
  },
  {
    path: "/ReturnAndRefund",
    element: <ReturnAndRefund />,
  },
  {
    path: "/Shipping",
    element: <Shipping />,
  },
  {
    path: "/Contactinformation",
    element: <Contactinformation />,
  },
  {
    path: "/Success",
    element: <Success />,
  },
  {
    path: "/Cancel",
    element: <Cancel />,
  },
  {
    path: "/account/Dashboard",
    element: (
      <Account>
        <Dashboard />
      </Account>
    ),
  },
  {
    path: "/account/Orders",
    element: (
      <Account>
        <Orders />
      </Account>
    ),
  },
  {
    path: "/account/Addresses",
    element: (
      <Account>
        <Addresses />
      </Account>
    ),
  },
  
];
