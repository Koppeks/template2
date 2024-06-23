import CardTestimonial from "./CardTestimonial/CardTestimonial";
import Slider from "react-slick";

import "./Testimonials.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Testimonials() {

  const testimonials = [
    {
      name: "John Doe",
      image: "./face5.jpeg",
      position: "Project Manager",
      score: 5,
      quote: "The IT service team was exceptional in their delivery and support. They truly understood our needs and exceeded our expectations."
    },
    {
      name: "Jane Smith",
      image: "./face6.jpeg",
      position: "CTO",
      score: 4,
      quote: "Their technical expertise and professionalism were evident from day one. The project was completed ahead of schedule and within budget."
    },
    {
      name: "Michael Brown",
      image: "./face8.jpeg",
      position: "Operations Director",
      score: 5,
      quote: "Impressive service with great attention to detail. The team was responsive and proactive throughout the entire process."
    },
    {
      name: "Emily White",
      image: "./face7.jpeg",
      position: "CEO",
      score: 5,
      quote: "Outstanding performance by the IT service company. Their solutions have significantly improved our operational efficiency."
    },
    {
      name: "David Johnson",
      image: "./face9.jpeg",
      position: "IT Manager",
      score: 4,
      quote: "Reliable and knowledgeable team. They provided excellent support and ensured our systems were running smoothly at all times."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    lazyload:"ondemand",
    responsive:[{
      breakpoint: 1024,
      settings:{
        slidesToShow: 2
      }
    },
    {
      breakpoint: 430,
      settings:{
        slidesToShow: 1
      }
    }
  ],
  };


  return(
    <div className="testimonials_container">
      <div className="title">
        <h2>Testimonials</h2>
        <p>Listen to the people that choose and trust our work</p>
      </div>
      <div className="carousel-container testimonials">
        <Slider {...settings}>
          {
            testimonials.map((testimonial, index) => (
              <CardTestimonial testimonial={testimonial} key={index}/>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}
