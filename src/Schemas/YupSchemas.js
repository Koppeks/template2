import * as Yup from "yup";

const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(8, "The password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$%*&¿?¡!.,:;-_]/,
      "Password must contain at least one special character"
    ),
});

const validationSigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("The email is required"),
  username: Yup.string().required("The username is required"),
  password: Yup.string()
    .required("The password is required")
    .min(8, "The password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$%*&¿?¡!.,:;-_]/,
      "Password must contain at least one special character"
    ),
  repeatPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match")
})


export {
  validationLoginSchema,
  validationSigninSchema
}