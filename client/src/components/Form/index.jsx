import { Button, Box, Stack } from "@mui/material"

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { transformData } from "./helpers"

import fields from "./InputTemplates"
import CustomForm from "./Style"

const Form = ({ heading, formFields, buttonLabel, onSubmit, validationSchema, defaultValues }) => {
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
    <CustomForm onSubmit={handleSubmit((data) => onSubmit(transformData(data)))}>
      <h2>{heading}</h2>
      <Stack className="inputs-container">
        {formFields.map(({ name, ...rest }) => {
          const InputForm = fields[rest.type] || fields.input

          if (rest.type === "file") rest = { ...rest, setValue, clearErrors }

          return (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({ field: { ref, ...field } }) => {
                return (
                  <Box>
                    <Box className="labels-inputs">
                      <h4>{rest.label}</h4>
                      {rest.desc && <p>{rest.desc}</p>}
                    </Box>
                    <InputForm errors={errors[name]} name={name} {...rest} {...field} />
                  </Box>
                )
              }}
            />
          )
        })}
      </Stack>

      <Box mt="2rem">
        <Button type="submit">{buttonLabel}</Button>
      </Box>
    </CustomForm>
  )
}

export default Form
