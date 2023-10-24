import { Box, Stack, Typography } from "@mui/material"

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { transformData } from "./helpers"

import fields from "./InputTemplates"
import CustomForm from "./Style"
import {
  ButtonDark,
  ButtonPurple,
  ButtonRed,
} from "../CustomButtons/ButtonsMui"

const Form = ({
  heading,
  formFields,
  buttonLabel,
  onSubmit,
  validationSchema,
  defaultValues,
  adminExclusive = false,
  IconForm,
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
      <div id="icon-form">{IconForm && <IconForm />}</div>
      <form
        onSubmit={handleSubmit((data) => onSubmit(transformData(data)))}
        onReset={reset}
      >
        <Typography
          variant="h2"
          marginTop={{ sm: "10px", xs: "44px" }}
          marginBottom={{ sm: "40px", xs: "24px" }}
        >
          {heading}
        </Typography>
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
            justifyContent="space-between"
            gap="16px"
          >
            <Stack>{adminExclusive && <ButtonRed text="Delete" />}</Stack>

            <Stack flexDirection={{ sm: "row", xs: "column" }} gap="16px">
              <ButtonDark type="reset" text="Cancel" />
              <ButtonPurple type="submit" text={buttonLabel} />
            </Stack>
          </Stack>
        </Box>
      </form>
    </CustomForm>
  )
}

export default Form
