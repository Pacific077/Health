import axios from 'axios'

export const GetAllDoctor = async () => {
    const response = await axios.get(
      "http://localhost:4501/api/v1/doctor/all",
      {
        withCredentials: true,
      }
    );
    return response.data;
  };