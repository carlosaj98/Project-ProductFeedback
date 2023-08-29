import { styled } from "@mui/material"
import { Button } from "@mui/material"
const Navbar = styled("nav")({
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    "#feedbackBoard": {
        width: "100%",
        height: "137px",
        backgroundImage: `url("../../../assets/suggestions/desktop/background-header.png")`,
        backgroundSize: "cover",
        borderRadius: "10px",
        color: "var(--white)",
        paddingLeft: "24px",
    },

    "#feedbackBoard h2": {
        fontSize: "20px",
        fontWeight: "600",
        marginTop: "62px",
        letterSpacing: "-0.25px",
        lineHeight: "normal",
    },

    "#feedbackBoard p": {
        fontSize: "15px",
        fontWeight: "400",
        lineHeight: "normal",
    },

    "#suggestionCategories": {
        width: "100%",
        height: "166px",
        backgroundColor: "var(--white)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "7px",
        padding: "24px",
        borderRadius: "10px",
    },
})

const CategoryButton = styled(Button)({
    color: "var(--blue)",
    backgroundColor: "var(--semi-light-gray)",
    fontSize: "13px",
    fontWeight: "600",
    lineHeight: "normal",
    borderRadius: "10px",
    textTransform: "none",
    height: "30px",
    padding: "0px 16px",
    "&:hover": {
        backgroundColor: "#CFD7FF",
        color: "var(--blue)",
    },
    "&:active":{
        backgroundColor: "var(--blue)",
        color: "var(--white)",
    }
})

export default { Navbar, CategoryButton }
