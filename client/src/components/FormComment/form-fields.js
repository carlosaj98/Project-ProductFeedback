import * as yup from "yup"

const formFields = [
    { name: "content", label: "Add Comment", multiline:true },
]

const validationSchema = yup.object().shape({
    content: yup.string().required("El campo es requerido"),
})

export { formFields, validationSchema }