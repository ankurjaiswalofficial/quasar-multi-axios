import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

// Create an Axios instance for public (unauthenticated) API calls
const publicApi = axios.create({ baseURL: 'http://localhost:8000/api/items/' })

// Create an Axios instance for authenticated API calls
const authApi = axios.create({ baseURL: 'http://localhost:8000/api/items/' })

// Add an interceptor to attach the token to authenticated requests
authApi.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('authToken') // Retrieve token from sessionStorage instead of localStorage
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  (error) => {
    return error
  },
)

export default defineBoot(({ app }) => {
  // Make both Axios instances available globally in Vue components
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$publicApi = publicApi
  app.config.globalProperties.$authApi = authApi
})

export { publicApi, authApi }
