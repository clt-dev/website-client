import React, {Key, useState, useRef, useEffect} from 'react';
import Typewriter from './Typewriter';

import TextTag from '../assets/img/tag.jpg';

const services = [
  'Website Design & Development',
  'Software Development',
  'Product Engineering',
  'User-Interface Design',
  'Identity & Branding Design'
]

const InquiryForm = (props: {
  show: boolean;
  toggle: () => void;
}) => {
  const modalRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [promptsShown, setPromptsShown] = useState<number[]>([]);
  const [emailOrPhone, setEmailOrPhone] = useState<string>('');

  const [inquiry, setInquiry] = useState({
    service: '',
    contact: '',
    message: ''
  });

  const serviceListHTML = () => {
    let count = 1;
    let html = '';
    {
      services.map((service: string, index: Key) => {
        return html += `<div> [${count++}] ${service}</div>`;
      })
    }
    return html;
  }

  const updateField = (value: string, key: string) => {
    let info = {...inquiry};
    info[key as keyof typeof info] = value;

    setInquiry(info);
    handleEndPrompt();
  }

  const handleContactPreference = (value: string) => {
    if (value.includes('1')) {
      setEmailOrPhone('email');
    }
    if (value.includes('2')) {
      setEmailOrPhone('phone');
    }
    handleEndPrompt();
  }

  const handleEndPrompt = () => {
    let shown: number[] = [...promptsShown];
    shown.push(activeIndex);

    setPromptsShown(shown);
    setActiveIndex(activeIndex+1);
  }

  return (
    <div className={props.show ? 'modal show' : 'modal'}>
      <div ref={modalRef} className="modalCopy">
        <img src={TextTag} />
        {props.show && (
          <>
          {(promptsShown.includes(0) || activeIndex === 0) && (
            <Typewriter
              text={
                `> Hello! Thank you for your interest in CLT dev.<br />> Let's get started.<br /><br />${serviceListHTML()}<br />> What service are you interested in:`
              }
              value={inquiry['service']}
              complete={promptsShown.includes(0)}
              current={activeIndex === 0}
              delay={5}
              callback={(value) => updateField(value, 'service')}
            />
          )}
          {(promptsShown.includes(1) || activeIndex === 1) && (
            <Typewriter
              text={
                `<br /> [1] Email<br /> [2] Phone<br /><br />> What is your preferred point of contact:`
              }
              complete={promptsShown.includes(1)}
              current={activeIndex === 1}
              hideInput={true}
              delay={5}
              callback={(value) => handleContactPreference(value)}
            />
          )}
          {(promptsShown.includes(2) || activeIndex === 2) && (
            <Typewriter
              text={
                emailOrPhone === 'email' ? `> Email address:` : '> Phone number:'
              }
              value={inquiry['contact']}
              complete={promptsShown.includes(2)}
              current={activeIndex === 2}
              delay={5}
              callback={(value) => updateField(value, 'contact')}
            />
          )}
          {(promptsShown.includes(3) || activeIndex === 3) && (
            <Typewriter
              text={
                `<br />> Tell us about your project:`
              }
              value={inquiry['message']}
              complete={promptsShown.includes(3)}
              isTextArea={true}
              modalRef={modalRef.current}
              current={activeIndex === 3}
              delay={5}
              callback={(value) => updateField(value, 'message')}
            />
          )}
          </>
        )}
        <button className="close" onClick={() => props.toggle()}>
          press <span className="block">ESC</span> to close
        </button>
      </div>
    </div>
  )
}

export default InquiryForm;