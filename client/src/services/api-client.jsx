import axios from "axios"

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({ baseURL })

export const setToken = (token) => {
    apiClient.defaults.headers.common["x-auth-token"] = token
}

export default apiClient
