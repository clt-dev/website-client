import {useRef} from 'react';
import CTA from '../CTA';
import WorkGrid from '../WorkGrid';

import Logos from '../../assets/data/logos';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';

const Identity = (props: {
  showInquiry: (value: boolean) => void;
}) => {
  const workRef1 = useRef<any>();
  const workRef2 = useRef<any>();

  const handleShowWork = (el: any) => {
    el.className = 'show';
    if (el === workRef1.current) {
      workRef2.current.className = '';
      workRef1.current.scrollIntoView(true, { behavior: 'smooth' });
    }
    if (el === workRef2.current) {
      workRef1.current.className = '';
      workRef2.current.scrollIntoView(true, { behavior: 'smooth' });
    }
  }

  return (
    <div id="page">

      <a href="/" id="pageLogo"><Logo /></a>
      
      <div className="banner full">
        <div className="image">
          <div className="logos">
            {Logos && Logos.map((img, index: number) => {
              return <img key={`logo-${index}`} src={img} alt="" />
            })}
          </div>
        </div>
        <div className="copy">
          <div className="bg">Identity<br />Design<br />Ser<span>v</span>ices</div>
          <h1>Identity<br />Design<br />Ser<span>v</span>ices</h1>
          <div className="desc">
            <p>Your brand's visual identity is the face it presents to the world, and our Identity Design Services are dedicated to crafting a distinctive and memorable brand image that sets you apart from the competition. We understand that a strong visual identity is essential for building brand recognition, trust, and loyalty.</p>
            <button className="btn" onClick={() => props.showInquiry(true)}>Get A Quote</button>
          </div>
        </div>
      </div>

      <div className="full bottom">
        <div>
          <p>Our team of talented identity designers specializes in creating cohesive and impactful brand identities that reflect your values, mission, and vision.</p>
          <p>Whether you're a startup establishing your brand or an established business looking to refresh your identity, our Identity Design Services are tailored to help you make a lasting impression.</p>
        </div>
        <button className="btn" onClick={() => handleShowWork(workRef1.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef1}
      />

      <div className="blocks">
        <div>
          <h3><span>L</span>ogo Design</h3>
          <p>We craft unique and versatile logos that serve as the cornerstone of your brand identity, instantly recognizable and adaptable across various mediums.</p>
        </div>
        <div>
          <h3><span>B</span>rand Guidelines</h3>
          <p>We develop comprehensive brand guidelines that define your brand's colors, typography, imagery, and usage rules, ensuring consistency in all your branding efforts.</p>
        </div>
        <div>
          <h3><span>V</span>isual Assets</h3>
          <p> Our designers create a range of visual assets, such as icons, graphics, and illustrations, that enhance your brand's visual storytelling.</p>
        </div>
        <div>
          <h3><span>P</span>ackaging Design</h3>
          <p>If you have physical products, we design packaging that not only protects your items but also communicates your brand's personality and values.</p>
        </div>
        <div>
          <h3><span>U</span>sability Testing</h3>
          <p>We conduct usability testing to gather user feedback and make data-driven refinements to improve the overall user experience.</p>
        </div>
        <div>
          <h3><span>B</span>randing Collateral</h3>
          <p>We design marketing materials, brochures, banners, and promotional items that align with your brand identity and make a strong impression.</p>
        </div>
        <div>
          <h3><span>D</span>igital Branding</h3>
          <p>Ensure a consistent online presence with branded social media profiles, email signatures, and website elements.</p>
        </div>
        <div>
          <h3><span>R</span>ebranding</h3>
          <p>If you're undergoing a brand transformation, we guide you through the rebranding process, preserving brand equity while evolving your identity.</p>
        </div>
      </div>

      <div className="full top">
        <div>
          <p>Whether you're starting a new venture, evolving your brand, or simply want to stand out in a competitive market, our Identity Design Services are tailored to meet your specific goals and budget.</p>
          <p>Let us be your partner in creating a visual identity that resonates with your target audience and drives brand recognition and loyalty.</p>
        </div>
        <button className="btn" onClick={() => handleShowWork(workRef2.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef2}
      />

      <CTA 
        copy="Contact us today to discuss your project and embark on a journey to establish a compelling and consistent brand identity that leaves a lasting impression."
        showInquiry={() => props.showInquiry(true)}
      />

    </div>
  )
}

export default Identity;
