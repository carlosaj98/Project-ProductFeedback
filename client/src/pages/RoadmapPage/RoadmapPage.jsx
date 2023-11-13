import Roadmap from "../../layouts/Roadmap/Roadmap"
import PrincipalContainer from "./Style"
import { Stack, Typography, Box } from "@mui/material"
import {
  ButtonBackWhite,
  ButtonPurple,
} from "../../common/CustomButtons/ButtonsMui"

function RoadmapPage() {
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
            <ButtonPurple text="+ Add Feedback" />
          </Box>
        </Stack>
        <Roadmap />
      </Stack>
    </PrincipalContainer>
  )
}
export default RoadmapPage
