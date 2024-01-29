import {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

import Website from './services/Website';
import App from './services/App';
import Product from './services/Product';
import UserInterface from './services/UserInterface';
import Identity from './services/Identity';

import OffTheDock from './projects/OffTheDock';

import InquiryForm from './InquiryForm';

const Map = () => {
  const pauseRef = useRef<boolean>(false);
  const [showInquiry, setShowInquiry] = useState<boolean>(false);

  const handleKeyPress = (e: any) => {
    const key = e.key.toLowerCase();

    if (key === 'escape') {
      e.preventDefault();
      setShowInquiry(false);
    }

    if (pauseRef.current) return;

    if (key === 'h') {
      window.location.pathname = '/'
    }
    if (key === 'w') {
      window.location.pathname = '/services/website-design-development'
    }
    if (key === 's') {
      window.location.pathname = '/services/software-development'
    }
    // if (key === 'p') {
    //   window.location.pathname = '/services/product-engineering'
    // }
    // if (key === 'u') {
    //   window.location.pathname = '/services/user-interface-design'
    // }
    if (key === 'i') {
      window.location.pathname = '/services/identity-design'
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    pauseRef.current = showInquiry;
    
    if (showInquiry) {
      window.gtag('event', 'InquiryBtnClick');
    }
  }, [showInquiry]);

  return (
    <div>
    <InquiryForm 
      show={showInquiry}
      toggle={() => setShowInquiry(!showInquiry)}
    />
    <div className={showInquiry ? 'container out' : 'container'}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Homepage 
                inquiry={showInquiry}
                toggle={() => setShowInquiry(!showInquiry)}
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
          <Route 
            path="/projects/off-the-dock"
            element={
              <OffTheDock 
                showInquiry={(value: boolean) => setShowInquiry(value)}
              />
            } 
          />
        </Routes>
      </Router>
    </div>
    </div>
  )
}

export default Map;
