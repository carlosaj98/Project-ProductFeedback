import { styled, Stack } from "@mui/material"

const SuggestionCardContainer = styled(Stack)({
  backgroundColor: "var(--white)",
  padding: "28px 32px",
  borderRadius: "10px",
  gap: "16px",

  ".dot-status-planned": {
    backgroundColor: "var(--orange)",
    width: "8px",
    height: "8px",
    borderRadius: "100%",
  },

  ".dot-status-progress": {
    backgroundColor: "var(--purple)",
    width: "8px",
    height: "8px",
    borderRadius: "100%",
  },

  ".dot-status-live": {
    backgroundColor: "var(--light-blue)",
    width: "8px",
    height: "8px",
    borderRadius: "100%",
  },

  ".status-text": {
    fontFamily: "Jost",
    fontSize: "16px",
    color: "var(--gray)",
  },

  ".suggestion-card-text": {
    flexGrow: "1",
  },

  ".suggestion-card-text h3": {
    color: "var(--dark-blue-text)",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "-0.25px",
  },

  ".suggestion-card-text p": {
    color: "var(--gray)",
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "12px",
  },

  ".suggestion-card-text p strong": {
    color: "var(--blue)",
    fontSize: "13px",
    fontWeight: "600",
    backgroundColor: "var(--semi-light-gray)",
    padding: "6px 16px",
    borderRadius: "10px",
  },

  ".icon-comment": {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  ".icon-comment p": {
    fontStyle: "Jost",
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--dark-blue-text)",
  },
})

export default SuggestionCardContainer
