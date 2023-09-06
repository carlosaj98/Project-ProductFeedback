import * as React from "react"
import { useParams } from "react-router-dom"
import { useSuggestion } from "../../hooks"
import Comments from "../../components/CommentCard/Comments"
import { Link } from "react-router-dom"
import { CircularProgress, Stack, Button } from "@mui/material"
import NewComment from "."

function DetailPage() {
    const { suggestionID } = useParams()
    const { suggestion, setSuggestions, loading } = useSuggestion(suggestionID)

    if (loading) return <CircularProgress />

    return (
        // <div>{!loading && (suggestion.comments[0].content)}</div>
        <>
            <Button variant="outlined" component={Link} to="/">
                Back
            </Button>
            <h1 style={{ textAlign: "center" }}>Comments</h1>
            <Stack gap="16px" padding={"30px"}>
                {suggestion.comments.map((comment) => (
                    <Comments
                        key={comment._id}
                        content={comment.content}
                        user={comment.user.username}
                        replies={comment.replies}
                    />
                ))}
            </Stack>
            <Stack alignItems={"center"}>
                <NewComment />
            </Stack>
        </>
    )
}
export default DetailPage
