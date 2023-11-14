import * as yup from "yup"

const formFields = [
    { name: "username", label: "Username" },
    { name: "password", label: "Password", type:"password" }
]

const validationSchema = yup.object().shape({
    username: yup.string().required("Can`t be empty"),
    password: yup.string().required("Can`t be empty"),
})

export {formFields, validationSchema}