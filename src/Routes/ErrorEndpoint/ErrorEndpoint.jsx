
import { useNavigate } from "react-router-dom"
import "./ErrorEndpoint.css"

export default function ErrorEndpoint (){

  const navigate = useNavigate()

  return(
    <div className="error_endpoint_container">
      <h2>Ooops </h2>
      <p>An unexpected error occurred, we couldn't find what you where looking for</p>
      <h4 onClick={() => navigate(-1)} >Click here to go back</h4>
    </div>
  )
}