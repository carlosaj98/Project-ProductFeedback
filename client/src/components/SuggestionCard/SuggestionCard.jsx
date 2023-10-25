import Styled from "./Style"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Button } from "@mui/material"
import { IconComments, ArrowUp } from "../Icons/IconsSVG"
import { ButtonVote } from "../CustomButtons/ButtonsMui"
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"
import { ButtonCategory } from "../CustomButtons/ButtonsMui"

function SuggestionCard({
  title,
  category,
  description,
  comments,
  upvotes,
  onSetID,
  onDelete,
  id,
}) {
  const [value] = useAuth()
  const categoryCapitalize =
    category.charAt(0).toUpperCase() + category.slice(1)

  let totalComments = comments.length
  let totalReplies = 0
  comments.forEach((comment) => {
    totalReplies += comment.replies.length
  })

  return (
    <Styled.SuggestionCard className="suggestion-card-container">
      <div className="upvote-container">
        <ButtonVote number={upvotes}></ButtonVote>
      </div>
      <div className="suggestion-card-text">
        <Link to={`/suggestion/${id}`} style={{ textDecoration: "none" }}>
          <h3>{title}</h3>

          <p>{description}</p>

          <ButtonCategory text={categoryCapitalize}/>
        </Link>
      </div>
      <div className="icon-comment">
        <IconComments />
        <p>{totalComments + totalReplies}</p>
        <Link to={`/suggestion/editsuggestion/${id}`}>
          <EditIcon color="primary" />
        </Link>
        {value.isAdmin && (
          <Button
            onClick={() => {
              onSetID(id)
              onDelete(id)
            }}
          >
            <DeleteIcon color="error" />
          </Button>
        )}
      </div>
    </Styled.SuggestionCard>
  )
}
export default SuggestionCard
