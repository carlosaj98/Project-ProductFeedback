import {styled, Stack} from "@mui/material"
import { Button } from "@mui/material"
const SuggestionCardContainer = styled(Stack)({
  backgroundColor: "var(--white)",
  padding: "28px 32px",
  borderRadius: "10px",
  gap: "40px",

  ".suggestion-card-text":{
    flexGrow: "1"
  },

  ".suggestion-card-text h3":{
    color: "var(--dark-blue-text)",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "-0.25px"

  },

  ".suggestion-card-text p":{
    color: "var(--gray)",
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "12px"
  },

  ".suggestion-card-text p strong":{
    color: "var(--blue)",
    fontSize: "13px",
    fontWeight: "600",
    backgroundColor: "var(--semi-light-gray)",
    padding: "6px 16px",
    borderRadius: "10px"
  },

  ".icon-comment":{
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  },

  ".icon-comment p":{
    fontStyle: "Jost",
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--dark-blue-text)"
  }
  
})

const ButtonScore = styled(Button)({
  padding: "8px",
  borderRadius:"10px",
  textTransform: "none",
  fontSize: "13px",
  fontWeight:"800",
  backgroundColor:"var(--semi-light-gray)",
  color:"var(--dark-blue-text)",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  gap:"8px",
  "&:hover":{
    backgroundColor:"#CFD7FF"
  },
  "&:active":{
    backgroundColor:"var(--blue)",
    color:"white"
  }
})

export  {SuggestionCardContainer, ButtonScore}