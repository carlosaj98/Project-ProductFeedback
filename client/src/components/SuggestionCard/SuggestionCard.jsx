import Styled from "./Style"
import { IconComments, ArrowUp } from "../Icons/IconsSVG"

function SuggestionCard({ title, category, description, comments}) {
  const categoryCapitalize =
    category.charAt(0).toUpperCase() + category.slice(1)
  return (
    <Styled.SuggestionCard className="suggestion-card-container">
      <div className="upvote-container">
        <Styled.ButtonScore>
          <ArrowUp />
          <p>100</p>
          </Styled.ButtonScore>
      </div>
      <div className="suggestion-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong>{categoryCapitalize}</strong>
        </p>
      </div>
      <div className="icon-comment">
        <IconComments />
        <p>{comments}</p>
      </div>
    </Styled.SuggestionCard>
  )
}
export default SuggestionCard
