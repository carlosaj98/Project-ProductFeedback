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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

function ButtonCategory({ text, value, action }) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--inter-color)",
        color: "var(--blue)",
        "&:hover": { backgroundColor: "var(--inter-hover-color)" },
        "&:active": { backgroundColor: "var(--blue)", color: "var(--white)" },
        padding: "5px 15px",
      }}
      onClick={() => action(value)}
    >
      {text}
    </Button>
  )
}

function ButtonVote({ number, action, isRoadmap }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    try {
      action()
      setIsActive(!isActive)
    } catch (error) {
      toast.error("Token does not exist", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

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
        padding: { sm: "14px 12px 8px 12px", xs: "6px 16px" },
        display: "flex",
        flexDirection: isRoadmap ? "row" : { sm: "column", xs: "row" },
        gap: isRoadmap ? "12px" : { sm: "8px", xs: "12px" },
        minWidth: { sm: "40px" },
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
      to={-1}
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

function ButtonBackWhite() {
  return (
    <Button
      component={Link}
      to={-1}
      sx={{
        color: "var(--white)",
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
      <ArrowLeft stroke={"var(--white)"} />
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

function ButtonStatus({ text, number, activeStatus, action, isActive }) {
  let activeColorStatus = ""
  if (activeStatus === "Planned") {
    activeColorStatus = "4px solid var(--orange)"
  } else if (activeStatus === "In-Progress") {
    activeColorStatus = "4px solid var(--purple)"
  } else if (activeStatus === "Live") {
    activeColorStatus = "4px solid var(--light-blue)"
  }

  return (
    <Button
      fullWidth
      sx={{
        color: isActive
          ? "var(--dark-blue-text)"
          : "var(--dark-blue-text-rgba)",
        fontSize: "13px",
        fontWeight: "700",
        borderRadius: "0px",
        borderBottom: isActive ? activeColorStatus : "none",
        padding: "16px 0px",
      }}
      onClick={() => action(text)}
    >
      {text} ({number})
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
  ButtonBackWhite,
  ButtonHamburger,
  ButtonStatus,
}
