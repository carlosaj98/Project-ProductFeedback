import Navbar from "../components/Navbar/Navbar"
import Headerbar from "../components/mainComponents/Headerbar"
import SuggestionCard from "../components/SuggestionCard"
import { Container, Grid, Box } from "@mui/material"

import data from "../../data.json"
function HomePage() {
    const suggestionData = data.productRequests
    return (
        <Container id="home-page-container" disableGutters>
            <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    marginTop: "94px",
                }}
            >
                <Grid item sx={{ width: "255px" }}>
                    <Navbar />
                </Grid>
                <Grid item sx={{ width: "825px" }}>
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
