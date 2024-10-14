import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ProductGrid from './components/CardLayout';
import ImageAndTextExample from './components/Cards';
import CarouselComponent from './components/CarouselSlide';
import CreateAccount from './components/CreateAcc';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LoginForm from './components/Login';
import DmartNavbar from './components/Navbar';
import Offerzone from './components/OfferCards';
import Para from './components/Paragraph';
import PopularCategories from './components/Popularcat';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setMessage(`Added ${product.name} to cart!`); // Assuming product has a 'name' property

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const toggleCart = () => setShowCart(!showCart);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <DmartNavbar cart={cart} toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <p className="p1" style={{ marginTop: "50px" }}>Popular Categories</p>
              <PopularCategories />
              <ImageAndTextExample />
              <p className="p1">This Week's Savers</p>
              <ProductGrid addToCart={addToCart} />
              <CarouselComponent />
              <p className="p1">Offer Zone</p>
              <Offerzone />
              <Para />
              <Footer />
            </>
          } />
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>

        {/* Cart Modal */}
        <Modal show={showCart} onHide={toggleCart}>
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                      {item.name} - ${item.price} (Discount: {item.discount}%)
                    </div>
                    <Button variant="danger" onClick={() => removeFromCart(index)}>
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleCart}>
              Close
            </Button>
            <Button variant="primary" onClick={toggleCart}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Success Message */}
        {message && <div className="cart-message">{message}</div>}
      </Router>
    </div>
  );
}

export default App;
