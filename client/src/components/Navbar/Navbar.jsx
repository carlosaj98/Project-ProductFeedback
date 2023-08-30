import Styled from "./Style"

function Navbar() {
  return (
    <Styled.Navbar sx={{ width: { md: "256px" } }}>
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
      <div id="roadmap-preview">
        <div id="rm-header">
          <p>Roadmap</p>
          <a href="">View</a>
        </div>
        <ul id="rm-list">
          <li className="rm-list-item">
            <div id="dot-planned"></div>
            <p className="rm-item-text">Planned</p>
            <p className="rm-item-number">0</p>
          </li>
          <li className="rm-list-item">
            <div id="dot-inprogress"></div>
            <p className="rm-item-text">In-Progress</p>
            <p className="rm-item-number">0</p>
          </li>
          <li className="rm-list-item">
            <div id="dot-live"></div>
            <p className="rm-item-text">Live</p>
            <p className="rm-item-number">0</p>
          </li>
        </ul>
      </div>
    </Styled.Navbar>
  )
}
export default Navbar
