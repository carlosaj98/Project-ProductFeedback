import { useEffect, useState } from "react"
import suggestionService from "../services/suggestion-service"

function useSuggestion(suggestionID) {
  const [suggestion, setSuggestion] = useState({})
  const [isChanged, setIsChanged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState()

  useEffect(() => {
    suggestionService
      .getById(suggestionID)
      .then(({ data }) => setSuggestion(data), setIsChanged(false))
      .catch(setErrors)
      .finally(() => setLoading(false))
  }, [suggestionID])

  const markSuggestionsChanged = () => {
    setIsChanged(true)
  }

  return { suggestion, loading, errors, setSuggestion, markSuggestionsChanged }
}

export default useSuggestion
