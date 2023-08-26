import React, {useState, useEffect} from 'react';
import Footer from './footer';

import globe from './assets/img/websites/globe_bg.jpg';
import realeyez from './assets/img/websites/realeyez_bg.jpg';
import customNature from './assets/img/websites/customNature_bg.jpg';
import ap from './assets/img/websites/ap_bg.jpg';
import smokeBreak from './assets/img/websites/smokebreak_bg.jpg';
import paakhouse from './assets/img/websites/paakhouse_bg.jpg';
import fiveStar from './assets/img/websites/5star_bg.jpg';
import dreamworks from './assets/img/websites/dreamworks_bg.jpg';
import coonguard from './assets/img/websites/coonguard_bg.jpg';
import traitmarketplace from './assets/img/websites/traitmarketplace_bg.jpg';
import pgmoutfitters from './assets/img/websites/pgm-outfitters.jpg';

import resume from './assets/docs/kylebebeau_resume.pdf';
import {Logos, Posters, Prints} from './artwork';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if(!showModal) {
      setSelectedImage('');
    }
  }, [showModal]);

  useEffect(() => {
    if(selectedImage !== '') {
      setShowModal(true);
    }
  }, [selectedImage])
  return (
    <>
    <div id="modal" className={showModal ? 'show' : null} onClick={() => setShowModal(false)}>
      <div className="modalBody">
        <img src={selectedImage} alt="" />
      </div>
    </div>
    <div id="home">

      <section id="intro">
        <div id="banner"></div>
        <blockquote>
          <p>
            Imagination is the only weapon in the war against reality.
            I aim to please, but shoot to kill.
            I'm an artist, a problem solver, a software engineer, a creative gun for hire, etc. My name is <a href={resume} target="_BLANK" rel="noreferrer">Kyle Bebeau</a>.
          </p>
          <cite />
        </blockquote>
        <a href="mailto:kylebebeau@gmail.com?subject=Creative Service Request" className="btn">Start A Project</a>
      </section>

      <section id="websites">
        <h3>Development</h3>
        <a href="http://fyc.dreamworks.com" target="_BLANK" rel="noopener noreferrer">
          <img src={dreamworks} alt="Dreamworks FYC 2021" />
        </a>
        <a href="https://www.npmjs.com/package/@bebeau/globe" target="_BLANK" rel="noopener noreferrer">
          <img src={globe} alt="Globe Package" />
        </a>
        <a href="https://andersonpaak.com" target="_BLANK" rel="noopener noreferrer">
          <img src={ap} alt="Anderson .Paak" />
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
        <a href="https://pgmoutfitters.com" target="_BLANK" rel="noopener noreferrer">
          <img src={pgmoutfitters} alt="Next Generation Deer Feeders" />
        </a>
        <a href="https://texasbanditcoonguard.com/" target="_BLANK" alt="Texas Bandit Coon Guard" rel="noopener noreferrer">
          <img src={coonguard} alt="Texas Bandit Coon Guard" />
        </a>
      </section>

      <section id="logos">
        <h3>Logos</h3>
        {Logos.map((image, index) => {
          return(
            <article>
              <img key={`logo-${index}`}src={image} alt="" onClick={() => setSelectedImage(image)} />
            </article>
          )
        })}
      </section>

      <section id="artwork">
        <h3>Artwork</h3>
        {Posters.map((image, index) => {
          return(
            <article>
              <img key={`logo-${index}`}src={image} alt="" onClick={() => setSelectedImage(image)} />
            </article>
          )
        })}
        {Prints.map((image, index) => {
          return(
            <article className="thirds">
              <img key={`logo-${index}`}src={image} alt="" onClick={() => setSelectedImage(image)} />
            </article>
          )
        })}
      </section>

      <Footer />

    </div>
    </>
  )
}

export default Homepage;
