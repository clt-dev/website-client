import React, {useRef} from 'react';
import WorkGrid from './WorkGrid';

import {ReactComponent as Logo} from '../assets/img/logo.svg';

const Homepage = (props: {
  showInquiry: (value: boolean) => void;
}) => {

  const workRef = useRef<HTMLDivElement | null>(null);

  const logAnalytics = async () => {
    window.gtag('config', 'AW-11171481429');
    window.gtag('event', 'inquiry_click', {
      send_to: 'AW-11313458751/yymXCNWButgYEL_c1pIq',
    })
  }

  const handleBtnClick = async () => {
    props.showInquiry(true);
    // await logAnalytics();
  }

  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div id="home">

      <section id="intro">

        <div className="left">
          <Logo />
          <h1>Hello World.</h1>
          <blockquote> 
            We are creative guns for hire.
            We aim to please, but shoot to kill. 
            We are the artists, the problem solvers, the software engineers you've been looking for.
            We are CLT dev, Charlotte, NC software developers.
          </blockquote>
          <button className="btn" onClick={() => handleBtnClick()}>Get A Quote</button>
        </div>

        <div className="right">
          <a href="/services/website-design-development" className="keyTitle dark"><span>W</span>ebsite Design & Development</a>
          <a href="/services/software-development" className="keyTitle dark"><span>S</span>oftware Development</a>
          <a href="/services/product-engineering" className="keyTitle dark"><span>P</span>roduct Engineering</a>
          <a href="/services/user-interface-design" className="keyTitle dark"><span>U</span>ser-Interface Design</a>
          <a href="/services/identity-design" className="keyTitle dark"><span>I</span>dentity Design</a>
        </div>
        
        <div className="scroll" onClick={() => scrollToWork()}>
          portfolio
          <div className="arrow"></div>
        </div>

      </section>

      <WorkGrid 
        ref={workRef}
        show={true}
      />

    </div>
  )
}

export default Homepage;
