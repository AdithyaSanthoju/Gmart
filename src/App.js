import { useEffect } from 'react';
import './App.css';
import ProductGrid from './components/CardLayout';
import ImageAndTextExample from './components/Cards';
import CarouselComponent from './components/CarouselSlide';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import DmartNavbar from './components/Navbar';
import Offerzone from './components/OfferCards';
import Para from './components/Paragraph';
import PopularCategories from './components/Popularcat';
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {

  useEffect(()=>{
   
    AOS.init({
    duration:500
    })
  },[])
  return (
    <div className="App">
      <DmartNavbar/>

      <HeroSection/>
      <PopularCategories/>
      <ImageAndTextExample/>
      <p className='p1'>This Week's Savers</p>
      <ProductGrid/>
      <CarouselComponent/>
      <p className='p1'>Offer Zone

      </p>
      <Offerzone/>
      <Para/>
      <Footer/>
    </div>
  );
}

export default App;



