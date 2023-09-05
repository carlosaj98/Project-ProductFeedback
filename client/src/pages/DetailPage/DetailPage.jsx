import * as React from "react"
import { useParams } from "react-router-dom"
import { useSuggestion } from "../../hooks"
import Comments from "../../components/Comments"

function DetailPage() {
    const { suggestionID } = useParams()
    const { suggestion, setSuggestions, loading } = useSuggestion(suggestionID)
    if (!loading) console.log(suggestion.comments[0].content)

    return (
        // <div>{!loading && (suggestion.comments[0].content)}</div>
        <>
            {!loading && suggestion.comments.map((comment) => (
                <Comments key={comment._id} content={comment.content}/>
            ))}
        </>
    )
}
export default DetailPage
