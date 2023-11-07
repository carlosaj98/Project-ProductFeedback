import { styled } from "@mui/material";

const CustomForm = styled("form")({

  ".form-comment-container":{
    gap:"24px"
  },

  ".form-comment-label":{
    fontFamily: "Jost",
    fontWeight:"700",
    fontSize:"18px",
    color:"var(--dark-blue-text)"
  },

  ".form-comment-characters":{
    fontFamily: "Jost",
    fontSize:"15px",
    color:"var(--dark-blue-text)"
  },
})

export default CustomForm