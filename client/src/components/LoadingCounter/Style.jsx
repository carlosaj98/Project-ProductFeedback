import { styled, Stack } from "@mui/material";

const CustomContainer = styled(Stack)({
  minHeight:"100vh",
  maxWidth:"1200px",
  alignItems:"center",
  justifyContent:"center",
  padding:"24px",
  gap:"24px",

  "#counter-text h3":{
    fontFamily:" Jost",
    fontWeight: "700",
    fontSize:"24px",
    color: "var(--dark-blue-text)"
  },

  "#counter-text p":{
    fontFamily:"Jost",
    fontSize:"18px",
    color: "var(--gray)"
  },

  "#info-text p":{
    fontFamily:"Jost",
    fontSize:"18px",
    color: "var(--gray)"
  },

  "#text-time":{
    fontFamily:"Jost",
    fontWeight:"700",
    fontSize:"18px",
    color: "var(--red)"
  }
})

export default CustomContainer