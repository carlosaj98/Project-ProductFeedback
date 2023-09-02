import { styled } from "@mui/material"
import { Button } from "@mui/material"
const Header = styled("header")({
  backgroundColor: "var(--dark-blue-bg)",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius:"10px",
  padding: "14px 0px",
  color: "var(--white)",

  svg:{
    marginRight:"16px",
    marginLeft: "24px"
  },

  "#title-header":{
    marginRight: "38px"
  },

  "#sort-container":{
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: "400",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-start",
    color:"var(--semi-light-gray)",
    background: "none",
    border: "none",
    marginRight:"273px"
  },

  "#sort-container svg":{
    marginLeft: "9px",
    color: "white"
  },

  "#sort-container span":{
    fontWeight:"600"
  },
})

const ButtonHeader = styled(Button)({
  backgroundColor:"var(--purple)",
  marginRight: "16px",
  borderRadius:"10px",
  textTransform: "none",
  padding: "12.5px 24px",
  fontFamily:"Jost",
  fontSize: "14px",
  fontWeight: "600",
  "&:hover":{
    backgroundColor: "var(--purple-hover)"
  }
})

export default {Header, ButtonHeader}