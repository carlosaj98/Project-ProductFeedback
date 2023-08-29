import RoadmapPreview from "../RoadmapPreview"
import Styled from "./Style"

function Navbar() {
  return (
    <Styled.Navbar>
      <div id="feedbackBoard">
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </div>
      <div id="suggestionCategories">
          <Styled.CategoryButton>All</Styled.CategoryButton>
          <Styled.CategoryButton>UI</Styled.CategoryButton>
          <Styled.CategoryButton>UX</Styled.CategoryButton>
          <Styled.CategoryButton>Enhancement</Styled.CategoryButton>
          <Styled.CategoryButton>Bug</Styled.CategoryButton>
          <Styled.CategoryButton>Feature</Styled.CategoryButton>
      </div>
      <RoadmapPreview />
    </Styled.Navbar>
  )
}
export default Navbar
