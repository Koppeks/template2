import { Formik } from "formik";
import { validationLoginSchema } from "../../../Schemas/YupSchemas";
import "../GlobalForm.css"
import StandardInput from "../../Inputs/StandardInput/StandardInput";


export default function LoginForm() {
  return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationLoginSchema}
        onSubmit={(values, { setSubmiting }) => {
          setTimeout(() => {
            console.log("sended");
          });
        }}
      >
        {({
          values,
          touched,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmiting,
        }) => (
          <form className="global_form_component" onSubmit={handleSubmit}>
            <StandardInput type={"email"} handleChange={handleChange} handleBlur={handleBlur} value={values.email} />
            <StandardInput type={"password"} handleChange={handleChange} handleBlur={handleBlur} value={values.password} />
            <button type="submit" disabled={isSubmiting}>
              Log in
            </button>
          </form>
        )}
      </Formik>
  );
}
