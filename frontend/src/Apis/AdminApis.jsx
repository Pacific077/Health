import axios from "axios";


export const AcceptDrReqApi = async ( {appointID, userId} ) => {
  console.log("inside api",appointID,userId)
  const response = await axios.post(
    `http://localhost:4501/api/v1/admin/accpt/${userId}`,
    {
      appointID,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
