import { Box, Stack } from "@mui/material"

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { transformData } from "./helpers"

import fields from "./InputTemplates"
import CustomForm from "./Style"
import { ButtonDark, ButtonPurple, ButtonRed } from "../CustomButtons/ButtonsMui"

const Form = ({
  heading,
  formFields,
  buttonLabel,
  onSubmit,
  validationSchema,
  defaultValues,
  adminExclusive = false
}) => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })
  return (
    <CustomForm
      width={{ sm: "540px", xs: "327px" }}
      padding={{ sm: "42px", xs: "24px" }}
    >
      <form
        onSubmit={handleSubmit((data) => onSubmit(transformData(data)))}
        onReset={reset}
      >
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
                      <Box
                        className="labels-inputs"
                        fontSize={{ sm: "14px", xs: "13px" }}
                      >
                        <h4>{rest.label}</h4>
                        {rest.desc && <p>{rest.desc}</p>}
                      </Box>
                      <InputForm
                        errors={errors[name]}
                        name={name}
                        {...rest}
                        {...field}
                      />
                    </Box>
                  )
                }}
              />
            )
          })}
        </Stack>

        <Box marginTop="32px">
          <Stack
            flexDirection={{ sm: "row", xs: "column" }}
            justifyContent="flex-end"
            gap="16px"
          >
            {adminExclusive && <ButtonRed text="Delete"/>}
            <ButtonDark type="reset" text="Cancel" />
            <ButtonPurple type="submit" text={buttonLabel} />
          </Stack>
        </Box>
      </form>
    </CustomForm>
  )
}

export default Form
