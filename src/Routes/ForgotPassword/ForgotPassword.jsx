import { useNavigate } from "react-router-dom"
import RedirectButton from "../../Components/Buttons/Redirect/RedirectButton"
import LoginForm from "../../Components/Forms/LoginForm/LoginForm"
import ParticleEffect from "../../Components/ParticlesEffect/ParticlesEffect"
import "../../styles/GlobalFormScreen.css"



export default function ForgotPassword(){

  const navigate = useNavigate()
  return(
    <div className="global_form">
      <ParticleEffect amountRange={100}/>
      <h2 className="logo" onClick={() => navigate("/")}>Logo</h2>
      <LoginForm/>
      <div className="bottom_routes">
        <RedirectButton to={"/signup"} text={"Create new account"} priority={"low"}/>
        <RedirectButton to={"/forgotPassword"} text={"Forgot the password?"} priority={"low"}/>
      </div>
    </div>
  )
}