import * as yup from "yup"

const formFields = [
  { name: "title", label: "Feedback Title" },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: [
      {
        label: "UI",
        value: "UI",
      },
      {
        label: "UX",
        value: "UX",
      },
      {
        label: "Enhancement",
        value: "Enhancement",
      },
      {
        label: "Bug",
        value: "Bug",
      },
      {
        label: "Feature",
        value: "Feature",
      },
    ],
    placeholder: "Select a Category",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      {
        label: "Planned",
        value: "Planned",
      },
      {
        label: "In-Progress",
        value: "In-Progress",
      },
      {
        label: "Live",
        value: "Live",
      },
    ],
    placeholder: "Select a Status",
  },
  { name: "description", label: "Description", multiline: true },
]

const validationSchema = yup.object().shape({
  title: yup.string().required("El campo es requerido"),
  category: yup.string().required("El campo es requerido"),
  status: yup.string().required("El campo es requerido"),
  description: yup.string().required("El campo es requerido"),
})

export { formFields, validationSchema }
