import { apiClient } from "./config"

export const apiSignUp= async(payload) => {
    return apiClient.post("/auth/signup",payload);
};
export const apiLogin =async (payload) => {
    return apiClient.post("/auth/token/login",payload)
};

export const apiCheckUsernameExists = async (userName) => {
    return apiClient.get(`/auth/${userName}`,userName);
}

export const apiGetUserProfile =async (userProfile) => {
    return apiClient.get("/users/userProfile")
}