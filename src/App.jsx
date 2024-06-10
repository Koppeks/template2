import Blog from './Components/Blog/Blog'
import ChoseUs from './Components/ChoseUs/ChoseUs'
import ContactUs from './Components/ContactUs/ContactUs'
import ExtraInfo from './Components/ExtraInfo/ExtraInfo'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import PricePlans from './Components/PricePlans/PricePlans'
import ShowServices from './Components/ShowServices/ShowServices'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Navbar/>
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
    </>
  )
}

export default App
