import apiClient from "./apiCLiente";

export const allGroups = () => apiClient.get("/groups");
export const editGroup = () => apiClient.put("/groups/:id");
export const createGroups = () => apiClient.post("/groups");
