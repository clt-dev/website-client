import React, {useRef} from 'react';
import CTA from '../CTA';
import WorkGrid from '../WorkGrid';

const Product = (props: {
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
          <h1>Product<br />Engineering<br />Services</h1>
          <p>Unlock innovation, accelerate time-to-market, and turn your product ideas into reality with our comprehensive product engineering services. We specialize in providing end-to-end solutions that encompass product design, development, testing, and optimization.</p>
          <button className="btn" onClick={() => props.showInquiry(true)}>Get A Quote</button>
        </div>
      </div>

      <div className="full bottom">
        <p>Our dedicated team of product engineers brings a wealth of experience to the table, ensuring that your product not only meets but exceeds your expectations. Whether you're launching a new physical product, a software application, or a digital solution, we have the expertise to guide you through every stage of the product development lifecycle.</p>
        <button className="btn" onClick={() => handleShowWork(workRef1.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef1}
      />

      <div className="blocks">
        <div>
          <h3><span>C</span>onceptualization and Design</h3>
          <p>We work closely with you to refine your product concept, create detailed specifications, and design a solution that aligns perfectly with your vision and market demands.</p>
        </div>
        <div>
          <h3><span>P</span>rototyping & Development</h3>
          <p>Our engineers use the latest tools and technologies to develop prototypes and MVPs (Minimum Viable Products) to validate ideas, gather user feedback, and iteratively refine your product.</p>
        </div>
        <div>
          <h3><span>F</span>ull-Scale Development</h3>
          <p>We take your product from concept to completion, handling all aspects of development, whether it's a physical product, software application, or a combination of both.</p>
        </div>
        <div>
          <h3><span>Q</span>uality Assurance</h3>
          <p>Rigorous testing and quality control procedures are integrated to ensure that your product is robust, secure, and reliable.</p>
        </div>
        <div>
          <h3><span>O</span>ptimization & Scaling</h3>
          <p>As your product gains traction, we help you scale it to accommodate growing user demands and market expansion.</p>
        </div>
        <div>
          <h3><span>C</span>ontinuous Improvement</h3>
          <p>We provide ongoing support, updates, and improvements to enhance your product's performance and user experience.</p>
        </div>
        <div>
          <h3><span>H</span>ardware & Software Integration</h3>
          <p>If your product involves both hardware and software components, we excel in seamlessly integrating these elements for a cohesive user experience.</p>
        </div>
        <div>
          <h3><span>R</span>egulatory Compliance</h3>
          <p>For products subject to industry regulations and standards, we ensure compliance and guide you through the certification process.</p>
        </div>
      </div>

      <div className="full top">
        <p>Whether you're a startup with a groundbreaking idea or an established company looking to innovate, our product engineering services are tailored to meet your specific goals and budget. Let us be your partner in bringing your product vision to life and achieving success in the market.</p>
        <button className="btn" onClick={() => handleShowWork(workRef2.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef2}
      />

      <CTA 
        copy="Contact us today to discuss your project and embark on a journey to create a remarkable product that sets new standards in your industry."
        showInquiry={() => props.showInquiry(true)}
      />

    </div>
  )
}

export default Product;
