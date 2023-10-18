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
        placeholder:"Select a Status"
    },
    { name: "description", label: "Feedback Detail", desc: "Include any specific comments on what should be improved, added, etc." },
]

const validationSchema = yup.object().shape({
    title: yup.string().required("The field is required"),
    category: yup.string().required("The field is required"),
    status: yup.string().required("The field is required"),
    description: yup.string().required("The field is required"),
})

export { formFields, validationSchema }
