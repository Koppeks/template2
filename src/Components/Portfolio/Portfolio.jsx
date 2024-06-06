import { useEffect, useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {

  const images = [
    "./Portfolio/portfolio1.jpg",
    "./Portfolio/portfolio2.jpg",
    "./Portfolio/portfolio3.jpg",
    "./Portfolio/portfolio4.jpg",
    "./Portfolio/portfolio5.jpg",
    "./Portfolio/portfolio6.jpg"
  ]

  const [active, setActive] = useState(false)
  const [focusImage, setFocusImage] = useState(null)

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const handleNext = () => {
    setFocusImage((prevImage) => {
      if(prevImage + 1 < images.length) return prevImage + 1
      else return 0
    })
  }
  const handlePrevious = () => {
    setFocusImage((prevImage) => {
      if(prevImage - 1 < 0) return images.length - 1
      else return prevImage - 1
    })
  }


  return (
    <div className="portfolio_container">
      <div className="title">
        <h2>Our portfolio</h2>
        <p>subtitle of less importance</p>
      </div>
      <div className="portfolio_list_example">
        {images.map((item, index) => (
            <div key={index} className="card" onClick={() => {
              setActive(true)
              setFocusImage(index)
              }}>
              <img src={item} className="image"/>
            </div>
        ))}
        {
          active && (
            <div className={`modal ${active ? "active" : ""}`}>
              <svg className="close" onClick={() => setActive(!active)} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9411 29.4853C20.7222 28.7042 21.9885 28.7042 22.7696 29.4853L34.0833 40.799C34.8643 41.58 36.1306 41.58 36.9117 40.799L41.1543 36.5563C41.9354 35.7753 41.9354 34.509 41.1543 33.7279L29.8406 22.4142C29.0596 21.6332 29.0596 20.3668 29.8406 19.5858L41.1543 8.27208C41.9354 7.49103 41.9354 6.2247 41.1543 5.44365L36.9117 1.20101C36.1306 0.419962 34.8643 0.419962 34.0833 1.20101L22.7696 12.5147C21.9885 13.2958 20.7222 13.2958 19.9411 12.5147L8.62742 1.20101C7.84637 0.419962 6.58004 0.419962 5.79899 1.20101L1.55635 5.44365C0.7753 6.2247 0.775301 7.49103 1.55635 8.27208L12.8701 19.5858C13.6511 20.3668 13.6511 21.6332 12.8701 22.4142L1.55635 33.7279C0.7753 34.509 0.7753 35.7753 1.55635 36.5563L5.79899 40.799C6.58004 41.58 7.84637 41.58 8.62742 40.799L19.9411 29.4853Z" fill="none"/>
              </svg>

              <button className="carousel_button" onClick={()=>handlePrevious()}>
                <svg width="24" height="50" viewBox="0 0 24 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7361 50C12.9785 50 12.286 49.572 11.9472 48.8944L0.447214 25.8944C0.165686 25.3314 0.165686 24.6686 0.447214 24.1056L11.9472 1.10557C12.286 0.428004 12.9785 0 13.7361 0H21.7639C23.2507 0 24.2177 1.56463 23.5528 2.89443L12.9472 24.1056C12.6657 24.6686 12.6657 25.3314 12.9472 25.8944L23.5528 47.1056C24.2177 48.4354 23.2507 50 21.7639 50H13.7361Z" fill="none"/>
                </svg>
              </button>
              <img src={images[focusImage]} alt={`Carousel ${focusImage}`} className="modal_image"/>
              <button className="carousel_button" onClick={()=>handleNext()}>
                <svg width="24" height="50" viewBox="0 0 24 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2639 50C11.0215 50 11.714 49.572 12.0528 48.8944L23.5528 25.8944C23.8343 25.3314 23.8343 24.6686 23.5528 24.1056L12.0528 1.10557C11.714 0.428004 11.0215 0 10.2639 0H2.23607C0.749305 0 -0.217687 1.56463 0.447214 2.89443L11.0528 24.1056C11.3343 24.6686 11.3343 25.3314 11.0528 25.8944L0.447214 47.1056C-0.217687 48.4354 0.749305 50 2.23607 50H10.2639Z" fill="none"/>
                </svg>
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}
