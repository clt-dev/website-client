import {forwardRef} from 'react';

// import realeyez from '../assets/img/websites/realeyez_bg.jpg';
// import smokeBreak from '../assets/img/websites/smokebreak_bg.jpg';
import customNature from '../assets/img/websites/customNature_bg.jpg';
import globe from '../assets/img/websites/globe_bg.jpg';
import ap from '../assets/img/websites/ap_bg.jpg';
import paakhouse from '../assets/img/websites/paakhouse_bg.jpg';
import fiveStar from '../assets/img/websites/5star_bg.jpg';
import dreamworks from '../assets/img/websites/dreamworks_bg.jpg';
import traitmarketplace from '../assets/img/websites/traitmarketplace_bg.jpg';
import pgmoutfitters from '../assets/img/websites/pgm-outfitters.jpg';
import offthedock from '../assets/img/websites/offthedock.jpg';

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
        <a href="https://paakhouse.org" target="_BLANK" rel="noopener noreferrer">
          <img src={paakhouse} alt=".Paak House" />
          <div className="overlay">
            <h3>.Paak House</h3>
            <p className="desc">Event website for Brandon Anderson non-profit that hosts a annual concert in the park.</p>
            <p>paakhouse.org</p>
          </div>
        </a>
        <a href="https://cltdev.com/projects/off-the-dock" target="_BLANK" rel="noopener noreferrer">
          <img src={offthedock} alt="Off The Dock" />
          <div className="overlay">
            <h3>Off The Dock</h3>
            <p className="desc">Identity design for a Honduras excursion outfitter.</p>
            <p>offthedockadventures.com</p>
          </div>
        </a>
        <a href="https://globetest.cltdev.com" target="_BLANK" rel="noopener noreferrer">
          <img src={globe} alt="Globe" />
          <div className="overlay">
            <h3>3D Globe</h3>
            <p className="desc">3D globe NPM package that animates arcs of LAT/LNG data points.</p>
            <p>globetest.cltdev.com</p>
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
        <a href="https://customnatureproducts.com" target="_BLANK" rel="noopener noreferrer">
          <img src={customNature} alt="Custom Nature Products" />
          <div className="overlay">
            <h3>Coconut Culture</h3>
            <p className="desc">Product portfolio website for skincare and beauty product line.</p>
            <p>customnatureproducts.com</p>
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
        <a href="https://pgmoutfitters.com" target="_BLANK" rel="noopener noreferrer">
          <img src={pgmoutfitters} alt="Next Generation Deer Feeders" />
          <div className="overlay">
            <h3>PGM Outfitters</h3>
            <p className="desc">Website for PGM Outfitters showcasing their deer feeder product line.</p>
            <p>pgmoutfitters.com</p>
          </div>
        </a>
      </div>
    </section>
  )
})

export default WorkGrid;
