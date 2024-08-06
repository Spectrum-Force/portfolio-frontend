import { apiClient } from "./config"


export const apiAddProfile = async (payload) => {
    return apiClient.post("/userProfile", payload);
};

export const apiGetProfile = async () => {
    return apiClient.get("/userProfile");
  };
  
  export const apiUpdateProfile = async (id, payload) => {
    return apiClient.patch(`/userProfile/${id}`, payload);
  };