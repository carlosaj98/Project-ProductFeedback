import { Button as ButtonsMui } from "@mui/material"
import {
  ArrowLeft,
  ArrowUp,
  IconCloseMobile,
  IconHamburgerMobile,
} from "../Icons/IconsSVG"
import { Link } from "react-router-dom"
import { styled } from "@mui/material"
import { useState } from "react"

const Button = styled(ButtonsMui)({
  borderRadius: "10px",
  textTransform: "none",
  padding: "12.5px 24px",
  fontFamily: "Jost",
  fontSize: "14px",
  fontWeight: "600",
  color: "var(--white)",
})

function ButtonPurple({ text, type }) {
  return (
    <Button
      type={type}
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

function ButtonDark({ text, type }) {
  return (
    <Button
      type={type}
      sx={{
        backgroundColor: "var(--dark-blue-text)",
        "&:hover": { backgroundColor: "var(--dark-blue-hover)" },
      }}
    >
      {text}
    </Button>
  )
}

function ButtonRed({ text, action }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--red)",
        "&:hover": { backgroundColor: "var(--red-hover)" },
      }}
      onClick={action}
    >
      {text}
    </Button>
  )
}

function ButtonCategory({ text, action }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--inter-color)",
        color: "var(--blue)",
        "&:hover": { backgroundColor: "var(--inter-hover-color)" },
        "&:active": { backgroundColor: "var(--blue)", color: "var(--white)" },
        padding: "5px 15px",
      }}
      onClick={()=>action(text)}
    >
      {text}
    </Button>
  )
}

function ButtonVote({ number, action }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    action()
    setIsActive(!isActive)
  }
  return (
    <Button
      sx={{
        backgroundColor: isActive ? "var(--blue)" : "var(--inter-color)",
        color: isActive ? "var(--white)" : "var(--dark-blue-text)",
        fontWeight: "700",
        "&:hover": {
          backgroundColor: "var(--inter-hover-color)",
          color: "var(--dark-blue-text)",
        },
        "&:active": { backgroundColor: "var(--blue)", color: "var(--white)" },
        padding: {sm:"14px 12px 8px 12px", xs:"6px 16px"},
        display: "flex",
        flexDirection: {sm:"column", xs:"row"},
        gap: "8px",
        minWidth: {sm:"40px"},
      }}
      onMouseDown={handleClick}
    >
      <ArrowUp stroke={isActive ? "var(--white)" : "var(--blue)"} />
      {number}
    </Button>
  )
}

function ButtonBack() {
  return (
    <Button
      component={Link}
      to={"/"}
      sx={{
        color: "var(--gray)",
        display: "flex",
        justifyContent: "flex-start",
        gap: "16px",
        padding: "0px",
        ".font-button-back:hover": { textDecorationLine: "underline" },
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <ArrowLeft />
      <p className="font-button-back">Go Back</p>
    </Button>
  )
}

function ButtonHamburger({ action, actionStatus }) {
  return (
    <Button onClick={action()}>
      {actionStatus ? <IconCloseMobile /> : <IconHamburgerMobile />}
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
  ButtonBack,
  ButtonHamburger,
}
