import Navbar from "../components/Navbar/Navbar"
import Headerbar from "../components/Headerbar/Headerbar"
import SuggestionCard from "../components/SuggestionCard/SuggestionCard"
import { Container, Stack, Box } from "@mui/material"


import data from "../../data.json"
function HomePage() {
  const suggestionData = data.productRequests

  return (
    <Container id="home-page-container" disableGutters>
      <Stack
        direction={{ sm: "column", md: "row" }}
        padding={{ sm: "0px 39px" }}
        spacing="30px"
        marginTop={{ sm: "56px", md: "94px" }}
        justifyContent="flex-start"
      >
        <Navbar />
        <Box>
          <Headerbar />
          <Box component={"main"} marginTop={"24px"} marginBottom={"120px"}>
            {suggestionData.map((suggestion) => {
              return (
                <SuggestionCard
                  key={suggestion.id}
                  title={suggestion.title}
                  description={suggestion.description}
                  category={suggestion.category}
                  comments={
                    suggestion.comments ? suggestion.comments.length : 0
                  }
                />
              )
            })}
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}
export default HomePage
