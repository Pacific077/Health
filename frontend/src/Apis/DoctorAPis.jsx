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


  export const AcceptAppointmentReq = async ( {appointID, userId} ) => {
    const response = await axios.post(
      `http://localhost:4501/api/v1/doctor/acceptAppointment/${userId}`,
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
      `http://localhost:4501/api/v1/doctor/rejectAppointmet/${userId}`,
      {
        appointID,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  };
  