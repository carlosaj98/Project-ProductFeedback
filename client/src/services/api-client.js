import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({ baseURL })

export default apiClient