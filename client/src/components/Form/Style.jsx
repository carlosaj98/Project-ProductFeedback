import { styled, Stack } from "@mui/material"

const CustomForm = styled(Stack)({
  backgroundColor:"var(--white)",
  borderRadius:"10px",

  ".inputs-container":{
    gap:"24px"
  },

  ".labels-inputs":{
    marginBottom:"16px"
  },

  ".labels-inputs h4": {
    color: "var(--dark-blue-text)",

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
