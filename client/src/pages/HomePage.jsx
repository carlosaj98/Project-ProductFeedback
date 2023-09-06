import Navbar from "../components/Navbar/Navbar"
import Headerbar from "../components/Headerbar/Headerbar"
import SuggestionCard from "../components/SuggestionCard/SuggestionCard"
import { Container, Stack, Box, CircularProgress } from "@mui/material"
import { useSuggestions } from "../hooks"
import suggestionService from "../services/suggestion-service"
import { useState } from "react"
function HomePage() {
    const { suggestions, setSuggestions, loading } = useSuggestions()
    const [suggestionID, setSuggestionID] = useState("")
    const deleteSuggestion = (id) => {
      suggestionService.delete(id)
      const suggestionFiltered = suggestions.filter((suggestion) => suggestion._id !== id)
      setSuggestions(suggestionFiltered)
      setSuggestionID("")
    }
    
    if(loading) return <CircularProgress />

    const statusCards = []
    suggestions.forEach(suggestion => statusCards.push(suggestion.status))



    return (
        <Container id="home-page-container" disableGutters>
            <Stack
                direction={{ sm: "column", md: "row" }}
                padding={{ sm: "0px 39px" }}
                spacing="30px"
                marginTop={{ sm: "56px", md: "94px" }}
                justifyContent="flex-start"
            >
                <Navbar status={statusCards}/>
                <Box>
                    <Headerbar />
                    <Box
                        component={"main"}
                        marginTop={"24px"}
                        marginBottom={"120px"}
                    >
                        {suggestions.map((suggestion) => {
                            return (
                                <SuggestionCard
                                    key={suggestion._id}
                                    id= {suggestion._id}
                                    upvotes={suggestion.upvotes.length}
                                    title={suggestion.title}
                                    description={suggestion.description}
                                    category={suggestion.category}
                                    comments={suggestion.comments}
                                    onSetID = {setSuggestionID}
                                    onDelete = {deleteSuggestion}
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
