import {useRef, useEffect, useState} from 'react';
import CTA from '../CTA';
import WorkGrid from '../WorkGrid';

import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import banner from '../../assets/img/services/web.jpg';

const Website = (props: {
  showInquiry: (value: boolean) => void;
}) => {
  const workRef1 = useRef<any>();
  const workRef2 = useRef<any>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [slideIn, setSlideIn] = useState<boolean>(false);

  const handleShowWork = (el: any) => {
    el.className = 'show';
    if (workRef1.current && el === workRef1.current) {
      workRef2.current.className = '';
      workRef1.current.scrollIntoView(true, { behavior: 'smooth' });
    }
    if (el === workRef2.current) {
      workRef1.current.className = '';
      workRef2.current.scrollIntoView(true, { behavior: 'smooth' });
    }
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  useEffect(() => {
    if (!isLoading) return setSlideIn(true);
  }, [isLoading]);

  return (
    <>
    {isLoading && (
      <div className="loader"></div>
    )}
    {!isLoading && (
      <div id="page" className={`${slideIn ? 'show' : ''}`}>
        
        <a href="/" id="pageLogo"><Logo /></a>

        <div className="pageContainer">

          <div className='banner full'>
            <div className="image" style={{backgroundImage: `url(${banner})`}}></div>
            <div className="copy">
              <div className="bg">Website<br />Design &<br />Development</div>
              <h1>Website<br />Design &<br />Development</h1>
              <div className="desc">
                <p>Are you looking to establish a strong online presence or revamp your existing website? Our professional website development services are designed to create stunning, user-friendly, and highly functional websites tailored to your unique needs.</p>
                <button className="btn" onClick={() => props.showInquiry(true)}>Get A Quote</button>
              </div>
            </div>
          </div>

          <div className="full bottom">
            <div>
              <p>Our team of experienced web developers combines creative design with cutting-edge technology to deliver websites that not only look impressive but also perform flawlessly.</p>
              <p>Whether you need a simple informational site, an e-commerce platform, a blog, or a complex web application, we have the expertise to bring your vision to life.</p>
            </div>
            <button className="btn" onClick={() => handleShowWork(workRef1.current)}>View Our Work</button>
          </div>

          <WorkGrid
            ref={workRef1}
          />

          <div className="blocks">
            <div>
              <h3><span className="key">C</span>ustom Web Design</h3>
              <p>We create visually appealing and responsive designs that captivate your audience and provide a seamless user experience across all devices.</p>
            </div>
            <div>
              <h3><span className="key">F</span>ront-End Development</h3>
              <p>Our developers use the latest HTML, CSS, and JavaScript techniques to ensure your website looks and functions flawlessly.</p>
            </div>
            <div>
              <h3><span className="key">B</span>ack-End Development</h3>
              <p>We build robust, scalable, and secure back-end systems that power your website's functionality, ensuring it can handle your growing business needs.</p>
            </div>
            <div>
              <h3><span className="key">E</span>-Commerce Solutions</h3>
              <p>If you're selling products or services online, we can develop e-commerce websites with secure payment gateways, inventory management, and user-friendly shopping experiences.</p>
            </div>
            <div>
              <h3><span className="key">S</span>EO Optimization</h3>
              <p>Our websites are built with search engine optimization (SEO) best practices in mind to help you rank higher in search results and attract more organic traffic.</p>
            </div>
            <div>
              <h3><span className="key">P</span>erformance and Security</h3>
              <p>We prioritize website speed and security, implementing measures to protect your site from cyber threats and ensure optimal performance.</p>
            </div>
            <div>
              <h3><span className="key">C</span>ontent Management</h3>
              <p>We integrate easy-to-use CMS platforms, allowing you to update and manage your content effortlessly.</p>
            </div>
            <div>
              <h3><span className="key">O</span>ngoing Support</h3>
              <p>Our commitment doesn't end with the launch. We offer ongoing support, maintenance, and updates to keep your website running smoothly.</p>
            </div>
          </div>

          <div className="full top">
            <div>
              <p>Whether you're a small business, a startup, or a large enterprise, our website development services are tailored to meet your specific goals and budget.</p>
              <p>Let us help you create a powerful online presence that engages your audience and drives results.</p>
            </div>
            <button className="btn" onClick={() => handleShowWork(workRef2.current)}>View Our Work</button>
          </div>

          <WorkGrid
            ref={workRef2}
          />

          <CTA 
            copy="Contact us today to discuss your project and take the first step towards a remarkable online presence."
            showInquiry={() => props.showInquiry(true)}
          />

        </div>

      </div>
      )
    }
    </>
  )
}

export default Website;
