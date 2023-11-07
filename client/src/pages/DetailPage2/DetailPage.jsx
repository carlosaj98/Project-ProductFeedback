import { useParams } from "react-router-dom"
import { useSuggestion } from "../../hooks"

import {
  Stack,
  Box,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material"
import { ButtonBack, ButtonBlue } from "../../common/CustomButtons/ButtonsMui"
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard"
import CommentCard from "../../components/CommentCard/CommentCard"

import PrincipalContainer from "./Style"

function DetailPage() {
  const { suggestionID } = useParams()
  const { suggestion, setSuggestions, loading } = useSuggestion(suggestionID)
  console.log(suggestion)

  if (loading) return <CircularProgress />

  let totalComments = suggestion.comments.length
  let totalReplies = 0
  suggestion.comments.forEach((comment) => {
    totalReplies += comment.replies.length
  })

  return (
    <PrincipalContainer id="principal-container">
      <Stack gap="24px" width="730px">
        <Stack flexDirection="row" justifyContent="space-between">
          <ButtonBack />
          <ButtonBlue text="Edit Feedback" />
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
                  isDivider={index < suggestion.comments.length - 1 }
                ></CommentCard>
            ))}
          </Stack>
        </Stack>
        <Stack id="add-comment-container">Add Comment</Stack>
      </Stack>
    </PrincipalContainer>
  )
}
export default DetailPage
