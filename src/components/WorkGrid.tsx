import React, {useEffect, forwardRef} from 'react';

import realeyez from '../assets/img/websites/realeyez_bg.jpg';
import customNature from '../assets/img/websites/customNature_bg.jpg';
import ap from '../assets/img/websites/ap_bg.jpg';
import smokeBreak from '../assets/img/websites/smokebreak_bg.jpg';
import paakhouse from '../assets/img/websites/paakhouse_bg.jpg';
import fiveStar from '../assets/img/websites/5star_bg.jpg';
import dreamworks from '../assets/img/websites/dreamworks_bg.jpg';
import traitmarketplace from '../assets/img/websites/traitmarketplace_bg.jpg';
import pgmoutfitters from '../assets/img/websites/pgm-outfitters.jpg';

const WorkGrid = forwardRef((props: {
  show?: boolean
}, ref: any) => {

  return (
    <section id="websites" className={props.show ? 'show' : ''} ref={ref}>
      <div className="wrap">
        <a href="http://fyc.dreamworks.com" target="_BLANK" rel="noopener noreferrer">
          <img src={dreamworks} alt="Dreamworks FYC 2021" />
          <div className="overlay">
            <h3>Dreamworks</h3>
            <p className="desc">Dreamworks Animation Studios For Your Consideration submission portfolio.</p>
            <p>fyc.dreamworks.com</p>
          </div>
        </a>
        <a href="https://andersonpaak.com" target="_BLANK" rel="noopener noreferrer">
          <img src={ap} alt="Anderson .Paak" />
          <div className="overlay">
            <h3>Anderson .Paak</h3>
            <p className="desc">Artist Portfolio Website for Grammy Award Winning artist, Anderson .Paak.</p>
            <p>andersonpaak.com</p>
          </div>
        </a>
        <a href="https://pgmoutfitters.com" target="_BLANK" rel="noopener noreferrer">
          <img src={pgmoutfitters} alt="Next Generation Deer Feeders" />
          <div className="overlay">
            <h3>PGM Outfitters</h3>
            <p className="desc">Website for PGM Outfitters showcasing their deer feeder product line.</p>
            <p>pgmoutfitters.com</p>
          </div>
        </a>
        <a href="https://customnatureproducts.com" target="_BLANK" rel="noopener noreferrer">
          <img src={customNature} alt="Custom Nature, LLC" />
          <div className="overlay">
            <h3>Custom Nature, LLC</h3>
            <p className="desc">Ecommerce website to showcase and sell a line of beauty products for Custom Nature, LLC.</p>
            <p>customnatureproducts.com</p>
          </div>
        </a>
        <a href="https://paakhouse.org" target="_BLANK" rel="noopener noreferrer">
          <img src={paakhouse} alt=".Paak House" />
          <div className="overlay">
            <h3>.Paak House</h3>
            <p className="desc">Event website for Brandon Anderson non-profit that hosts a annual concert in the park.</p>
            <p>paakhouse.org</p>
          </div>
        </a>
        <a href="https://traitmarketplace.com" target="_BLANK" rel="noopener noreferrer">
          <img src={traitmarketplace} alt="Trait Marketplace" />
          <div className="overlay">
            <h3>Creepz Merch</h3>
            <p className="desc">A Web3 ecommerce project that uses NFT trait verification to sell items.</p>
            <p>traitmarketplace.com</p>
          </div>
        </a>
        <a href="https://5starvintage.com" target="_BLANK" rel="noopener noreferrer">
          <img src={fiveStar} alt="Five Star Vintage" />
          <div className="overlay">
            <h3>5 Star Vintage</h3>
            <p className="desc">Ecommerce website for a vintage brand focusing on clothing resale.</p>
            <p>5starvintage.com</p>
          </div>
        </a>
        <a href="https://smokebreak.live" target="_BLANK" rel="noopener noreferrer">
          <img src={smokeBreak} alt="Smoke Break" />
          <div className="overlay">
            <h3>Smoke Break Live</h3>
            <p className="desc">Ecommerce website built around the sale of novelty throw pillows.</p>
            <p>smokebreak.live</p>
          </div>
        </a>
        <a href="http://realeyezapparel.com" target="_BLANK" rel="noopener noreferrer">
          <img src={realeyez} alt="Realeyez" />
          <div className="overlay">
            <h3>Realeyez</h3>
            <p className="desc">Portfolio website for a streetwear based brand of clothing and artwork.</p>
            <p>realeyezapparel.com</p>
          </div>
        </a>
      </div>
    </section>
  )
})

export default WorkGrid;
