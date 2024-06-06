import CardService from "./CardService/CardService";

import "./ShowServices.css"

export default function ShowServices(){

  const cards = [
    {
      img: "/creativeService.svg",
      title: "Creative Services",
      text: "We provide innovative design solutions to bring your ideas to life, ensuring a visually compelling digital presence."
    },
    {
      img: "/technicService.svg",
      title: "Technical Support",
      text: "Our team offers comprehensive technical support to keep your systems running smoothly and efficiently."
    },
    {
      img: "/cloudService.svg",
      title: "Cloud Services",
      text: "Leverage the power of the cloud with our scalable and secure cloud solutions tailored to your business needs."
    },
    {
      img: "/chartService.svg",
      title: "Data Analytics",
      text: "Unlock the potential of your data with our advanced analytics services, driving informed decision-making and business growth."
    }
  ]

  return(
    <div className="showservices_container">
      {cards.map((card, index) => (
        <CardService key={index} img={card.img} text={card.text} title={card.title} />
      ))}
    </div>
  )
}