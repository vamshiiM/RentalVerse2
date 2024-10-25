import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import TimerPage from './components/TimerPage/TimerPage'; // Import TimerPage

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          {/* Timer Page Route */}
          <Route 
            path='/timer' 
            element={<TimerPage name="John Doe" model="Dell XPS 13" totalPrice="$1200" startDate={new Date()} />} 
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
