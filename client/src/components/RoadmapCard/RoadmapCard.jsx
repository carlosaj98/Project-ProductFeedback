import { useState } from "react"
import suggestionService from "../../services/suggestion-service"
import SuggestionCardContainer from "./Style"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box, Stack, Typography } from "@mui/material"
import { IconComments, ArrowUp } from "../../common/Icons/IconsSVG"
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"
import {
  ButtonCategory,
  ButtonVote,
} from "../../common/CustomButtons/ButtonsMui"

function RoadmapCard({
  title,
  category,
  description,
  comments,
  upvotes,
  onSetID,
  onVote,
  id,
  variantStatus,
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

  let dotStatusStyle = ""
  let borderStatusStyle = ""
  if (variantStatus === "Planned") {
    dotStatusStyle = "dot-status-planned"
    borderStatusStyle = "6px solid var(--orange)"
  } else if (variantStatus === "In Progress") {
    dotStatusStyle = "dot-status-progress"
    borderStatusStyle = "6px solid var(--purple)"
  } else if (variantStatus === "Live") {
    dotStatusStyle = "dot-status-live"
    borderStatusStyle = "6px solid var(--light-blue)"
  }

  return (
    <SuggestionCardContainer
      className="suggestion-card-container"
      flexDirection="column"
      borderTop={borderStatusStyle}
    >
      <Stack flexDirection="row" alignItems="center" gap="16px">
        <Box className={dotStatusStyle}></Box>
        <Typography className="status-text">{variantStatus}</Typography>
      </Stack>
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
            isRoadmap={true}
          ></ButtonVote>
        </Box>

        <Box className="icon-comment">
          <IconComments />
          <p>{totalComments + totalReplies}</p>
        </Box>
      </Stack>
    </SuggestionCardContainer>
  )
}
export default RoadmapCard
