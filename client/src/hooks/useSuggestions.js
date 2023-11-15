import { useEffect, useState } from "react"
import suggestionService from "../services/suggestion-service"

function useSuggestions(queryParams) {
  const [suggestions, setSuggestions] = useState([])
  const [isChanged, setIsChanged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState()

  useEffect(() => {
    suggestionService
      .getAll(queryParams)
      .then(({ data }) => {
        setSuggestions(data)
        setIsChanged(false)
      })
      .catch(setErrors)
      .finally(() => setLoading(false))
  }, [
    queryParams.category,
    queryParams.sortByUpvotes,
    queryParams.sortByComments,
    isChanged,
  ])

  const markSuggestionsChanged = () => {
    setIsChanged(true);
  };

  return { suggestions, loading, setLoading, errors, setSuggestions, markSuggestionsChanged }
}

export default useSuggestions
