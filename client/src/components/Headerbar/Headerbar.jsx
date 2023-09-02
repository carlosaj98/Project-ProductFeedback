import Styled from "./Style"
import { IconSuggestion, ArrowDown } from "../Icons/IconsSVG"
function Headerbar() {
  return (
    <Styled.Header id="header-container">
      <IconSuggestion />
      <div id="title-header">
        <p>0 Suggestions</p>
      </div>
      <button id="sort-container">
        <p>
          Sort by : <span>Most Upvotes</span>
        </p>
        <ArrowDown stroke={"white"}/>
      </button>
      <div id="add-suggestion">
        <Styled.ButtonHeader variant="contained">
          + Add Feedback
        </Styled.ButtonHeader>
      </div>
    </Styled.Header>
  )
}
export default Headerbar
