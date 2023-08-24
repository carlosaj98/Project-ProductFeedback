function RoadmapPreview() {
  return (
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
  )
}
export default RoadmapPreview
