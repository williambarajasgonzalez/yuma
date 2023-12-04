import {object, string , array} from "yup"

export const postSchema = object({
    title: string().min(3,"Title must be longer than 3 letters").required("Title is require"),
    contactName: string().required("Contact name is require"),
    mobileNumber: string(),
    email: string().email("Not a valid email"),
    category: string(),
    description: string().max(450).required("Description is require"),
    images: array().of(string()),
})

