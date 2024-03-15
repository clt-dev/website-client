import {useRef} from 'react';
import WorkGrid from './WorkGrid';
import {Shine} from "./Shine";
import { useParallax } from 'react-scroll-parallax';
import {ReactComponent as Logo} from '../assets/img/logo.svg';

import {ReactComponent as AKQA} from '../assets/img/clients/akqa.svg';
import {ReactComponent as AP} from '../assets/img/clients/ap.svg';
import {ReactComponent as CAA} from '../assets/img/clients/caa.svg';
import {ReactComponent as Dreamworks} from '../assets/img/clients/dreamworks.svg';
import {ReactComponent as Dribbble} from '../assets/img/clients/dribbble.svg';
import {ReactComponent as WKNDHRS} from '../assets/img/clients/wkndhrs.svg';

import {ReactComponent as Email} from '../assets/img/icons/envelope.svg';
import {ReactComponent as Phone} from '../assets/img/icons/phone.svg';

const Homepage = (props: {
  inquiry: boolean;
  toggle: () => void;
}) => {
  const {ref: oneRef} = useParallax({ speed: -20 });
  const {ref: twoRef} = useParallax({ speed: -10 });

  const workRef = useRef<HTMLDivElement | null>(null);

  const handleBtnClick = () => {
    window.lintrk('track', { conversion_id: 15977058 });
    // track inquiry btn click google tag conversion
    window.gtag('event', 'conversion', {'send_to': 'AW-11313458751/BaNGCN7jx5gZEL_c1pIq'});
    props.toggle();
  }

  return (
    <div id="home">

      <section className="textSection">

        <article ref={oneRef} className="copy">
          <Logo />
          <h1 className="title">Hello World.</h1>
          <p> 
            We are creative guns for hire.
            We aim to please, but shoot to kill. 
            We are the artists, the problem solvers, the software engineers you've been looking for...
          </p>
          <div className="btnGroup">
            <div className="btnWrap">
              <Shine puffyness="3">
                <button className="btn" onClick={() => handleBtnClick()}>Get Started</button>
              </Shine>
            </div>
            <a href="mailto:kylebebeau@gmail.com?subject=CLT Dev Project Inquiry">
              <Email />
              <span>Email</span>
            </a>
            <a href="tel:8039848700">
              <Phone />
              <span>Call</span>
            </a>
          </div>
        </article>

      </section>

      <WorkGrid 
        ref={workRef}
        show={true}
      />

      <section className="textSection column">

        <article ref={twoRef} className="copy">
          <h2 className="title">We're CLT Dev.</h2>
          <p>
            We are a wildly creative Charlotte, NC based software agency.
            We code custom software solutions for business systems and build MVP's for tech startups.
          </p>
          <div className="btnGroup">
            <div className="btnWrap">
              <Shine puffyness="3">
                <button className="btn" onClick={() => handleBtnClick()}>Let's talk</button>
              </Shine>
            </div>
            <a href="mailto:kylebebeau@gmail.com?subject=CLT Dev Project Inquiry">
              <Email />
              <span>Email</span>
            </a>
            <a href="tel:8039848700">
              <Phone />
              <span>Call</span>
            </a>
          </div>
          <section>
            <h3 className="title">We've worked with...</h3>
            <article className="clientList">
              <a href="https://dreamworks.com" target="_blank" rel="noreferrer"><Dreamworks /></a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer"><Dribbble /></a>
              <a href="https://akqa.com" target="_blank" rel="noreferrer"><AKQA /></a>
              <a href="https://andersonpaak.com" target="_blank" rel="noreferrer"><AP /></a>
              <a href="https://caa.com" target="_blank" rel="noreferrer"><CAA /></a>
              <a href="https://wkndhrs.com" target="_blank" rel="noreferrer"><WKNDHRS /></a>
            </article>
          </section>
        </article>

      </section>

    </div>
  )
}

export default Homepage;
