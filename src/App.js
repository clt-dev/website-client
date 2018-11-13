import React, { Component } from 'react';
import Rellax from 'react-rellax';
import ReactPixel from 'react-facebook-pixel';
import './assets/sass/style.css';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('2055850057979112', advancedMatching, options);
ReactPixel.pageView();

const Footer = () => {
  return (
    <footer>
      <section>
        <p className="price main">$125<span>/hour</span></p>
        <span className="or">or</span>
        <article>
          <p className="hours">8<span>hrs</span></p>
          <p className="price main">$1k<span>/month</span></p>
        </article>
        <article>
          <p className="hours">24<span>hrs</span></p>
          <p className="price main">$2k<span>/month</span></p>
        </article>
        <article>
          <p className="hours">40<span>hrs</span></p>
          <p className="price main">$3k<span>/month</span></p>
        </article>
        <a href="mailto:kyle@theinitgroup.com?subject=Design/Development" className="main-btn">Contact</a>
      </section>
    </footer>
  );
};

const IndexPage = () => (
  <div id="home">
    <Rellax as="section" id="banner" data-rellax-speed="-2"></Rellax>
    <section id="projects">
      <article>
        <span id="Logo"></span>
        <blockquote>
          We’re a collective of creative problem solvers, digital nomads, lifetime travelers, and pioneers of creative space. We’re in it for it, or not in it at all.
          <cite></cite>
        </blockquote>
      </article>
      <article>
        <a href="https://realeyezapparel.com" target="_BLANK" alt="Realeyez Apparel"></a>
        <a href="https://instagram.com/beheardla" target="_BLANK" alt="Heard"></a>
        <a href="http://andersonpaak.com" target="_BLANK" alt="Anderson .Paak"></a>
        <a href="https://twotimelosers.co" target="_BLANK" alt="Two Time Losers"></a>
        <a href="https://smokebreak.live" target="_BLANK" alt="Smoke Break"></a>
        <a href="https://kylebebeau.com/track-artwork" target="_BLANK" alt="Track Artwork"></a>
      </article>
    </section>
    <Footer />
  </div>
)

export default IndexPage;
