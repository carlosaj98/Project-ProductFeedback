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

function FormReply({replyingTo, commentID}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const navigate = useNavigate()
    const onSend = (data) => {
        const dataNew = {...data, replyingTo}
        // console.log(dataNew, commentID)
        commentService
            .update(dataNew, commentID)
            .then((data) => navigate(0, { replace: false }))
            .catch((err) => console.log(err))
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
                <Stack className="form-comment-container" flexDirection={{sm:"row", xs:"column"}}>
                  <InputField
                    errors={errors[name]}
                    name={name}
                    {...rest}
                    {...field}
                  />
                  <ButtonPurple type="submit" text="Post Reply" />
                    
                </Stack>
              )
            }}
          />
        )
      })}
    </CustomForm>
  )
}
export default FormReply
