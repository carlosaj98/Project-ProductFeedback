import { Box, Stack, Typography } from "@mui/material"
import RoadmapContainer from "./Style"
import RoadmapCard from "../../components/RoadmapCard/RoadmapCard"
import { ButtonStatus } from "../../common/CustomButtons/ButtonsMui"
import { useState } from "react"

function RoadmapMobile({ suggestions }) {
  const [currentStatus, setCurrentStatus] = useState("In-Progress")
  let statusDescription = ""
  const suggestionsPlanned = suggestions.filter(
    (suggestion) => suggestion.status === "Planned"
  )
  const suggestionsInProgress = suggestions.filter(
    (suggestion) => suggestion.status === "In-Progress"
  )

  const suggestionsLive = suggestions.filter(
    (suggestion) => suggestion.status === "Live"
  )

  const suggestionsFiltered = suggestions.filter(
    (suggestion) => suggestion.status === currentStatus
  )

  const handleStatus = (status) => {
    setCurrentStatus(status)
  }

  if (currentStatus === "Planned")
    statusDescription = "Ideas prioritized for research"
  if (currentStatus === "In-Progress")
    statusDescription = "Currently being developed"
  if (currentStatus === "Live") statusDescription = "Released features"

  return (
    <RoadmapContainer>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        borderBottom={"1px solid rgba(140, 146, 179, 0.25)"}
      >
        <ButtonStatus
          text={"Planned"}
          number={suggestionsPlanned.length}
          action={handleStatus}
          activeStatus={currentStatus}
          isActive={currentStatus === "Planned"}
        />
        <ButtonStatus
          text={"In-Progress"}
          number={suggestionsInProgress.length}
          action={handleStatus}
          activeStatus={currentStatus}
          isActive={currentStatus === "In-Progress"}
        />
        <ButtonStatus
          text={"Live"}
          number={suggestionsLive.length}
          action={handleStatus}
          activeStatus={currentStatus}
          isActive={currentStatus === "Live"}
        />
      </Stack>
      <Stack gap="24px" padding="24px" marginBottom="50px">
        <Stack className="roadmap-status-title">
          <Typography variant="h3">
            {currentStatus} ({suggestionsFiltered.length})
          </Typography>
          <Typography>{statusDescription}</Typography>
        </Stack>
        <Stack gap="24px">
          {suggestionsFiltered.map((suggestion) => {
            return (
                <RoadmapCard
                  key={suggestion._id}
                  id={suggestion._id}
                  upvotes={suggestion.upvotes}
                  title={suggestion.title}
                  description={suggestion.description}
                  category={suggestion.category}
                  comments={suggestion.comments}
                  variantStatus={currentStatus}
                />
            )
          })}
        </Stack>
      </Stack>
    </RoadmapContainer>
  )
}
export default RoadmapMobile
