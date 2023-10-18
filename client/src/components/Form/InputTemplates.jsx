import { useState } from "react"
import { ArrowDown } from "../Icons/IconsSVG"

import {
  FormControl,
  TextField,
  FormGroup,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  OutlinedInput,
  Box,
} from "@mui/material"

const InputField = ({ name, errors, value, label, ...rest }) => {
  return (
    <TextField
      error={!!errors}
      helperText={errors?.message}
      id={name}
      {...rest}
      value={value || ""}
      label=""
      fullWidth
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
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        {...rest}
        inputProps={{ IconComponent: () => null }}
        endAdornment={
          <Box>
            <ArrowDown />
          </Box>
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

const FileField = ({ name, errors, onChange, value, multiple, setValue, clearErrors, ...rest }) => {
  const [preview, setPreview] = useState(value)
  return (
    <Stack>
      <Box>
        <img width="150px" src={preview}/>
      </Box>

      <FormControl>
        <FormGroup>
          <TextField
            error={!!errors}
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
