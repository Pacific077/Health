import axios from 'axios'

export const GetAllDoctor = async ({dieseaseName}) => {
    const response = await axios.get(
      `/api/v1/doctor/all/${dieseaseName}`,
      {
   
        withCredentials: true,
      }
    );
    return response.data;
  };


  export const AcceptAppointmentReq = async ( {appointID, userId} ) => {
    const response = await axios.post(
      `/api/v1/doctor/acceptAppointment/${userId}`,
      {
        appointID,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  };
  

  export const RejectAppointmentReq = async ( {appointID, userId} ) => {
    console.log("inside api",appointID,userId)
    const response = await axios.post(
      `/api/v1/doctor/rejectAppointmet/${userId}`,
      {
        appointID,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  };
  