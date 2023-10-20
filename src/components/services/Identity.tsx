import {useRef, useEffect, useState} from 'react';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import WorkGrid from '../WorkGrid';
import Logos from '../../assets/data/logos';
import {Shine} from "../Shine";

const Identity = (props: {
  showInquiry: (value: boolean) => void;
}) => {
  const workRef1 = useRef<any>();
  const workRef2 = useRef<any>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [slideIn, setSlideIn] = useState<boolean>(false);

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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) return setSlideIn(true);
  }, [isLoading]);

  return (
    <div id="page" className={`${slideIn ? 'show' : ''}`}>

      <PageHeader 
        showInquiry={props.showInquiry}
      />

      <div className="pageContainer">
      
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
              <div className="btnWrap">
                <Shine puffyness="3">
                  <button className="btn" onClick={() => props.showInquiry(true)}>Get A Quote</button>
                </Shine>
              </div>
            </div>
          </div>
        </div>

        <div className="full bottom">
          <div>
            <p>Our team of talented identity designers specializes in creating cohesive and impactful brand identities that reflect your values, mission, and vision.</p>
            <p>Whether you're a startup establishing your brand or an established business looking to refresh your identity, our Identity Design Services are tailored to help you make a lasting impression.</p>
          </div>
          <div className="btnWrap">
            <Shine puffyness="3">
              <button className="btn" onClick={() => handleShowWork(workRef1.current)}>Get A Quote</button>
            </Shine>
          </div>
        </div>

        <WorkGrid
          ref={workRef1}
        />

        <section className="blocks">
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">L</span>
                </Shine>
              </div>
              <div className="word">
                ogo Design
              </div>
            </h3>
            <p>We craft unique and versatile logos that serve as the cornerstone of your brand identity, instantly recognizable and adaptable across various mediums.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">B</span>
                </Shine>
              </div>
              <div className="word">
                rand Guidelines
              </div>
            </h3>
            <p>We develop comprehensive brand guidelines that define your brand's colors, typography, imagery, and usage rules, ensuring consistency in all your branding efforts.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">V</span>
                </Shine>
              </div>
              <div className="word">
                isual Assets
              </div>
            </h3>
            <p> Our designers create a range of visual assets, such as icons, graphics, and illustrations, that enhance your brand's visual storytelling.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">P</span>
                </Shine>
              </div>
              <div className="word">
                ackaging Design
              </div>
            </h3>
            <p>If you have physical products, we design packaging that not only protects your items but also communicates your brand's personality and values.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">U</span>
                </Shine>
              </div>
              <div className="word">
                sability Testing
              </div>
            </h3>
            <p>We conduct usability testing to gather user feedback and make data-driven refinements to improve the overall user experience.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">B</span>
                </Shine>
              </div>
              <div className="word">
                rand Collateral
              </div>
            </h3>
            <p>We design marketing materials, brochures, banners, and promotional items that align with your brand identity and make a strong impression.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">D</span>
                </Shine>
              </div>
              <div className="word">
                igital Branding
              </div>
            </h3>
            <p>Ensure a consistent online presence with branded social media profiles, email signatures, and website elements.</p>
          </article>
          <article>
            <h3>
              <div className="keyWrap">
                <Shine puffyness="3">
                  <span className="key">R</span>
                </Shine>
              </div>
              <div className="word">
                ebranding
              </div>
            </h3>
            <p>If you're undergoing a brand transformation, we guide you through the rebranding process, preserving brand equity while evolving your identity.</p>
          </article>
        </section>

        <div className="full top">
          <div>
            <p>Whether you're starting a new venture, evolving your brand, or simply want to stand out in a competitive market, our Identity Design Services are tailored to meet your specific goals and budget.</p>
            <p>Let us be your partner in creating a visual identity that resonates with your target audience and drives brand recognition and loyalty.</p>
          </div>
          <div className="btnWrap">
            <Shine puffyness="3">
              <button className="btn" onClick={() => handleShowWork(workRef2.current)}>Get A Quote</button>
            </Shine>
          </div>
        </div>

        <WorkGrid
          ref={workRef2}
        />

        <CTA 
          copy="Contact us today to discuss your project and embark on a journey to establish a compelling and consistent brand identity that leaves a lasting impression."
          showInquiry={() => props.showInquiry(true)}
        />
      
      </div>

    </div>
  )
}

export default Identity;
