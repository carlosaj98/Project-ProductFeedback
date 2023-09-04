import { useState } from "react"

import {
    FormControl,
    TextField,
    FormGroup,
    Stack,
    MenuItem,
    Select,
    InputLabel,
    OutlinedInput,
} from "@mui/material"

const InputField = ({ name, errors, value, ...rest }) => {
    return (
        <FormControl>
            <FormGroup>
                <TextField
                    error={!!errors}
                    helperText={errors?.message}
                    id={name}
                    {...rest}
                    value={value || ""}
                    variant="standard"
                />
            </FormGroup>
        </FormControl>
    )
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
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
        <FormControl sx={{ m: 1, width: 300 }}>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={value}
                displayEmpty
                {...rest}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <em>{placeholder}</em>
                    }

                    return typeof selected === "string"
                        ? selected
                        : selected.join(", ")
                }}
                MenuProps={MenuProps}
            >
                <MenuItem disabled value="">
                    <em>{placeholder}</em>
                </MenuItem>

                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value ? option.label : <em>{option.label}</em>}
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
    setValue,
    clearErrors,
    ...rest
}) => {
    const [preview, setPreview] = useState(value)
    return (
        <Stack>
            <img width="300px" src={preview} />
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