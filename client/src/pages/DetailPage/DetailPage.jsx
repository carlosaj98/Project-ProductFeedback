import { useParams } from "react-router-dom"
import { useSuggestion } from "../../hooks"
import { useAuth } from "../../hooks/auth"

import { Stack, Box, Typography, CircularProgress } from "@mui/material"
import { Link } from "react-router-dom"
import { ButtonBack, ButtonBlue } from "../../common/CustomButtons/ButtonsMui"
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard"
import CommentCard from "../../components/CommentCard/CommentCard"
import FormComment from "../../components/FormComment/FormComment"

import PrincipalContainer from "./Style"

function DetailPage() {
  const [value] = useAuth()
  const { suggestionID } = useParams()
  const { suggestion, setSuggestions, loading } = useSuggestion(suggestionID)

  if (loading)
    return (
      <Stack minHeight={"100vh"} alignItems="center" justifyContent="center">
        <CircularProgress sx={{ color: "var(--purple)" }} size={"32px"} />
      </Stack>
    )

  let totalComments = suggestion.comments.length
  let totalReplies = 0
  suggestion.comments.forEach((comment) => {
    totalReplies += comment.replies.length
  })

  return (
    <PrincipalContainer id="principal-container">
      <Stack gap="24px" width={{ md: "730px", xs: "100%" }}>
        <Stack flexDirection="row" justifyContent="space-between">
          <ButtonBack />
          {value.isAuth ? (
            <Link to={`/suggestion/editsuggestion/${suggestionID}`}>
              <ButtonBlue text="Edit Feedback" />
            </Link>
          ) : (
            <ButtonBlue text="Edit Feedback" userExclusive={true} />
          )}
        </Stack>
        <Box id="suggestion-card-container" component="header">
          <SuggestionCard
            key={suggestion._id}
            id={suggestion._id}
            upvotes={suggestion.upvotes}
            title={suggestion.title}
            description={suggestion.description}
            category={suggestion.category}
            comments={suggestion.comments}
          />
        </Box>
        <Stack component="main" id="comments-container">
          <Typography id="comments-counter">
            {totalComments + totalReplies} Comments
          </Typography>
          <Stack gap={"32px"}>
            {suggestion.comments.map((comment, index) => (
              <CommentCard
                key={comment._id}
                id={comment._id}
                content={comment.content}
                user={comment.user}
                replies={comment.replies}
                avatar={comment.user.avatar}
                isDivider={index < suggestion.comments.length - 1}
              ></CommentCard>
            ))}
          </Stack>
        </Stack>
        <Stack id="add-comment-container">
          <FormComment />
        </Stack>
      </Stack>
    </PrincipalContainer>
  )
}
export default DetailPage
