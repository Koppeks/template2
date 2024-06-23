import "./CardService.css"
import PropTypes from "prop-types"

CardService.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default function CardService({img, title,text}) {
  return(
    <div className="cardservice_container">
      <div className="top_card">
        <img src={img} alt={`serviceIcon${title}`} className="icon_service"/>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  )
}