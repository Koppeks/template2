
import {Link as RouterLink} from "react-router-dom"
import "./RedirectButton.css"

export default function RedirectButton({to, text, priority}) {
  //Priority styles: low, medium, high

  return(
    <RouterLink to={to} className={`button_redirect ${priority}`}>
      {text}
    </RouterLink>
  )
}