import { useEffect, useState } from 'react'
import commentService from '../services/comment-service'

function useComment(commentID) {
	const [comment, setComment] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		commentService
			.getById(commentID)
			.then(({ data }) => setSuggestion(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [commentID])

	return { comment, loading, errors, setComment }
}

export default useComment