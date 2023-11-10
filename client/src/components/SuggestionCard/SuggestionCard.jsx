import { useState } from "react"
import suggestionService from "../../services/suggestion-service"
import { SuggestionCardContainer } from "./Style"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box, Stack } from "@mui/material"
import { IconComments, ArrowUp } from "../../common/Icons/IconsSVG"
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"
import {
  ButtonCategory,
  ButtonVote,
} from "../../common/CustomButtons/ButtonsMui"
import { useMediaQuery, Button } from "@mui/material"

function SuggestionCard({
  title,
  category,
  description,
  comments,
  upvotes,
  onSetID,
  onVote,
  id,
}) {
  const [value] = useAuth()
  const [votes, setVotes] = useState(upvotes)

    const handleVote = () =>
      suggestionService.updateVotes(id).then(({ data }) => {
        setVotes(data.upvotes)
        onVote()
      })


  const categoryCapitalize =
    category.charAt(0).toUpperCase() + category.slice(1)

  let totalComments = comments.length
  let totalReplies = 0
  comments.forEach((comment) => {
    totalReplies += comment.replies.length
  })

  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  return (
    <>
      {isMobileScreen ? (
        <SuggestionCardContainer
          className="suggestion-card-container"
          flexDirection="column"
        >
          <Box className="suggestion-card-text">
            <Link to={`/suggestion/${id}`} style={{ textDecoration: "none" }}>
              <h3>{title}</h3>

              <p>{description}</p>

              <ButtonCategory text={categoryCapitalize} />
            </Link>
          </Box>
          <Stack flexDirection="row" justifyContent="space-between">
            <Box className="upvote-container">
              <ButtonVote
                number={votes.length}
                action={handleVote}
              ></ButtonVote>
            </Box>

            <Box className="icon-comment">
              <IconComments />
              <p>{totalComments + totalReplies}</p>
            </Box>
          </Stack>
        </SuggestionCardContainer>
      ) : (
        <SuggestionCardContainer
          className="suggestion-card-container"
          flexDirection="row"
          alignItems="baseline"
        >
          <Box className="upvote-container">
            <ButtonVote number={votes.length} action={handleVote}></ButtonVote>
          </Box>
          <Box className="suggestion-card-text">
            <Link to={`/suggestion/${id}`} style={{ textDecoration: "none" }}>
              <h3>{title}</h3>

              <p>{description}</p>

              <ButtonCategory text={categoryCapitalize} />
            </Link>
          </Box>
          <Box className="icon-comment">
            <IconComments />
            <p>{totalComments + totalReplies}</p>
          </Box>
        </SuggestionCardContainer>
      )}
    </>
  )
}
export default SuggestionCard
