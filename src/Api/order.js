import axiosInstance from "../axios/axios";


export const makeOrder = async (data ) =>{    

    try{
        const res = await axiosInstance.post('/order/place-order',
            data,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}


