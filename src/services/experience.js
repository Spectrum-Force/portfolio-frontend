import { apiClient } from "./config"


export const apiAddExperience =async (payload) => {
    return apiClient.post("/experience", payload)
}

export const apiGetExperience = async () => {
    return apiClient.get("/experience")
};
export const apiGetExperienceById= async (id) => {
    return apiClient.get(`/experience/${id}`)
};

export const apiUpdateExperience = async (id) => {
    return apiClient.patch(`/experience/${id}`)
};

export const apiDeleteExperience = async (id) => {
    return apiClient.delete(`/experience/${id}`)
};