import Home from '../page/Home';
import Immunity from '../page/Immunity'
import SkinCare from '../page/SkinCare'
import HeartCare from '../page/HeartCare'
import Wellness from  '../page/Wellness'
import Cleansing from '../page/Cleansing'
import HairCare from '../page/HairCare'
import About from '../page/About'
import ShopAll from '../page/ShopAll';
import Products from '../page/Products';
import Contact from '../page/Contact';
import FAQ from '../page/FAQ';
import Training from '../page/Training'
import MyAccount from '../page/MyAccount';
import Wishlist from '../page/Wishlist';
import PrivacyPolicy from '../page/PrivacyPolicy';
import TermsAndServices from '../page/TermsAndServices';
import ReturnAndRefund from '../page/ReturnAndRefund';
import Shipping from '../page/Shipping';
import Contactinformation from '../page/Contactinformation';
import Success from '../page/Success';
import Cancel from '../page/Cancel';
export const roots = [    
    {
        path: '/',
        element: (
                <Home />
        )
    },
    {
        path: '/Immunity',
        element: ( 
            <Immunity />
        )
    },
    {
        path: '/SkinCare',
        element:( 
                <SkinCare/>
            ) 
    },
    { 
        path: '/HairCare', 
        element: ( <HairCare/>)  
    },
    { 
        path: '/HeartCare', 
        element: ( <HeartCare/>)  
    },
    { 
        path: '/Wellness', 
        element: ( 
               <Wellness />
            )  
    },
    { 
        path: '/Cleansing', 
        element: ( 
               <Cleansing />
            )  
    },
    { 
        path: '/About', 
        element: ( 
               <About />
            )  
    },
    ,
    { 
        path: '/ShopAll', 
        element: ( 
               <ShopAll />
            )  
    },
    {
       path: '/Products',
       element: ( 
               <Products />
            )
    },
    {
        path: '/Contact',
        element: ( 
                <Contact />
             )
     }
     ,
    {
        path: '/FAQ',
        element: ( 
                <FAQ />
             )
     }
     ,
     {
         path: '/Training',
         element: ( 
                 <Training />
              )
      },
      {
        path: '/MyAccount',
        element: ( 
                <MyAccount/>
             )
     }
     ,
      {
        path: '/Wishlist',
        element: ( 
                <Wishlist/>
             )
     }
     ,
     {
       path: '/PrivacyPolicy',
       element: ( 
               <PrivacyPolicy/>
            )
    }
    ,
     {
       path: '/TermsAndServices',
       element: ( 
               <TermsAndServices/>
            )
    }
    ,
     {
       path: '/ReturnAndRefund',
       element: ( 
               <ReturnAndRefund/>
            )
    }
    ,
     {
       path: '/Shipping',
       element: ( 
               <Shipping/>
            )
    }
  ,
  {
    path: '/Contactinformation',
    element: ( 
            <Contactinformation/>
         )
 }
 ,
 {
   path: '/Success',
   element: ( 
           <Success/>
        )
},
{
        path: '/Cancel',
        element: ( 
                <Cancel/>
             )
     }
  

];
