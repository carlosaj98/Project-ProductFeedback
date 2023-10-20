import * as yup from "yup"

const formFields = [
    { name: "title", label: "Feedback Title", desc: "Add a short, descriptive headline" },
    {
        name: "category",
        label: "Category",
        type: "select",
        desc: "Choose a category for your feedback",
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
    },
    { name: "description", label: "Feedback Detail", desc: "Include any specific comments on what should be improved, added, etc." },
]

const validationSchema = yup.object().shape({
    title: yup.string().required("Can`t be empty"),
    category: yup.string().required("Can`t be empty"),
    description: yup.string().required("Can`t be empty"),
})

export { formFields, validationSchema }
