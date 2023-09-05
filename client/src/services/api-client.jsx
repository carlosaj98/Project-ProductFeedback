import axios from "axios"

const baseURL = "http://localhost:9000/api"

const apiClient = axios.create({ baseURL })

export const setToken = (token) => {
    apiClient.defaults.headers.common["x-auth-token"] = token
}

export default apiClient
