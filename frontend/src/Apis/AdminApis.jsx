import axios from "axios";


export const AcceptDrReqApi = async ( {appointID, userId} ) => {
  console.log("inside api",appointID,userId)
  const response = await axios.post(
    `/api/v1/admin/accpt/${userId}`,
    {
      appointID,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};


export const RejectDrReqApi = async ( {appointID, userId} ) => {
  console.log("inside api",appointID,userId)
  const response = await axios.post(
    `/api/v1/admin/reject/${userId}`,
    {
      appointID,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
