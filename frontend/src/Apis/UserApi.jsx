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
    return response;
  };


  export const SendAppReqApi = async ({id,date,time}) => {
    const response = await axios.post(
      `http://localhost:4501/api/v1/user/appointmentReq/${id}`,
      {
       date,
       time
      },
      {
        withCredentials: true,
      }
    );
    return response;
  };


  export const ProfileApi = async () => {
    const response = await axios.get(
      "http://localhost:4501/api/v1/user/profile",
      {
        withCredentials: true,
      }
    );
    return response;
  };

  
  export const GetAllNotifiactions = async () => {
    const response = await axios.get(
      "http://localhost:4501/api/v1/user/notification",
      {
        withCredentials: true,
      }
    );
    return response;
  };


  export const SendDoctorReqApi = async ({name,email,password,Speciality,Fees,date,time}) => {
    console.log("insidi",date,time)
    const response = await axios.post(
      "http://localhost:4501/api/v1/user/sendreq",
      {
        name,
        email,
        password,
        Speciality,Fees,date,time
      },
      {
        withCredentials: true,
      }
    );
    return response;
  };

  
  export const MarkAllNotificationRead = async () => {
    const response = await axios.get(
      "http://localhost:4501/api/v1/user/allRead",
      {
        withCredentials: true,
      }
    );
    return response;
  };


  export const matchedAppointmensApi = async () => {
    const response = await axios.get(
      "http://localhost:4501/api/v1/user/matched",
      {
        withCredentials: true,
      }
    );
    return response;
  };