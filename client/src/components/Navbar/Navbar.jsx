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
          <button>All</button>
          <button>UI</button>
          <button>UX</button>
          <button>Enhancement</button>
          <button>Bug</button>
          <button>Feature</button>
      </div>
      <RoadmapPreview />
    </Styled.Navbar>
  )
}
export default Navbar
