import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;
