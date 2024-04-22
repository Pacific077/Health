import axios from 'axios'

export const RegisterApi = async ({name,email,password}) => {
  const response = await axios.post(
    "/api/v1/user/register",
    {
      name,
      email,password
    },
    {
      withCredentials: true,
    }
  );
  return response;
};


export const LoginApi = async (userData) => {
    const response = await axios.post(
      "/api/v1/user/login",
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
      `/api/v1/user/appointmentReq/${id}`,
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
      "/api/v1/user/profile",
      {
        withCredentials: true,
      }
    );
    return response;
  };

  
  export const GetAllNotifiactions = async () => {
    const response = await axios.get(
      "/api/v1/user/notification",
      {
        withCredentials: true,
      }
    );
    return response;
  };


  export const SendDoctorReqApi = async ({name,email,password,Speciality,Fees,date,time,diseaseSpecialities}) => {
    console.log("diseasea arrya in api",diseaseSpecialities)
    const response = await axios.post(
      "/api/v1/user/sendreq",
      {
        name,
        diseaseSpecialities,
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
      "/api/v1/user/allRead",
      {
        withCredentials: true,
      }
    );
    return response;
  };


  export const matchedAppointmensApi = async () => {
    const response = await axios.get(
      "/api/v1/user/matched",
      {
        withCredentials: true,
      }
    );
    return response;
  };

  export const AllappointmentsApi = async () => {
    const response = await axios.get(
      "/api/v1/user/allappointments",
      {
        withCredentials: true,
      }
    );
    return response;
  };

  export const UploadProfileApi = async ({formData})=>{
      // const profile = formData;
      const resp = await axios.put("/api/v1/user/profile-photo-upload", formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
  
      return resp;
   
  }

  export const LogoutApi = async () => {
    const response = await axios.post(
      "/api/v1/user/logout",
      {},
      {
        withCredentials: true,
      }
    );
    return response;
  };