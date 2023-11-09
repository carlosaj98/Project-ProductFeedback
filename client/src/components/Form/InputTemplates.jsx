import { useState } from "react"
import { ArrowDown, ArrowUp } from "../../common/Icons/IconsSVG"

import {
  FormControl,
  TextField,
  FormGroup,
  Stack,
  MenuItem,
  Select,
  Box,
} from "@mui/material"

const InputField = ({ name, errors, value, label, multiline, ...rest }) => {
  return (
    <TextField
      multiline={multiline}
      error={!!errors}
      helperText={errors?.message}
      id={name}
      {...rest}
      value={value || ""}
      label=""
      fullWidth
      InputProps={{
        sx: {
          backgroundColor: "var(--light-gray)",
          color: "var(--dark-blue-text)",
          fontFamily: "Jost",
          // ".MuiOutlinedInput-notchedOutline": { border: "none" },
        },
      }}
    />
  )
}

const SelectField = ({
  name,
  label,
  errors,
  value = [],
  options,
  placeholder,
  customers,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  return (
    <FormControl fullWidth>
      <Select
        onMouseDown={handleClick}
        sx={{
          backgroundColor: "var(--light-gray)",
          color: "var(--dark-blue-text)",
          fontFamily: "Jost",
          // ".MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
        MenuProps={{
          MenuListProps: { disablePadding: true },
          sx: { marginTop: "16px" },
        }}
        value={value}
        {...rest}
        inputProps={{ IconComponent: () => null }}
        endAdornment={<Box>{!isOpen ? <ArrowDown /> : <ArrowUp />}</Box>}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            divider
            sx={{
              padding: "12px 24px",
              color: "var(--gray)",
              "&:hover": { color: "var(--purple)" },
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "Jost",
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

const FileField = ({
  name,
  errors,
  onChange,
  value,
  multiple,
  label,
  setValue,
  clearErrors,
  ...rest
}) => {
  const [preview, setPreview] = useState(value)
  return (
    <Stack gap={"12px"} >
      {value && (
        <Box classname="profile-image-preview" sx={{alignSelf:"center", width:"150px", height:"150px"}}>
          <img src={preview} style={{objectFit:"cover", width: "100%", height:"100%", borderRadius:"100%"}}/>
        </Box>
      )}

      <FormControl>
        <FormGroup >
          <TextField
            error={!!errors}
            label=""
            helperText={errors?.message}
            id={name}
            {...rest}
            value={value?.filename}
            onChange={(e) => {
              onChange(e.target.files[0])
              setPreview(URL.createObjectURL(e.target.files[0]))
            }}
            inputProps={{ multiple }}
          />
        </FormGroup>
      </FormControl>
    </Stack>
  )
}

export default { input: InputField, select: SelectField, file: FileField }
