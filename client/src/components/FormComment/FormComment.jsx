import { useForm, Controller } from "react-hook-form"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { Stack, Typography } from "@mui/material"
import commentService from "../../services/comment-service"
import { formFields, validationSchema } from "./form-fields"
import { ButtonPurple } from "../../common/CustomButtons/ButtonsMui"

import CustomForm from "./Style"

import InputField from "./InputTemplates"
import { useToastify } from "../../hooks"

function FormComment() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const navigate = useNavigate()
  const { suggestionID } = useParams()

  const [remainingCharacters, setRemainingCharacters] = useState(255)

  const handleContentChange = (event, field) => {
    const currentContent = event.target.value
    if (currentContent.length <= 255) {
      const remaining = 255 - currentContent.length
      setRemainingCharacters(remaining)
      field.onChange(event)
    }
  }

  const onSend = async (data) => {
    try {
      await commentService.create(data, suggestionID)
      navigate(0)
    } catch (error) {
      useToastify()
    }
  }

  return (
    <CustomForm onSubmit={handleSubmit(onSend)}>
      {formFields.map(({ name, ...rest }) => {
        return (
          <Controller
            key={name}
            control={control}
            name={name}
            render={({ field: { ref, ...field } }) => {
              return (
                <Stack className="form-comment-container">
                  <Typography className="form-comment-label">
                    {rest.label}
                  </Typography>
                  <InputField
                    errors={errors[name]}
                    name={name}
                    {...rest}
                    {...field}
                    onChange={(event) => handleContentChange(event, field)}
                  />
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography className="form-comment-characters">
                      {remainingCharacters} characters left
                    </Typography>
                    <ButtonPurple type="submit" text="Post Comment" />
                  </Stack>
                </Stack>
              )
            }}
          />
        )
      })}
    </CustomForm>
  )
}
export default FormComment
