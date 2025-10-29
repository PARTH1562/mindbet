import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sports from './pages/Sports';
import LiveBetting from './pages/LiveBetting';
import Promotions from './pages/Promotions';
import Balance from './pages/Balance';
import Deposit from './pages/Deposit';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/livebetting" element={<LiveBetting />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
