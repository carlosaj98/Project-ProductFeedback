import { Box, Stack, Typography } from "@mui/material"
import RoadmapContainer from "./Style"
import RoadmapCard from "../../components/RoadmapCard/RoadmapCard"
function Roadmap({ suggestions, onVote }) {
  const suggestionsPlanned = suggestions.filter(
    (suggestion) => suggestion.status === "Planned"
  )
  const suggestionsInProgress = suggestions.filter(
    (suggestion) => suggestion.status === "In-Progress"
  )

  const suggestionsLive = suggestions.filter(
    (suggestion) => suggestion.status === "Live"
  )

  return (
    <RoadmapContainer flexDirection="row" justifyContent="space-between" gap={{md: "30px", sm:"16px"}}>
      <Stack className="roadmap-column-container">
        <Box className="roadmap-column-title">
          <Typography variant="h3">
            Planned ({suggestionsPlanned.length})
          </Typography>
          <Typography>Ideas prioritized for research</Typography>
        </Box>
        <Stack gap="24px">
          {suggestionsPlanned.map((suggestion) => {
            return (
                <RoadmapCard
                  key={suggestion._id}
                  id={suggestion._id}
                  upvotes={suggestion.upvotes}
                  title={suggestion.title}
                  description={suggestion.description}
                  category={suggestion.category}
                  comments={suggestion.comments}
                  variantStatus={"Planned"}
                  onVote={onVote}
                />
            )
          })}
        </Stack>
      </Stack>
      <Stack className="roadmap-column-container">
        <Box className="roadmap-column-title">
          <Typography variant="h3">
            In-Progress ({suggestionsInProgress.length})
          </Typography>
          <Typography>Currently being developed</Typography>
        </Box>
        <Stack gap="24px">
          {suggestionsInProgress.map((suggestion) => {
            return (
                <RoadmapCard
                  key={suggestion._id}
                  id={suggestion._id}
                  upvotes={suggestion.upvotes}
                  title={suggestion.title}
                  description={suggestion.description}
                  category={suggestion.category}
                  comments={suggestion.comments}
                  variantStatus={"In-Progress"}
                  onVote={onVote}
                />
            )
          })}
        </Stack>
      </Stack>
      <Stack className="roadmap-column-container">
        <Box className="roadmap-column-title">
          <Typography variant="h3">Live ({suggestionsLive.length})</Typography>
          <Typography>Released features</Typography>
        </Box>
        <Stack gap="24px">
          {suggestionsLive.map((suggestion) => {
            return (
                <RoadmapCard
                  key={suggestion._id}
                  id={suggestion._id}
                  upvotes={suggestion.upvotes}
                  title={suggestion.title}
                  description={suggestion.description}
                  category={suggestion.category}
                  comments={suggestion.comments}
                  variantStatus={"Live"}
                  onVote={onVote}
                />
            )
          })}
        </Stack>
      </Stack>
    </RoadmapContainer>
  )
}
export default Roadmap
