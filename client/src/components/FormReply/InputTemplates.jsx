import { TextField } from "@mui/material"

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
      sx={{flexGrow:"1"}}
      InputProps={{
        sx: {
          backgroundColor: "var(--light-gray)",
          color: "var(--dark-blue-text)",
          padding:"16px 24px",
          fontFamily: "Jost",
          // ".MuiOutlinedInput-notchedOutline": { border: "none" },
        },
      }}
    />
  )
}

export default InputField
