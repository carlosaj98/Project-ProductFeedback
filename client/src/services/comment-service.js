import apiClient from './api-client'

function create(endpoint) {
	const httpService = {
		getAll: () => apiClient.get(endpoint),

		getById: (id) => apiClient.get(endpoint + '/' + id),

		create: (entity, id) => apiClient.post(endpoint + "/" + id + "/comments", entity),
		update: (entity, id) => apiClient.put(endpoint + '/comments/' + id, entity),

		delete: (id) => apiClient.delete(endpoint + '/' + id),
	}

	return httpService
}

const commentService = create('/suggestions')

export default commentService