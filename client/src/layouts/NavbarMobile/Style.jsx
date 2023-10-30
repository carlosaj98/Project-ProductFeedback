import { styled, Box, Stack } from "@mui/material"

const NavbarContainer = styled(Box)({
  "#appbar-container": {
    backgroundImage: "url(/background-header-mobile.png)",
    backgroundSize: "cover",
    padding: "10px 0px",
  },

  "#appbar-container > div": {
    display: "flex",
    justifyContent: "space-between",
  },

  "#feedback-board": {
    color: "var(--white)",
    marginLeft: "24px",
  },

  "#feedback-board h2": {
    fontFamily: "Jost",
    fontSize: "15px",
    fontWeight: "700",
  },

  "#feedback-board p": {
    fontFamily: "Jost",
    fontSize: "13px",
    fontWeight: "500",
  },
})

const DrawerSectionsContainer = styled(Stack)({
  "#suggestionCategories": {
    backgroundColor: "var(--white)",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "8px",
    padding: "24px",
    borderRadius: "10px",
  },
  
  "#roadmap-preview": {
    backgroundColor: "var(--white)",
    padding: "24px",
    borderRadius: "10px",
  },

  "#rm-header": {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "24px",
    alignItems: "baseline",
  },

  "#rm-header p": {
    color: "var(--dark-blue-text)",
    fontSize: "18px",
    fontWeight: "800",
  },

  "#rm-header a": {
    color: "var(--blue)",
    fontSize: "13px",
    fontWeight: "600",
    "&:active": {
      color: "#8397F8",
    },
  },

  "#rm-list": {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
  },

  ".rm-list-item": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    fontSize: "16px",
    gap: "16px",
    color: "var(--gray)",
  },
  "#dot-planned": {
    width: "8px",
    height: "8px",
    backgroundColor: "var(--orange)",
    borderRadius: "100%",
  },
  "#dot-inprogress": {
    width: "8px",
    height: "8px",
    backgroundColor: "var(--purple)",
    borderRadius: "100%",
  },
  "#dot-live": {
    width: "8px",
    height: "8px",
    backgroundColor: "var(--light-blue)",
    borderRadius: "100%",
  },
  ".rm-item-text": {
    flexGrow: "2",
  },

  ".rm-item-number": {
    fontWeight: "700",
  },
})

export { NavbarContainer, DrawerSectionsContainer }
