import "./Footer.css"

export default function Footer(){




  return(
    <div className="footer_container" style={{backgroundImage: "url(./backgroundParallax.jpg)"}}>
      <div className="opacity_parallax">
      </div>
      <div className="footer_parallax"> 
        <div className="resume">
          <h2>Logo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error eius numquam libero eveniet. Atque, hic aliquid. Odit ipsa consectetur recusandae vel itaque? Alias praesentium voluptates placeat soluta voluptate. Magni.</p>
          <div className="social_media">
            <img src="./instagram.svg" alt="" />
            <img src="./facebook.svg" alt="" />
            <img src="./twitter.svg" alt="" />
            <img src="./whatsapp.svg" alt="" />
          </div>
        </div>
        <div className="menus">
          <section className="services_menu">
            <h4>Services</h4>
            <ul>
              <li>Software developer</li>
              <li>Web design and layout</li>
              <li>Cloud service</li>
              <li>SEO optimization</li>
              <li>Hosting</li>
            </ul>
          </section>
          <section className="services_menu">
            <h4>Information</h4>
            <ul>
              <li>About</li>
              <li>team</li>
              <li>Portfolio</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Terms & conditions</li>
              <li>Privacy policy</li>
              <li>FAQ</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}