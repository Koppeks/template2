import CardPlanPrice from "./CardPlanPrice/CardPlanPrice"
import "./PricePlans.css"

export default function PricePlans() {

  const cards = [
    {
      type: "Basic",
      price: 0,
      descriptions:[
      "200 GB Space",
      "1 Domain Names",
      "Weekly Backup",
      "Multiple Templates",
      "Free Email Sender",
      "1 Databases"
      ]
    },
    {
      type: "Premium",
      price: 120,
      descriptions:[
      "Unlimited GB Space",
      "Unlimited Domain Names",
      "Free SSL",
      "Daily Backup",
      "Free Templates",
      "Free Email", 
      "Unlimited Databases",
      "Unlimited Email Address",
      "Live Support"
      ]
    },
    {
      type: "Medium",
      price: 60,
      descriptions:[
      "Unlimited GB Space",
      "2 Domain Names",
      "Free SSL",
      "Daily Backup",
      "Free Templates",
      "Free Email",
      "3 Databases",
      "Unlimited Email Address",
      "Live Support"
      ]
    },
  ]

  return(
    <div className="price_plans_container">
      <div className="title_component">
        <h2>Subscription plans</h2>
        <p>Hire us and change the way you sell your service</p>
      </div>
      <div className="cards_view">
      {
        cards.map((card, index) => (
          <CardPlanPrice infoCard={card} key={index}/>
        ))
      }
      </div>
    </div>
  )
}