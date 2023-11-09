import { useEffect, useState } from 'react'
import suggestionService from '../services/suggestion-service'

function useSuggestions(queryParams){
    const [suggestions, setSuggestions] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

    useEffect(() => {
        suggestionService
            .getAll(queryParams)
            .then(({data}) => setSuggestions(data))
            .catch(setErrors)
            .finally(()=> setLoading(false))
    }, [queryParams.category, queryParams.sortByUpvotes, queryParams.sortByComments])

    return {suggestions, loading, errors, setSuggestions}
}

export default useSuggestions