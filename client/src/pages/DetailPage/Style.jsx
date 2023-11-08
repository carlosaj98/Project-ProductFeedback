import { styled, Stack } from "@mui/material"

const PrincipalContainer = styled(Stack)({
  alignItems: "center",
  minHeight: "100vh",
  padding: "80px 0px",

  "#comments-container": {
    backgroundColor: "var(--white)",
    padding: "24px 32px 48px 32px",
    borderRadius: "10px",
    gap: "28px",
  },

  "#comments-counter": {
    fontFamily: "Jost",
    fontWeight: "700",
    fontSize: "18px",
    color: "var(--dark-blue-text)",
  },

  "#add-comment-container": {
    backgroundColor: "var(--white)",
    padding: "24px",
    borderRadius: "10px",
  },
})

export default PrincipalContainer
