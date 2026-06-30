//validation/registrationSchema.ts

import * as yup from "yup";

export const registrationSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup.string().email("Incorrect email").required("Email is required"),

  password: yup
    .string()
    .min(6, "Minimum 6 symbols")
    .required("Password is required"),
});
