import {useState, useRef, useEffect, useCallback} from 'react';
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

  const serviceRef = useRef<any>(null);
  const contactTypeRef = useRef<any>(null);
  const contactInfoRef = useRef<any>(null);
  const messageRef = useRef<any>(null);
  const successRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [promptsShown, setPromptsShown] = useState<number[]>([]);
  const [emailOrPhone, setEmailOrPhone] = useState<string>('');
  const [hasFocus, setHasFocus] = useState<number>(0);

  const [inquiry, setInquiry] = useState({
    service: '',
    contact: '',
    message: ''
  });

  const serviceListHTML = () => {
    let count = 1;
    let html = '';
    services.map((service: string) => {
      return html += `<div> [${count++}] ${service}</div>`;
    })
    return html;
  }

  const updateField = (value: string, key: string) => {
    let info = {...inquiry};
    info[key as keyof typeof info] = value;

    setInquiry(info);
  };

  const handleContactPreference = (value: string) => {
    if (value.includes('1')) {
      setEmailOrPhone('email');
    }
    if (value.includes('2')) {
      setEmailOrPhone('phone');
    }
  }

  const handleKeyPress = (e: any) => {
    const key = e.key.toLowerCase();

    if (activeIndex === 5) {
      props.toggle();

      setActiveIndex(0);
      setPromptsShown([]);
      setInquiry({
        service: '',
        contact: '',
        message: ''
      });
    }

    if (key !== 'enter') return;
      
    if (activeIndex === 0) {
      updateField(services[serviceRef.current.value - 1], 'service');
      setPromptsShown([0]);
    }

    if (activeIndex === 1) {
      handleContactPreference(contactTypeRef.current.value);
      setPromptsShown([0, 1]);
    }

    if (activeIndex === 2) {
      updateField(contactInfoRef.current.value, 'contact');
      setPromptsShown([0, 1, 2]);
    }

    if (activeIndex === 3) {
      console.log(messageRef.current.value);
      updateField(messageRef.current.value, 'message');
      setPromptsShown([0, 1, 2, 3]);
    }

    let active = activeIndex+1;
    setActiveIndex(active);
  }

  const handleSendInquiry = useCallback(() => {
    console.log(inquiry);
    setPromptsShown([]);
    setActiveIndex(5);
  }, [inquiry]);

  useEffect(() => {
    setHasFocus(activeIndex);
    if (activeIndex === 4) {
      handleSendInquiry();
    }
  }, [activeIndex, handleSendInquiry]);

  return (
    <div className={props.show ? 'modal show' : 'modal'}>
      <div ref={modalRef} className="modalCopy">
        <img src={TextTag} alt="cltdev.com" />
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
              ref={serviceRef}
              keydown={handleKeyPress}
              focus={() => setHasFocus(0)}
              hasFocus={hasFocus === 0}
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
              ref={contactTypeRef}
              keydown={handleKeyPress}
              focus={() => setHasFocus(1)}
              hasFocus={hasFocus === 1}
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
              ref={contactInfoRef}
              keydown={handleKeyPress}
              focus={() => setHasFocus(2)}
              hasFocus={hasFocus === 2}
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
              ref={messageRef}
              keydown={handleKeyPress}
              focus={() => setHasFocus(3)}
              hasFocus={hasFocus === 3}
            />
          )}
          {(activeIndex === 5) && (
            <Typewriter
              text={
                `> Thank you for your interest in working with us.<br />> We have received your message and will contact you shortly.<br /><br />> Press any key to close this terminal.`
              }
              complete={promptsShown.includes(5)}
              modalRef={modalRef.current}
              current={activeIndex === 5}
              delay={5}
              keydown={handleKeyPress}
              ref={successRef}
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