import * as yup from "yup"

const formFields = [
    { name: "username", label: "Username" },
    { name: "password", label: "Paswword", type:"password" }
]

const validationSchema = yup.object().shape({
    username: yup.string().required("El campo es requerido"),
    password: yup.string().required("El campo es requerido"),
})

export {formFields, validationSchema}