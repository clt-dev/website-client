import React, { Component } from 'react';

import linkedin from './assets/img/icons/linkedin.svg';
import dribble from './assets/img/icons/dribble.svg';
import github from './assets/img/icons/github.svg';
import mail from './assets/img/icons/mail.svg';

class Footer extends Component {
  render(){
    return (
      <footer>
        <a className="btn" href="mailto:kylebebeau@gmail.com?subject=Creative Service Request">Start A Project</a>
        <article className="social">
          <a className="gh" href="https://github.com/bebeau" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a className="mail" href="mailto:kylebebeau@gmail.com?subject=Creative Service Request" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="Email" />
          </a>
        </article>
      </footer>
    );
  }
}

export default Footer;