import React from 'react';

import realeyez from './assets/img/websites/realeyez_bg.jpg';
import customNature from './assets/img/websites/customNature_bg.jpg';
import ap from './assets/img/websites/ap_bg.jpg';
import smokeBreak from './assets/img/websites/smokebreak_bg.jpg';
import paakhouse from './assets/img/websites/paakhouse_bg.jpg';
import fiveStar from './assets/img/websites/5star_bg.jpg';
import dreamworks from './assets/img/websites/dreamworks_bg.jpg';
import traitmarketplace from './assets/img/websites/traitmarketplace_bg.jpg';
import pgmoutfitters from './assets/img/websites/pgm-outfitters.jpg';

import {ReactComponent as Logo} from './assets/img/cltdev.svg';

const Homepage = () => {

  const logAnalytics = async () => {
    window.gtag('config', 'AW-11171481429');
    window.gtag('event', 'inquiry_click', {
      send_to: 'AW-11313458751/yymXCNWButgYEL_c1pIq',
    })
  }

  const handleBtnClick = async () => {
    await logAnalytics();
    window.location.href = 'mailto:kylebebeau@gmail.com?subject=Creative Service Request';
  }

  return (
    <div id="home">

      <section id="intro">
        <Logo />
        <blockquote>
          <p>
            We aim to please, but shoot to kill. 
            We are the artists, problem solvers, software engineers, you've been looking for. 
            We are Charlotte devs, creative guns for hire.
          </p>
          <p>Below are links to live client projects.</p>
        </blockquote>
        <button className="btn" onClick={() => handleBtnClick()}>Get A Quote</button>
      </section>

      <section id="websites">
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
