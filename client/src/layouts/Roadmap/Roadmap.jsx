import { Box, Stack, Typography } from "@mui/material"
import RoadmapContainer from "./Style"

function Roadmap() {
  return (
    <RoadmapContainer flexDirection="row" justifyContent="space-between">
      <Stack className="roadmap-column-container">
        <Box className="roadmap-column-title">
          <Typography variant="h3">Planned (2)</Typography>
          <Typography>Ideas prioritized for research</Typography>
        </Box>
        <Box>Content</Box>
      </Stack>
      <Stack className="roadmap-column-container">2</Stack>
      <Stack className="roadmap-column-container">3</Stack>
    </RoadmapContainer>
  )
}
export default Roadmap
