import Roadmap from "../../layouts/Roadmap/Roadmap"
import PrincipalContainer from "./Style"
import { Stack, Typography, Box } from "@mui/material"
import {
  ButtonBackWhite,
  ButtonPurple,
} from "../../common/CustomButtons/ButtonsMui"
import { Link } from "react-router-dom"

import { useSuggestions } from "../../hooks"

function RoadmapPage() {
  const { suggestions, loading } = useSuggestions({
    category: "",
    sortByUpvotes: "",
    sortByComments: "",
  })

  console.log(suggestions)

  return (
    <PrincipalContainer id="principal-container" disableGutters>
      <Stack alignItems="center" gap="48px">
        <Stack
          component="header"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <ButtonBackWhite />
            <Typography id="roadmap-title">Roadmap</Typography>
          </Box>
          <Box>
            <Link to="/createsuggestion">
              <ButtonPurple text="+ Add Feedback">+ Add Feedback</ButtonPurple>
            </Link>
          </Box>
        </Stack>
        <Roadmap suggestions={suggestions} />
      </Stack>
    </PrincipalContainer>
  )
}
export default RoadmapPage
