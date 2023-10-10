import { Button as ButtonsMui } from "@mui/material"
import { styled } from "@mui/material"

const Button = styled(ButtonsMui)({
  borderRadius: "10px",
  textTransform: "none",
  padding: "12.5px 24px",
  fontFamily: "Jost",
  fontSize: "14px",
  fontWeight: "600",
  color: "var(--white)",
})

function ButtonPurple({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--purple)",
        "&:hover": { backgroundColor: "var(--purple-hover)" },
      }}
    >
      {text}
    </Button>
  )
}

function ButtonBlue({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--blue)",
        "&:hover": { backgroundColor: "var(--blue-hover)" },
      }}
    >
      {text}
    </Button>
  )
}

function ButtonDark({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--dark-blue-text)",
        "&:hover": { backgroundColor: "var(--dark-blue-hover)" },
      }}
    >
      {text}
    </Button>
  )
}

function ButtonRed({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--red)",
        "&:hover": { backgroundColor: "var(--red-hover)" },
      }}
    >
      {text}
    </Button>
  )
}

function ButtonCategory({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--inter-color)",
        color: "var(--blue)",
        "&:hover": { backgroundColor: "var(--inter-hover-color)" },
        "&:active": { backgroundColor: "var(--blue)", color: "var(--white)" },
        padding: "5px 15px",
      }}
    >
      {text}
    </Button>
  )
}

function ButtonVote({ number }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--inter-color)",
        color: "var(--blue)",
        "&:hover": { backgroundColor: "var(--inter-hover-color)" },
        "&:active": { backgroundColor: "var(--blue)", color: "var(--white)" },
        padding: "5px 15px",
      }}
    >
      {text}
    </Button>
  )
}
export {
  ButtonPurple,
  ButtonBlue,
  ButtonDark,
  ButtonRed,
  ButtonCategory,
  ButtonVote,
}
