import axios from 'axios'
import type { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false
})

apiClient.defaults.headers.common['Content-Type'] = 'application/json'

export default apiClient
