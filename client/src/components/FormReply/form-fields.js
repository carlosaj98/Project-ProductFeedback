import * as yup from "yup"

const formFields = [
    { name: "content", label: "", multiline:true },
]

const validationSchema = yup.object().shape({
    content: yup.string().required("El campo es requerido"),
})

export { formFields, validationSchema }