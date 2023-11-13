import { styled, Stack } from "@mui/material"

const RoadmapContainer = styled(Stack)({
  width: "100%",

  ".roadmap-status-title": {
    gap: "4px",
  },

  ".roadmap-status-title h3": {
    fontFamily: "Jost",
    fontWeight: "700",
    fontSize: "18px",
    color: "var(--dark-blue-text)",
  },

  ".roadmap-status-title p": {
    fontFamily: "Jost",
    fontSize: "14px",
    color: "var(--gray)",
  },
})

export default RoadmapContainer
