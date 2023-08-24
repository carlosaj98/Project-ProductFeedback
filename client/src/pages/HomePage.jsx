import Navbar from "../components/mainComponents/Navbar"
import Headerbar from "../components/mainComponents/Headerbar"
import SuggestionCard from "../components/SuggestionCard"

import data from "../../data.json"
function HomePage() {
  const suggestionData = data.productRequests
  return (
    <div id="home-page-container">
      <Navbar />
      <Headerbar />
      <main>
        {suggestionData.map((suggestion) => {
          return (
            <SuggestionCard
              key={suggestion.id}
              title={suggestion.title}
              description={suggestion.description}
              category={suggestion.category}
            />
          )
        })}
      </main>
    </div>
  )
}
export default HomePage
