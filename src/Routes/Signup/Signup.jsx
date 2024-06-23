import { useNavigate } from "react-router-dom"
import "../../styles/GlobalFormScreen.css"
import SignupForm from "../../Components/Forms/SignupForm/SignupForm"
import RedirectButton from "../../Components/Buttons/Redirect/RedirectButton"
import ParticleEffect from "../../Components/ParticlesEffect/ParticlesEffect"
 
export default function Signup() {

  const navigate = useNavigate()

  return(
    <div className="global_form">
      <ParticleEffect amountRange={100} />
      <h2 className="logo" onClick={() => navigate("/")}>Logo</h2>
      <SignupForm/>
      <div className="bottom_routes">
        <RedirectButton to={"/login"} text={"Already have an account"} priority={"low"}/>
        <RedirectButton to={"/forgotPassword"} text={"Forgot the password?"} priority={"low"}/>
      </div>
    </div>
  )
}
