import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

import Website from './services/Website';
import App from './services/App';
import Product from './services/Product';
import UserInterface from './services/UserInterface';
import Identity from './services/Identity';

import InquiryForm from './InquiryForm';

const Map = () => {
  const [showInquiry, setShowInquiry] = useState<boolean>(false);

  const handleKeyPress = (key: string) => {
    const target = key.toLowerCase();
    if (target === 'w') {
      window.location.pathname = '/services/website-design-development'
    }
    if (target === 's') {
      window.location.pathname = '/services/software-development'
    }
    if (target === 'p') {
      window.location.pathname = '/services/product-engineering'
    }
    if (target === 'u') {
      window.location.pathname = '/services/user-interface-design'
    }
    if (target === 'i') {
      window.location.pathname = '/services/identity-design'
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyPress(e.key));
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyPress(e.key));
    };
  }, []);

  return (
    <>
    <InquiryForm 
      show={showInquiry}
      showInquiry={(value: boolean) => setShowInquiry(value)}
    />
    <div className={showInquiry ? 'container out' : 'container'}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Homepage 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
          <Route 
            path="/services/website-design-development" 
            element={
              <Website 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
          <Route 
            path="/services/software-development" 
            element={
              <App 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
          <Route 
            path="/services/product-engineering" 
            element={
              <Product 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
          <Route 
            path="/services/user-interface-design" 
            element={
              <UserInterface 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
          <Route 
            path="/services/identity-design" 
            element={
              <Identity 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default Map;
