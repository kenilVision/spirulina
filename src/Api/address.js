import axiosInstance from "../axios/axios";


export const Getaddress = async (page,limit) => {    
    try {
        const res = await axiosInstance.get(`/customer-address/get?page=${page}&limit=${limit}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching addresses:', error);
        return error;
    }
};


export const createAddress = async (data ) =>{    

    try{
        const res = await axiosInstance.post(
            'customer-address/create',
            data,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



export const deleteaddress = async (_id) =>{    

    try{
        const res = await axiosInstance.delete(`customer-address/delete/${_id}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



export const UpdateAddress = async (data ) =>{    

    try{
        const res = await axiosInstance.put(
            'customer-address/update',
            data,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}
