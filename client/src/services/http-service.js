import apiClient from "./api-client"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function create(endpoint) {
  const httpService = {
    getAll: (queryParams) => apiClient.get(endpoint, { params: queryParams }),
    getById: (id) => apiClient.get(endpoint + "/" + id),
    create: (entity) => apiClient.post(endpoint, entity),
    update: (entity, id) => apiClient.put(endpoint + "/" + id, entity),
    updateVotes: async (id) => {
      try {
        const response = await apiClient.put(endpoint + "/" + id + "/votes")
        return response.data
      } catch (error) {
        toast.error("You must register to access this feature", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        })
      }
    },
    delete: (id) => apiClient.delete(endpoint + "/" + id),
  }

  return httpService
}

export default create
