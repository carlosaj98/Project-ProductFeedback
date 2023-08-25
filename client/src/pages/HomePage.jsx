import Navbar from "../components/mainComponents/Navbar"
import Headerbar from "../components/mainComponents/Headerbar"
import SuggestionCard from "../components/SuggestionCard"
import { Container, Grid } from "@mui/material"

import data from "../../data.json"
function HomePage() {
  const suggestionData = data.productRequests
  return (
    <Container >
      <div id="home-page-container">
        <Grid container spacing={"30px"}>
          <Grid item sx={{width: "255px"}}>
            <Navbar />
          </Grid>
          <Grid item sx={{width:"825px"}}>
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
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
export default HomePage
