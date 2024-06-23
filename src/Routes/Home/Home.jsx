import Blog from '../../Components/Blog/Blog'
import ChoseUs from '../../Components/ChoseUs/ChoseUs'
import ContactUs from '../../Components/ContactUs/ContactUs'
import ExtraInfo from '../../Components/ExtraInfo/ExtraInfo'
import Footer from '../../Components/Footer/Footer'
import GoUpArrow from '../../Components/GoUpArrow/GoUpArrow'
import Hero from '../../Components/Hero/Hero'
import Portfolio from '../../Components/Portfolio/Portfolio'
import PricePlans from '../../Components/PricePlans/PricePlans'
import ShowServices from '../../Components/ShowServices/ShowServices'
import Testimonials from '../../Components/Testimonials/Testimonials'
import NavBar from "../../Components/Navbar/Navbar"

export default function Home() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowServices/>
      <ChoseUs/>
      <Portfolio/>
      <PricePlans/>
      <Testimonials/>
      <ExtraInfo/>
      <Blog/>
      <ContactUs/>
      <Footer/>
      <GoUpArrow/>
    </>
  )
}