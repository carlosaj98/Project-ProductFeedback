import Styled from "./Style"
import { IconSuggestion, ArrowDown } from "../Icons/IconsSVG"
import { ButtonPurple } from "../CustomButtons/ButtonsMui"
import { Link } from "react-router-dom"
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
        <ArrowDown stroke={"white"} />
      </button>
      <div id="add-suggestion">
        <Link to="/createsuggestion">
          <ButtonPurple text="+ Add Feedback">+ Add Feedback</ButtonPurple>
        </Link>
      </div>
    </Styled.Header>
  )
}
export default Headerbar
