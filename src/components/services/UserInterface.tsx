import React, {useRef} from 'react';
import CTA from '../CTA';
import WorkGrid from '../WorkGrid';

const UserInterface = (props: {
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

      <div className="half banner">
        <div className="image"></div>
        <div className="copy">
          <h1>User<br />Interface<br />Design</h1>
          <p>At the heart of every great digital experience is a well-crafted user interface, and our UI design services are dedicated to making your product not only visually stunning but also exceptionally user-friendly. We specialize in creating interfaces that captivate, engage, and guide users through seamless interactions.</p>
          <button className="btn" onClick={() => props.showInquiry(true)}>Get A Quote</button>
        </div>
      </div>

      <div className="full bottom">
        <p>Our team of experienced UI designers understands the importance of blending aesthetics with functionality to deliver designs that resonate with your audience. Whether you're developing a website, mobile app, software application, or any digital product, our UI design services are tailored to enhance the user experience and drive meaningful results.</p>
        <button className="btn" onClick={() => handleShowWork(workRef1.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef1}
      />

      <div className="blocks">
        <div>
          <h3><span>U</span>ser-Centric Design</h3>
          <p>We prioritize the needs and preferences of your target audience, ensuring that every aspect of the interface is designed with the user in mind.</p>
        </div>
        <div>
          <h3><span>W</span>ireframing and Prototyping</h3>
          <p>We create wireframes and interactive prototypes to visualize the user journey, test concepts, and refine designs before development begins.</p>
        </div>
        <div>
          <h3><span>R</span>esponsive Design</h3>
          <p>Our designs adapt seamlessly to various devices and screen sizes, providing a consistent and intuitive experience on desktops, tablets, and mobile devices.</p>
        </div>
        <div>
          <h3><span>V</span>isual Design</h3>
          <p>Our designers excel in creating visually appealing and on-brand user interfaces that leave a lasting impression.</p>
        </div>
        <div>
          <h3><span>U</span>sability Testing</h3>
          <p>We conduct usability testing to gather user feedback and make data-driven refinements to improve the overall user experience.</p>
        </div>
        <div>
          <h3><span>A</span>ccessibility Compliance</h3>
          <p>Ensuring that your interface is accessible to all users, including those with disabilities, is a core part of our design process.</p>
        </div>
        <div>
          <h3><span>U</span>ser Interface Style-Guide</h3>
          <p>We provide detailed UI style guides and design assets to maintain consistency across your product and future updates.</p>
        </div>
        <div>
          <h3><span>C</span>ollaboration</h3>
          <p>We work closely with your development team to ensure a smooth handoff of design assets and seamless integration into your product.</p>
        </div>
      </div>

      <div className="full top">
        <p>Whether you're launching a new product, revamping an existing one, or seeking to enhance user engagement, our UI design services are tailored to meet your specific goals and budget. Let us help you create a visually compelling and user-friendly interface that sets your digital product apart.</p>
        <button className="btn" onClick={() => handleShowWork(workRef2.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef2}
      />

      <CTA 
        copy="Contact us today to discuss your project and embark on a journey towards creating a remarkable user interface that drives user satisfaction and business success."
        showInquiry={() => props.showInquiry(true)}
      />

    </div>
  )
}

export default UserInterface;
