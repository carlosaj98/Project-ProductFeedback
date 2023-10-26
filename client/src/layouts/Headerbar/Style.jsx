import { styled } from "@mui/material"
import { Stack } from "@mui/material"
const CustomHeader = styled(Stack)({
  backgroundColor: "var(--dark-blue-bg)",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius:"10px",
  padding: "14px 16px",
  color: "var(--white)",

  "#svg-header-container":{
    marginRight:"16px",
    marginLeft: "8px"
  },

  "#counter-header":{
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
  },

  "#sort-container svg":{
    marginLeft: "9px",
    color: "white"
  },

  "#sort-container span":{
    fontWeight:"600"
  },

})

export default CustomHeader