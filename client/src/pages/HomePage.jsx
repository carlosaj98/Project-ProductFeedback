import Navbar from "../components/Navbar/Navbar"
import Headerbar from "../components/mainComponents/Headerbar"
import SuggestionCard from "../components/SuggestionCard"
import { Container, Grid, Box } from "@mui/material"

import data from "../../data.json"
function HomePage() {
    const suggestionData = data.productRequests
    return (
        <Container id="home-page-container" disableGutters>
            <Grid container>
                <Grid item >
                    <Navbar />
                </Grid>
                <Grid item >
                    <Headerbar />
                    <Box component={"main"}>
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
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HomePage
