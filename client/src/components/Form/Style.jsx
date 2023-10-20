import { styled } from "@mui/material"

const CustomForm = styled("form")({
  ".inputs-container":{
    gap:"24px"
  },

  ".labels-inputs h4": {
    color: "var(--dark-blue-text)",
    fontSize: "14px",
  },

  ".labels-inputs p": {
    color: "var(--gray)",
  },

  h2: {
    color: "var(--dark-blue-text)",
    fontSize: "24px",
    marginBottom: "40px",
  },
})

export default CustomForm
