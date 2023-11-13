import { styled, Stack } from "@mui/material";

const RoadmapContainer = styled(Stack)({
  width:"100%",

  ".roadmap-column-container":{
    width:"100%",
    gap:"32px"
  },

  ".roadmap-column-title h3":{
    fontFamily:"Jost",
    fontWeight:"700",
    fontSize:"18px",
    color:"var(--dark-blue-text)"
  },

  ".roadmap-column-title p":{
    fontFamily:"Jost",
    fontSize:"16px",
    color:"var(--gray)"
  },
})

export default RoadmapContainer