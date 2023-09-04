import { useEffect, useState } from 'react'
import suggestionService from '../services/suggestion-service'

function useSuggestions(){
    const [suggestions, setSuggestions] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

    useEffect(() => {
        suggestionService
            .getAll()
            .then(({data}) => setSuggestions(data))
            .catch(setErrors)
            .finally(()=> setLoading(false))
    }, [])

    return {suggestions, loading, errors, setSuggestions}
}

export default useSuggestions