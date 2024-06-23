import { Element } from "react-scroll";
import "./ContactUs.css";

export default function ContactUs() {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("mensaje enviado");
  };

  return (
    <div className="contact_us_container">
      <Element name="ContactUs"></Element>
      <div className="video_opa"></div>
      <video muted loop autoPlay>
        <source src="./typingContactUs.mp4" type="video/mp4" />
      </video>
      <div className="side_form_info">
        <section>
          <h3>Address:</h3>
          <p>123 random place</p>
        </section>
        <section>
          <h3>Phone:</h3>
          <p>1234567890</p>
          <p>1234567890</p>
        </section>
        <section>
          <h3>Email:</h3>
          <p>info@example.com</p>
          <p>hr@example.com</p>
        </section>
      </div>
      <form className="contact_form" action="">
        <h2>Talk to us</h2>
        <div className="top_form">
          <div className="input_text">
            <input placeholder="" className="input" type="text" />
            <label>Name</label>
          </div>
          <div className="input_text">
            <input placeholder="" className="input" type="text" />
            <label>Email</label>
          </div>
        </div>
        <div className="input_text">
          <input placeholder="" className="input" type="text" />
          <label>Subject</label>
        </div>
        <div className="input_text">
          <textarea placeholder="" className="input textarea" type="text" />
          <label>Write your message</label>
        </div>
        <button onClick={(e) => handleForm(e)} type="submit">
          Contact with us
        </button>
      </form>
    </div>
  );
}
