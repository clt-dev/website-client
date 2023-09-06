import React, {useState, useRef} from 'react';

import realeyez from './assets/img/websites/realeyez_bg.jpg';
import customNature from './assets/img/websites/customNature_bg.jpg';
import ap from './assets/img/websites/ap_bg.jpg';
import smokeBreak from './assets/img/websites/smokebreak_bg.jpg';
import paakhouse from './assets/img/websites/paakhouse_bg.jpg';
import fiveStar from './assets/img/websites/5star_bg.jpg';
import dreamworks from './assets/img/websites/dreamworks_bg.jpg';
import traitmarketplace from './assets/img/websites/traitmarketplace_bg.jpg';
import pgmoutfitters from './assets/img/websites/pgm-outfitters.jpg';

import {ReactComponent as Logo} from './assets/img/logo.svg';
import webm from './assets/video/clt.webm';
// import mp4 from './assets/video/clt.mp4';

const Homepage = () => {
  const webRef = useRef();
  const [showInquiry, setShowInquiry] = useState(false);
  
  const logAnalytics = async () => {
    window.gtag('config', 'AW-11171481429');
    window.gtag('event', 'inquiry_click', {
      send_to: 'AW-11313458751/yymXCNWButgYEL_c1pIq',
    })
  }

  const handleBtnClick = async () => {
    // setShowInquiry(true);
    await logAnalytics();
    window.location.href = 'mailto:kylebebeau@gmail.com?subject=Creative Service Request';
  }
  
  const handleArrowClick = () => {
    webRef.current.scrollIntoView() 
  }

  return (
    <div id="home">

      <video preload='metadata' autoPlay muted loop id="video">
        <source src={webm} type="video/webm"></source>
      </video>

      <section id="intro" className={showInquiry ? 'open' : ''}>
        <Logo />
        <blockquote> 
          We are creative guns for hire.
          We aim to please, but shoot to kill. 
          We are the artists, the problem solvers, the software engineers you've been looking for.
          We are Charlotte, NC developers.
        </blockquote>
        <button className="btn" onClick={() => handleBtnClick()}>Get A Quote</button>
        <div className="scroll">
          <div className="arrow" onClick={() => handleArrowClick()}></div>
        </div>
      </section>

      <section id="websites" ref={webRef}>
        <a href="http://fyc.dreamworks.com" target="_BLANK" rel="noopener noreferrer">
          <img src={dreamworks} alt="Dreamworks FYC 2021" />
        </a>
        <a href="https://andersonpaak.com" target="_BLANK" rel="noopener noreferrer">
          <img src={ap} alt="Anderson .Paak" />
        </a>
        <a href="https://pgmoutfitters.com" target="_BLANK" rel="noopener noreferrer">
          <img src={pgmoutfitters} alt="Next Generation Deer Feeders" />
        </a>
        <a href="https://customnatureproducts.com" target="_BLANK" rel="noopener noreferrer">
          <img src={customNature} alt="Custom Nature, LLC" />
        </a>
        <a href="https://paakhouse.org" target="_BLANK" rel="noopener noreferrer">
          <img src={paakhouse} alt=".Paak House" />
        </a>
        <a href="https://traitmarketplace.com" target="_BLANK" rel="noopener noreferrer">
          <img src={traitmarketplace} alt="Trait Marketplace" />
        </a>
        <a href="https://5starvintage.com" target="_BLANK" alt="5 Star Vintage" rel="noopener noreferrer">
          <img src={fiveStar} alt="Five Star Vintage" />
        </a>
        <a href="https://smokebreak.live" target="_BLANK" rel="noopener noreferrer">
          <img src={smokeBreak} alt="Smoke Break" />
        </a>
        <a href="http://realeyezapparel.com" target="_BLANK" rel="noopener noreferrer">
          <img src={realeyez} alt="Realeyez" />
        </a>
      </section>

    </div>
  )
}

export default Homepage;
