import { styled, Stack } from "@mui/material";

const PrincipalContainer = styled(Stack)({
  minHeight:"100vh",
  alignItems:"center",

  "#main-container":{
    maxWidth:"1200px",
  },

  header:{
    width: "100%",
    backgroundColor: "var(--dark-blue-bg)",
    padding:"27px 32px",
    borderRadius:"10px"
  },

  "#roadmap-title":{
    color:"var(--white)",
    fontFamily: "Jost",
    fontWeight:"700",
    fontSize:"20px"
  }
})

export default PrincipalContainer