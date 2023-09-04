import * as yup from "yup"

const formFields = [
    { name: "firstname", label: "Firstname" },
    { name: "lastname", label: "Lastname" },
    { name: "username", label: "Username" },
    { name: "password", label: "Paswword" },
    { name: "avatar", label: "Avatar", type: "file" },
]

const validationSchema = yup.object().shape({
    firstname: yup.string().required("El campo es requerido"),
    lastname: yup.string().required("El campo es requerido"),
    username: yup.string().required("El campo es requerido"),
    password: yup.string().required("El campo es requerido"),
})

export { formFields, validationSchema }
