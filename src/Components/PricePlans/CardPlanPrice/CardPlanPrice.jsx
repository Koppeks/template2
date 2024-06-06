
import PropTypes from "prop-types"
import "./CardPlanPrice.css"

CardPlanPrice.propTypes = {
  infoCard: PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

export default function CardPlanPrice({infoCard}) {
  return(
    <div className={`card_plan_price_container ${infoCard.type == "Premium" && "stand_out"}`}>
      <h3>{infoCard.type}</h3>
      {infoCard.price === 0 ?
        <h2>Free</h2>
        :
        <h2>${infoCard.price}/month</h2>
    }
      <div className="list_of_items">
        {
          infoCard.descriptions.map((item, index) => (
            <p key={index} className="item">{item}</p>
          ))
        }
      </div>
      <button className="card_price_button">Buy now</button>
    </div>
  )
}