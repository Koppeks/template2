import { useEffect, useRef, useState } from "react";
import "./ChoseUs.css";

export default function ChoseUs() {
  const [images] = useState([
    "./Experience.svg",
    "./Money.svg",
    "./Support.svg"
  ]);
  const [infoIcon] = useState([
    "With over a decade in the IT industry, our experts provide efficient and effective solutions to complex tech challenges, driving your business forward.",
    "Our IT services optimize systems to reduce costs and maximize ROI, ensuring every dollar spent contributes to your company's growth.",
    "Our 24/7 support team ensures quick resolution of technical issues with minimal disruption, keeping your operations running smoothly."
  ]);
  const imageRef = useRef([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleMouseOver = (e) => {
      setCurrentImage(e.currentTarget.id);
    };

    imageRef.current.forEach((img) => {
      if (img) {
        img.addEventListener("mouseover", handleMouseOver);
      }
    });
    return () => {
      imageRef.current.forEach((img) => {
        if (img) {
          img.removeEventListener("mouseover", handleMouseOver);
        }
      });
    };
  }, []);

  useEffect(()=> {
    
    const cicleIcons = setTimeout(()=>{
      if(currentImage >= 2){
        setCurrentImage(0)
      }else{
        setCurrentImage(currentImage + 1)
      }
    },6000)

    return () => window.clearTimeout(cicleIcons)

  },[currentImage])

  return (
    <div className="chose_us_container">
      <div className="title">
        <h2>Why chose us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="card_circle_container">
        <div className="circle_display">
          {images.map((item, index) => (
            <div
              key={index}
              className={`rotateItem ${currentImage == index ? "highlight" : ""}`}
              ref={(el) => (imageRef.current[index] = el)}
              id={index}
            >
              <img src={item} alt={`Image ${item}`} />
            </div>
          ))}
        </div>
        <div className="card_appear">
          {infoIcon.map((item, index) => (
            <div
              key={index}
              className={`info ${currentImage == index ? "show" : ""}`}
              id={index}
            >
              <div className="text_container">
                <p>{item}</p>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
