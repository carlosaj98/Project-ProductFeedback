import { styled } from "@mui/material"
import { Button } from "@mui/material"
const Navbar = styled("nav")({
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    "#feedbackBoard": {
        width: "100%",
        backgroundImage: `url("../../../assets/suggestions/desktop/background-header.png")`,
        backgroundSize: "cover",
        borderRadius: "10px",
        color: "var(--white)",
        padding: "24px",
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
        backgroundColor: "var(--white)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "8px",
        padding: "24px",
        borderRadius: "10px",
    },

    "#roadmap-preview":{
        width: "100%",
        backgroundColor:"var(--white)",
        display: "flex",
        flexDirection:"column",
        padding:"24px 19px 24px 24px",
        borderRadius: "10px"
    },

    "#rm-header":{
        display: "flex",
        justifyContent:"space-between",
        marginBottom: "24px",
        alignItems: "baseline",
    },

    "#rm-header p":{
        color: "var(--dark-blue-text)",
        fontSize: "18px",
        fontWeight: "800",
    },

    "#rm-header a":{
        color: "var(--blue)",
        fontSize: "13px",
        fontWeight: "600",
        "&:active":{
            color:"#8397F8"
        }
    },

    "#rm-list":{
        display: "flex",
        flexDirection:"column",
        listStyle:"none"
    },

    ".rm-list-item":{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        fontSize: "16px",
        gap: "16px",
        color: "var(--gray)"
    },
    "#dot-planned":{
        width: "8px",
        height: "8px",
        backgroundColor: "var(--orange)",
        borderRadius:"100%",
    },
    "#dot-inprogress":{
        width: "8px",
        height: "8px",
        backgroundColor: "var(--purple)",
        borderRadius:"100%",
    },
    "#dot-live":{
        width: "8px",
        height: "8px",
        backgroundColor: "var(--light-blue)",
        borderRadius:"100%",
    },
    ".rm-item-text":{
        flexGrow: "2",

    },

    ".rm-item-number":{
        fontWeight:"700"
    },

    "@media(max-width: 900px)":{
        flexDirection: "row",
        height: "178px",
        gap: "10px"
    }

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
