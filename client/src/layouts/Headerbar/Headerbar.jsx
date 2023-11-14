import CustomHeader from "./Style"
import { useState } from "react"
import { useMediaQuery } from "@mui/material"
import { useAuth } from "../../hooks/auth"
import {
  IconSuggestion,
  ArrowDown,
  ArrowUp,
  IconCheck,
} from "../../common/Icons/IconsSVG"
import { ButtonPurple } from "../../common/CustomButtons/ButtonsMui"
import { Box, Typography, Button, Stack, Menu, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"

function Headerbar({ counter, handleSortUpvotes, handleSortComments }) {
  const [value] = useAuth()
  const sortOptions = [
    { label: "Most Upvotes", value: "mostupvotes" },
    { label: "Least Upvotes", value: "leastupvotes" },
    { label: "Most Comments", value: "mostcomments" },
    { label: "Least Comments", value: "leastcomments" },
  ]

  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedOption, setSelectedOption] = useState("mostupvotes")
  const [isOpen, setIsOpen] = useState(false)
  const isMobileScreen = useMediaQuery("(max-width: 600px)")



  const handleMenuOpen = (event) => {
    setIsOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = (option) => {
    setIsOpen(false)
    setAnchorEl(null)
    if (option) {
      setSelectedOption(option.value)
    }

    if (option.value === "mostupvotes") {
      handleSortUpvotes("desc")
    } else if (option.value === "leastupvotes") {
      handleSortUpvotes("asc")
    }

    if (option.value === "mostcomments") {
      handleSortComments("desc")
    } else if (option.value === "leastcomments") {
      handleSortComments("asc")
    }
  }

  return (
    <CustomHeader
      id="header-container"
      component="header"
      borderRadius={{ sm: "10px", xs: "0px" }}
    >
      {!isMobileScreen && (
        <>
          <Box id="svg-header-container">
            <IconSuggestion />
          </Box>{" "}
          <p id="counter-header">{counter} Suggestions</p>
        </>
      )}

      <Box>
        <Button
          id="sort-container"
          sx={{ textTransform: "none" }}
          onClick={handleMenuOpen}
        >
          <p>
            Sort by :{" "}
            <span>
              {
                sortOptions.find((option) => option.value === selectedOption)
                  .label
              }
            </span>
          </p>

          {isOpen ? (
            <ArrowUp stroke={"white"} />
          ) : (
            <ArrowDown stroke={"white"} />
          )}
        </Button>
        <Menu
          className="sort-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleMenuClose(null)}
          MenuListProps={{ sx: { padding: "0px", width: "255px" } }}
          sx={{ marginTop: "35px" }}
        >
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => handleMenuClose(option)}
              className="sort-menu-options"
              divider
              sx={{
                padding: "12px 24px",
                color: "var(--gray)",
                "&:hover": { color: "var(--purple)" },
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {option.label}
              {option.value === selectedOption && <IconCheck />}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Stack
        id="add-suggestion"
        flexDirection="row"
        flexGrow="1"
        justifyContent="flex-end"
      >
        {value.isAuth ? (
          <Link to="/createsuggestion">
            <ButtonPurple text="+ Add Feedback">+ Add Feedback</ButtonPurple>
          </Link>
        ) : (
          <ButtonPurple text="+ Add Feedback" userExclusive={true}>
            + Add Feedback
          </ButtonPurple>
        )}
      </Stack>
    </CustomHeader>
  )
}
export default Headerbar
