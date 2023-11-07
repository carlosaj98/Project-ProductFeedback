import { styled, Stack } from "@mui/material"

const CommentContainer = styled(Stack)({
  flexDirection: "row",
  gap: "24px",

  ".user-fullname": {
    color: "var(--dark-blue-text)",
    fontFamily: "Jost",
    fontWeight: "700",
    fontSize: "14px",
  },

  ".user-username": {
    color: "var(--gray)",
    fontFamily: "Jost",
    fontWeight: "400",
    fontSize: "14px",
  },

  ".user-comment": {
    color: "var(--gray)",
    fontFamily: "Jost",
    fontWeight: "400",
    fontSize: "15px",
  },
})

const ReplyContainer = styled(Stack)({ 
  flexDirection: "row", 
  gap: "24px",

  ".username-reply":{
    fontWeight:"700",
    color:"var(--purple)"
  }
})

export { CommentContainer, ReplyContainer }
