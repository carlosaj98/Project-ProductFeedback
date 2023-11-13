import { styled, Container } from "@mui/material";

const PrincipalContainer = styled(Container)({
  border: "1px solid red",
  minHeight:"100vh",

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