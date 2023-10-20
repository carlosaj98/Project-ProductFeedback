import { styled, Stack } from "@mui/material";

const CustomContainer = styled(Stack)({
  height:"100%",
  alignItems:"center",
  justifyContent:"center",

  "#button-back":{
    alignSelf:"flex-start"
  },

  "#form-container":{
    backgroundColor:"var(--white)",
    padding:"42px",
    borderRadius:"10px"
  },
})

export default CustomContainer
