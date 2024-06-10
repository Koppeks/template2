import { useEffect, useState } from "react"
import "./Navbar.css"

export default function Navbar() {

  const [isAtTop, setIsAtTop] = useState(false)

  useEffect(()=> {
    const onScroll = ()=>{
      setIsAtTop(window.scrollY >= 100)
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  },[])

  return(
    <nav className={`navbar_container ${isAtTop ?  "active_background_navbar" : ""} `}>
      <h2 className="logo">Logo</h2>
      <ul className="menu">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
        <li>Team</li>
        <li>Menu</li>
        <li>News</li>
      </ul>
      <div className="account_buttons">
        <button className="low_prior">Log in</button>
        <button>Sign up</button>
      </div>
    </nav>
  )
}