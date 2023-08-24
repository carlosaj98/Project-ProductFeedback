import RoadmapPreview from "../RoadmapPreview"

function Navbar() {
  return (
    <nav>
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
    </nav>
  )
}
export default Navbar
