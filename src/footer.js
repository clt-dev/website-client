import React, { Component } from 'react';

import angellist from './assets/img/icons/angellist.svg';
import linkedin from './assets/img/icons/linkedin.svg';
import dribble from './assets/img/icons/dribble.svg';
import github from './assets/img/icons/github.svg';
import mail from './assets/img/icons/mail.svg';

class Footer extends Component {
  render(){
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
          <article className="social">
            <a className="ln" href="https://linkedin.com/in/kylebebeau" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a className="gh" href="https://github.com/bebeau" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a className="db" href="https://dribbble.com/kylebebeau" target="_blank" rel="noopener noreferrer">
              <img src={dribble} alt="Dribbble" />
            </a>
            <a className="ag" href="https://angel.co/kylebebeau" target="_blank" rel="noopener noreferrer">
              <img src={angellist} alt="Angel List" />
            </a>
            <a className="mail" href="mailto:kyle@theinitgroup.com?subject=Creative Service Request" target="_blank" rel="noopener noreferrer">
              <img src={mail} alt="Email" />
            </a>
          </article>
        </section>
      </footer>
    );
  }
}

export default Footer;