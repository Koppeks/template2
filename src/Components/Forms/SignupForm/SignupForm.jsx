import { Formik } from "formik";
import { validationSigninSchema } from "../../../Schemas/YupSchemas";
import "../GlobalForm.css"
import StandardInput from "../../Inputs/StandardInput/StandardInput";


export default function SigninForm() {
  return (
      <Formik
        initialValues={{ email: "", username:"", password: "", repeatpassword: "" }}
        validationSchema={validationSigninSchema}
        onSubmit={(values, { setSubmiting }) => {
          setTimeout(() => {
            console.log("sended sign in");
          });
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmiting,
        }) => (
          <form className="global_form_component" onSubmit={handleSubmit}>
            <StandardInput type={"email"} handleChange={handleChange} handleBlur={handleBlur} value={values.email} />
            <StandardInput type={"username"} handleChange={handleChange} handleBlur={handleBlur} value={values.username} />
            <StandardInput type={"password"} handleChange={handleChange} handleBlur={handleBlur} value={values.password} />
            <StandardInput type={"repeatpassword"} handleChange={handleChange} handleBlur={handleBlur} value={values.repeatpassword} />
            <button type="submit" disabled={isSubmiting}>
              Sign up
            </button>
          </form>
        )}
      </Formik>
  );
}
