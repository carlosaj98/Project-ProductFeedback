import * as yup from "yup"

const formFields = [
  { name: "firstname", label: "Firstname" },
  { name: "lastname", label: "Lastname" },
  { name: "username", label: "Username" },
  { name: "password", label: "Password", type: "password" },
  { name: "avatar", label: "Avatar", type: "file" },
]

const validationSchema = yup.object().shape({
  firstname: yup.string().required("Can`t be empty"),
  lastname: yup.string().required("Can`t be empty"),
  username: yup.string().required("Can`t be empty"),
  password: yup.string().required("Can`t be empty"),
  avatar: yup
    .mixed()
    .test("fileType", "Only PNG or JPG images are allowed", (value) => {
      if (!value) return true
      return (
        value && (value.type === "image/png" || value.type === "image/jpeg")
      )
    })
    .test("fileSize", "Image size must be less than 1MB", (value) => {
      if (!value) return true

      const maxSizeInBytes = 1 * 1024 * 1024
      return value.size <= maxSizeInBytes
    })
    .required("Can`t be empty"),
})

export { formFields, validationSchema }
