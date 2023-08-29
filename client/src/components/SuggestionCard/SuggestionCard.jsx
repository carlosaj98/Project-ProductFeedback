

function SuggestionCard({title, category, description}) {
  return (
    <div className="suggestion-card-container">
      <div className="upvote-container">
        <button>100</button>
      </div>
      <div className="suggestion-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>{category}</strong></p>
      </div>
    </div>
  )
}
export default SuggestionCard