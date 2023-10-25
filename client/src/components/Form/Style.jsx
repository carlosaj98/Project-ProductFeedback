import { styled, Stack } from "@mui/material"

const CustomForm = styled(Stack)({
  backgroundColor: "var(--white)",
  borderRadius: "10px",
  position: "relative",

  "#icon-form": {
    top: "-28px",
    position: "absolute",
    width: "56px",
    height: "56px",
  },

  ".inputs-container": {
    gap: "24px",
  },

  ".labels-inputs": {
    marginBottom: "16px",
  },

  ".labels-inputs h4": {
    color: "var(--dark-blue-text)",
  },

  ".labels-inputs p": {
    color: "var(--gray)",
  },

  h2: {
    color: "var(--dark-blue-text)",
    fontFamily: "Jost",
    fontWeight: "700",
    fontSize: "24px",
  },
})

export default CustomForm
