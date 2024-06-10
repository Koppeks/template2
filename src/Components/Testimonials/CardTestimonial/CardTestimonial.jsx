
import "./CardTestimonial.css"

import propTypes from "prop-types"

CardTestimonial.propTypes = {
  testimonial: propTypes.shape({
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    position: propTypes.string.isRequired,
    score: propTypes.number.isRequired,
    quote: propTypes.string.isRequired
  }).isRequired
}


export default function CardTestimonial({testimonial}) {
  return(
    <div className="card_testimonial_container">
      <div className="main_description">
        <img className="avatar" src={`./FakePeople/${testimonial.image}`} alt={`testimonial image avatar ${testimonial.image}`} />
        <div className="info_block">
          <h2>{testimonial.name}</h2>
          <h5>{testimonial.position}</h5>
          <img className="stars" src="./5stars.jpg" alt="5 stars for testimonials"/>
        </div>
      </div>
      <blockquote>
        <div>
        <svg className="quote_svg" width="119" height="112" viewBox="0 0 119 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 56H23V36C23 36 23 30 30.5 25C32.5 23.6667 42 24 42 24C44 24 47 21 47 19V5C47 3 44 0 42 0H37C23 0 -7.7663e-06 19 0 36V102C0 106 7 112 11 112H44C48 112 55 106 55 102V66C55 62 48 56 44 56Z" fill="#2664EB"/>
          <path d="M108 56H87V36C87 36 87 30 94.5 25C96.5 23.6667 106 24 106 24C108 24 111 21 111 19V5C111 3 108 0 106 0H101C87 0 64 19 64 36V102C64 106 71 112 75 112H108C112 112 119 106 119 102V66C119 62 112 56 108 56Z" fill="#2664EB"/>
        </svg>

        </div>
        {testimonial.quote}</blockquote>
    </div>
  )
}