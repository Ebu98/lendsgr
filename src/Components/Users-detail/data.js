import axios from 'axios';

export const addDatatoLocalStorage = async () => {
    try{
        const {data} = await axios.get(' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ');
        console.log(data)
       return data;
    }catch(error) {
        throw error;
    }
}