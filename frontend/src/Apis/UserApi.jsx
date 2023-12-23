import axios from 'axios'

export const LoginApi = async (userData) => {
    const response = await axios.post(
      "http://localhost:4501/api/v1/user/login",
      {
        email: userData.email,
        password: userData.password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  };