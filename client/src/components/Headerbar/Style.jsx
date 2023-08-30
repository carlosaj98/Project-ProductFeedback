import { styled } from "@mui/material"
import { Button } from "@mui/material"
const Header = styled("header")({
  backgroundColor: "var(--dark-blue-bg)",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius:"10px",
  padding: "24px 16px 24px 24px",
  color: "var(--white)",

  svg:{
    marginRight:"16px"
  },

  "#title-header":{
    marginRight: "38px"
  },

  "#sort-container":{
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: "400",
    display: "flex",
    color:"var(--semi-light-gray)",
    background: "none",
    border: "none",
    marginRight:"273px"
  },

  "#sort-container span":{
    fontWeight:"600"
  },
})

const ButtonHeader = styled(Button)({
  backgroundColor:"var(--purple)",
  borderRadius:"10px",
  textTransform: "none",
})

export default {Header, ButtonHeader}