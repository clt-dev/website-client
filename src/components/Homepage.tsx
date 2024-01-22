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

      <div className="textSection">

        <div className="copy">
          <Logo />
          <h1>Hello World.</h1>
          <p> 
            We are creative guns for hire.
            We aim to please, but shoot to kill. 
            We are the artists, the problem solvers, the software engineers you've been looking for...
          </p>
        </div>

        <div className="scroll" onClick={() => scrollToWork()}>
          portfolio
          <div className="arrow"></div>
        </div>

      </div>

      <WorkGrid 
        ref={workRef}
        show={true}
      />

      <div className="textSection">
        <div className="copy">
          <article className="block">
            <p>...We are CLT dev, a Charlotte, North Carolina based service provider for <a href="/services/website-design-development">website design & development</a>, <a href="/services/software-development">custom software development</a>, and <a href="/services/identity-design">identity & brand design</a>.</p>
            <div className="btnWrap">
              <Shine puffyness="3">
                <button className="btn" onClick={() => handleBtnClick()}>Let's talk</button>
              </Shine>
            </div>
          </article>
        </div>
      </div>

    </div>
  )
}

export default Homepage;
