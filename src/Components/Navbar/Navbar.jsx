import { useEffect, useRef, useState } from "react"
import "./Navbar.css"
import { Link as ScrollLink } from "react-scroll"
import RedirectButton from "../Buttons/Redirect/RedirectButton"

export default function Navbar() {

  const [isAtTop, setIsAtTop] = useState(false)

  const [activeBurguer, setActiveBurguer] = useState(false)

  useEffect(()=> {
    const onScroll = ()=>{
      setIsAtTop(window.scrollY >= 100)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  
  const hamburguerRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburguerRef.current && !hamburguerRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setActiveBurguer(false);
      }
    };
      document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeBurguer, setActiveBurguer]);

  const handleHamburguerClick = (e) => {
    e.stopPropagation()
    setActiveBurguer((prev) => !prev);
  };

  return(
    <nav className={`navbar_container ${isAtTop ?  "active_background_navbar" : ""} `}>
      <h2 className="logo">Logo</h2>
      <div className={`hamburguer_menu ${activeBurguer && "active_hamburger"}`} onClick={handleHamburguerClick} ref={menuRef}>
        <div className="line_hamburguer"></div>
      </div>
      <div className={`display_menu_hamburguer ${activeBurguer && "active_menu"}`} ref={hamburguerRef}>
        <ul className="menu">
          <ScrollLink
            onClick(()=> setActiveBurguer(false))
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="link"
          >Home</ScrollLink>
          <ScrollLink
            onClick(()=> setActiveBurguer(false))
            to="Services"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="link"
          >Services</ScrollLink>
          <ScrollLink
            onClick(()=> setActiveBurguer(false))
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="link"
          >Portfolio</ScrollLink>
          <ScrollLink
            onClick(()=> setActiveBurguer(false))
            to="Price&Plans"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="link"
          >Pricing</ScrollLink>
          <ScrollLink
            onClick(()=> setActiveBurguer(false))
            to="Blog"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="link"
          >Blog</ScrollLink>
        </ul>
        <div className="account_buttons">
          <RedirectButton to={"/login"} text={"Log in"} priority={"low"} />
          <RedirectButton to={"/signup"} text={"Sign up"} priority={"high"} />
        </div>
      </div>
    </nav>
  )
}
