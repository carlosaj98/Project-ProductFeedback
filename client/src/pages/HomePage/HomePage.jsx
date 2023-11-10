import Navbar from "../../layouts/Navbar/Navbar"
import NavbarMobile from "../../layouts/NavbarMobile/NavbarMobile"
import Headerbar from "../../layouts/Headerbar/Headerbar"
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard"
import { Container, Stack, Box, CircularProgress } from "@mui/material"
import { useSuggestions } from "../../hooks"
import EmptySuggestion from "../../components/EmptySuggestion/EmptySuggestion"
import { useMediaQuery } from "@mui/material"
import { useState } from "react"

function HomePage() {
  const [category, setCategory] = useState("")
  const [sortUpvotes, setSortUpvotes] = useState("desc")
  const [sortComments, setSortComments] = useState("")
  const { suggestions, setSuggestions, loading, markSuggestionsChanged } = useSuggestions({
    category: category,
    sortByUpvotes: sortUpvotes,
    sortByComments: sortComments,
  })

  const handleCategory = (activeCategory) => setCategory(activeCategory)
  const handleSortUpvotes = (activeSort) => {
    setSortUpvotes(activeSort), setSortComments("")
  }
  const handleSortComments = (activeSort) => {
    setSortComments(activeSort), setSortUpvotes("")
  }

  const onVote=()=> markSuggestionsChanged()

  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  if (loading) return <CircularProgress />

  const statusCards = []
  suggestions.forEach((suggestion) => statusCards.push(suggestion.status))

  return (
    <Container id="home-page-container" disableGutters>
      <Stack
        direction={{ sm: "column", md: "row" }}
        padding={{ sm: "0px 39px" }}
        spacing="30px"
        marginTop={{ sm: "56px", md: "94px" }}
      >
        {isMobileScreen ? (
          <NavbarMobile status={statusCards} handleCategory={handleCategory} />
        ) : (
          <Navbar status={statusCards} handleCategory={handleCategory} />
        )}

        <Box flexGrow="1">
          <Headerbar
            counter={suggestions.length}
            handleSortUpvotes={handleSortUpvotes}
            handleSortComments={handleSortComments}
          />
          <Stack
            component={"main"}
            marginTop={"24px"}
            marginBottom={"120px"}
            height="100%"
            padding={{ sm: "0px", xs: "24px" }}
            gap="20px"
          >
            {suggestions.length > 0 ? (
              suggestions.map((suggestion) => {
                return (
                  <SuggestionCard
                    key={suggestion._id}
                    id={suggestion._id}
                    upvotes={suggestion.upvotes}
                    title={suggestion.title}
                    description={suggestion.description}
                    category={suggestion.category}
                    comments={suggestion.comments}
                    onVote={onVote}
                  />
                )
              })
            ) : (
              <EmptySuggestion />
            )}
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
export default HomePage
