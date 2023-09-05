import { useEffect, useState } from 'react'
import suggestionService from '../services/suggestion-service'

function useSuggestion(suggestionID) {
	const [suggestion, setSuggestion] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		suggestionService
			.getById(suggestionID)
			.then(({ data }) => setSuggestion(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [suggestionID])

	return { suggestion, loading, errors, setSuggestion }
}

export default useSuggestion