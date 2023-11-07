import { styled, Stack } from "@mui/material"

const PrincipalContainer = styled(Stack)({
  alignItems: "center",
  border: "1px solid blue",
  minHeight:"100vh",
  

  "#comments-container":{
    backgroundColor: "var(--white)",
    padding: "24px 32px",
    borderRadius: "10px",
    gap:"28px"
  },

  "#comments-counter":{
    fontFamily: "Jost",
    fontWeight: "700",
    fontSize: "18px",
    color: "var(--dark-blue-text)",
  },

  "#add-comment-container":{
    backgroundColor: "var(--white)",
    padding: "24px",
    borderRadius: "10px"
  },
})

export default PrincipalContainer
