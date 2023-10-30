import { styled, Stack } from "@mui/material"

const CustomContainer = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  minHeight:"460px",
  height: "100%",
  backgroundColor: "var(--white)",
  borderRadius: "10px",

  "#illustration-text-container h3":{
    fontFamily: "Jost",
    fontWeight:"700",
    color:"var(--dark-blue-text)"
  },

  "#illustration-text-container p":{
    fontFamily: "Jost",
    color:"var(--dark-blue-text)"
  }
})

export default CustomContainer
