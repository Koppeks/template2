import { ErrorMessage } from "formik"
import "./StandardInput.css"

export default function StandardInput({type, handleChange, handleBlur, value}) {

  function capitalizeType(type) {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  function checkType(type) {

    return type === "repeatpassword" ? "password" : type

  }


  return(
    <div className="input_component">
      <input
        type={checkType(type)}
        name={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder=""
      />
      <label>{capitalizeType(type)}</label>
      <ErrorMessage name={type} component="div" className="error_message"/>
    </div>
  )
}