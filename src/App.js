import React from 'react';
import Rellax from 'react-rellax';
import ReactPixel from 'react-facebook-pixel';
import './assets/sass/style.css';

import Footer from './footer';

import realeyez from './assets/img/realeyez_bg.jpg';
import customNature from './assets/img/customNature_bg.jpg';
import ap from './assets/img/ap_bg.jpg';
import smokeBreak from './assets/img/smokebreak_bg.jpg';
import trackArtwork from './assets/img/track_bg.jpg';
import logos from './assets/img/logos_bg.jpg';
import paakhouse from './assets/img/paakhouse_bg.jpg';
import fiveStar from './assets/img/5star_bg.jpg';

import hue from './assets/img/hue_bg.jpg';
import dreamworks from './assets/img/dreamworks_bg.jpg';

import coonguard from './assets/img/coonguard_bg.jpg';
import heard from './assets/img/heard_bg.jpg';

import resume from './assets/docs/kylebebeau_resume.pdf';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('2055850057979112', advancedMatching, options);
ReactPixel.pageView();

class Homepage extends React.Component {
  render(){
    return (
      <div id="home">
        <Rellax as="section" id="banner" data-rellax-speed="-2"></Rellax>
        <section id="projects">
          <article>
            <span id="Logo"></span>
            <blockquote>
              <p>
                Imagination is the only weapon in the war against reality.
                I aim to please, but shoot to kill.
                I'm an artist, a problem solver, a software engineer, a creative gun for hire, etc. My name is <a target="_BLANK" href={resume} rel="noopener noreferrer">Kyle Bebeau</a>. 
              </p>
              <p>
                Below is my current portfolio of live projects.
              </p>
              <cite />
            </blockquote>
          </article>
          <article>
            <a href="http://fyc.dreamworks.com" target="_BLANK" rel="noopener noreferrer">
              <img src={dreamworks} alt="Dreamworks FYC 2021" />
            </a>
            <a href="http://realeyezapparel.com" target="_BLANK" rel="noopener noreferrer">
              <img src={realeyez} alt="Realeyez" />
            </a>
            <a href="https://smokebreak.live" target="_BLANK" rel="noopener noreferrer">
              <img src={smokeBreak} alt="Smoke Break" />
            </a>
            <a href="https://customnatureproducts.com" target="_BLANK" rel="noopener noreferrer">
              <img src={customNature} alt="Custom Nature, LLC" />
            </a>
            <a href="https://theinitgroup.com/paakhouse" target="_BLANK" rel="noopener noreferrer">
              <img src={paakhouse} alt=".Paak House" />
            </a>
            <a href="https://andersonpaak.com" target="_BLANK" rel="noopener noreferrer">
              <img src={ap} alt="Anderson .Paak" />
            </a>
            <a href="http://kylebebeau.com/track-artwork" target="_BLANK" rel="noopener noreferrer">
              <img src={trackArtwork} alt="Track Artwork" />
            </a>
            <a href="https://hueunlimited.com" target="_BLANK" rel="noopener noreferrer">
              <img src={hue} alt="Hue Unlimited, LLC" />
            </a>
            <a href="http://kylebebeau.com/logos" target="_BLANK" rel="noopener noreferrer">
              <img src={logos} alt="Logos" />
            </a>
            <a href="https://5starvintage.com" target="_BLANK" alt="5 Star Vintage" rel="noopener noreferrer">
              <img src={fiveStar} alt="Five Star Vintage" />
            </a>
            <a href="https://coonguard.com" target="_BLANK" alt="Texas Bandit Coon Guard" rel="noopener noreferrer">
              <img src={coonguard} alt="Texas Bandit Coon Guard" />
            </a>
            <a href="https://heardmusic.app" target="_BLANK" rel="noopener noreferrer">
              <img src={heard} alt="Heard" />
            </a>
          </article>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Homepage;
