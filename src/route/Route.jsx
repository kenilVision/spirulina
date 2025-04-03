import Home from '../page/Home';
import Immunity from '../page/Immunity'
import SkinCare from '../page/SkinCare'
import HeartCare from '../page/HeartCare'
import Wellness from  '../page/Wellness'
import Cleansing from '../page/Cleansing'
import HairCare from '../page/HairCare'

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
   

];
