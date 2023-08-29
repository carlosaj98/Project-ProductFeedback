import { styled } from "@mui/material"
const Navbar = styled('nav')({
    display: "flex", 
    flexDirection: "column",
    gap: "24px",

    "#feedbackBoard": {
        width:"100%",
        height: "137px",
        backgroundImage: `url("../../../assets/suggestions/desktop/background-header.png")`,
        backgroundSize: "cover",
        borderRadius: "0.5rem",
        color: "#FFFFFF",
        paddingLeft:"24px"
    },

    "#feedbackBoard h2":{
        fontSize:"20px",
        fontWeight:"600",
        marginTop:"62px",
        letterSpacing: "-0.25px",
        lineHeight:"normal"
    },

    "#feedbackBoard p":{
        fontSize:"15px",
        fontWeight:"400",
        lineHeight:"normal"
    }
  });

  export default {Navbar}