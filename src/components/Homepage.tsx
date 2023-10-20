import {useRef} from 'react';
import WorkGrid from './WorkGrid';
import {Shine} from "./Shine";

import {ReactComponent as Logo} from '../assets/img/logo.svg';

const Homepage = (props: {
  inquiry: boolean;
  toggle: () => void;
}) => {

  const workRef = useRef<HTMLDivElement | null>(null);

  const handleBtnClick = () => {
    props.toggle();
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
          <p> 
            We are creative guns for hire.
            We aim to please, but shoot to kill. 
            We are the artists, the problem solvers, the software engineers you've been looking for.
          </p>
          <div className="btnWrap">
            <Shine puffyness="3">
              <button className="btn" onClick={() => handleBtnClick()}>Get A Quote</button>
            </Shine>
          </div>
        </div>

        <div className="right">
          <Logo />
          <a href="/services/website-design-development" className="keyTitle dark">
            <div className="keyWrap">
              <Shine puffyness="3">
                <span className="key">W</span>
              </Shine>
            </div>
            <div className="word">
              ebsite <span className="hideMobile">Design & Development</span>
            </div>
          </a>
          <a href="/services/software-development" className="keyTitle dark">
            <Shine puffyness="3">
              <div className="keyWrap">
                <span className="key">S</span>
              </div>
            </Shine>
            <div className="word">
              oftware <span className="hideMobile">Development</span>
            </div>
          </a>
          {/* <a href="/services/product-engineering" className="keyTitle dark"><span>P</span>roduct Engineering</a>
          <a href="/services/user-interface-design" className="keyTitle dark"><span>U</span>ser-Interface Design</a> */}
          <a href="/services/identity-design" className="keyTitle dark">
            <Shine puffyness="3">
              <div className="keyWrap">
                <span className="key">I</span>
              </div>
            </Shine>
            <div className="word">
              dentity & Brand <span className="hideMobile">Design</span>
            </div>
          </a>
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
