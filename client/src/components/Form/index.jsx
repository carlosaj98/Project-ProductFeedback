import { Button, Typography, Box } from "@mui/material"

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { transformData } from "./helpers"

import fields from "./fields"

const Form = ({
    heading,
    formFields,
    buttonLabel,
    onSubmit,
    validationSchema,
    defaultValues,
}) => {
    const {
        handleSubmit,
        control,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
    })
    return (
        <form onSubmit={handleSubmit((data) => onSubmit(transformData(data)))}>
            <Typography variant="h2" component="h2" mb="2rem">
                {heading}
            </Typography>

            {formFields.map(({ name, ...rest }) => {
                const InputForm = fields[rest.type] || fields.input

                if (rest.type === "file")
                    rest = { ...rest, setValue, clearErrors }

                return (
                    <Controller
                        key={name}
                        control={control}
                        name={name}
                        render={({ field: { ref, ...field } }) => {
                            return (
                                <InputForm
                                    errors={errors[name]}
                                    name={name}
                                    {...rest}
                                    {...field}
                                />
                            )
                        }}
                    />
                )
            })}

            <Box mt="2rem">
                <Button type="submit">{buttonLabel}</Button>
            </Box>
        </form>
    )
}

export default Form