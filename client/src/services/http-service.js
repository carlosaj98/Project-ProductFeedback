import apiClient from './api-client'

function create(endpoint) {
	const httpService = {
		getAll: () => apiClient.get(endpoint),

		getById: (id) => apiClient.get(endpoint + '/' + id),

		create: (entity) => apiClient.post(endpoint, entity),
		update: (entity, id) => apiClient.put(endpoint + '/' + id, entity),

		delete: (id) => apiClient.delete(endpoint + '/' + id),
	}

	return httpService
}

export default create