import BackHeroImage from "/html-css-collage-concept-with-person.jpg"
import "./Hero.css"


export default function Hero(){
  return(
    <div className="hero_container">
      <div className="focus">
        <h1>Delivering Superior Services IT Solutions.</h1>
        <p>You can easily change any design to your own. It is also highly customizable SEO friendly template.</p>
        <div className="actions">
          <button>Get started</button>
          <p className="contact">Contact us</p>
        </div>
      </div>
      <img src={BackHeroImage} alt="background-" />
    </div>
  )
}