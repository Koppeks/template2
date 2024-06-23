import BackHeroImage from "/html-css-collage-concept-with-person.jpg"
import "./Hero.css"
import { Element } from "react-scroll"
import RedirectButton from "../Buttons/Redirect/RedirectButton"


export default function Hero(){
  return(
    <div className="hero_container">
      <Element name="Home"></Element>
      <div className="focus">
        <h1>Delivering Superior Services IT Solutions.</h1>
        <p>You can easily change any design to your own. It is also highly customizable SEO friendly template.</p>
        <div className="actions">
          <RedirectButton to={"/"} text={"Get started"} priority={"high"} />
          <RedirectButton to={"/"} text={"Contact us"} priority={"low"} />
        </div>
      </div>
      <img src={BackHeroImage} alt="background" />
    </div>
  )
}