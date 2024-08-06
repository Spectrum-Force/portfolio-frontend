import { apiClient } from "./config"


export const apiGetUserDetails = async (userName) => {
    return apiClient.get(`/auth/${userName}`)
};