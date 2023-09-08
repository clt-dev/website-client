import React, {useState, useRef, useEffect} from 'react';
import CTA from '../CTA';
import WorkGrid from '../WorkGrid';

const App = (props: {
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
          <h1>Application<br />Development<br />Services</h1>
          <p>In the digital age, a well-crafted mobile or web application can be a game-changer for your business. Our application development services are designed to turn your ideas into innovative and user-friendly software solutions that cater to your unique needs.</p>
          <button className="btn" onClick={() => props.showInquiry(true)}>Get A Quote</button>
        </div>
      </div>

      <div className="full bottom">
        <p>Our seasoned team of developers specializes in creating cutting-edge applications that deliver exceptional user experiences. Whether you need a mobile app for iOS and Android, a web-based platform, or a custom software solution, we have the expertise to bring your vision to life.</p>
        <button className="btn" onClick={() => handleShowWork(workRef1.current)}>View Our Work</button>
      </div>

      <WorkGrid
        ref={workRef1}
      />

      <div className="blocks">
        <div>
          <h3><span>C</span>ustom App Development</h3>
          <p>We build tailor-made applications that align with your business objectives, ensuring they are scalable, secure, and perform seamlessly.</p>
        </div>
        <div>
          <h3><span>M</span>obile App Development</h3>
          <p>Our mobile app experts develop apps for iOS and Android platforms, leveraging the latest technologies to provide smooth navigation and optimal performance.</p>
        </div>
        <div>
          <h3><span>W</span>eb App Development</h3>
          <p>We create responsive and interactive web applications that work flawlessly across all devices and browsers.</p>
        </div>
        <div>
          <h3><span>C</span>ross-Platform Development</h3>
          <p>Optimize your reach by developing applications that work on multiple platforms with efficiency and consistency.</p>
        </div>
        <div>
          <h3><span>U</span>ser-Centric Design</h3>
          <p>Our design team focuses on user-centric principles, ensuring that your application is not only functional but also visually appealing and intuitive.</p>
        </div>
        <div>
          <h3><span>I</span>ntegration Services</h3>
          <p>Seamlessly integrate your application with third-party APIs, services, and databases to enhance functionality and provide a comprehensive user experience.</p>
        </div>
        <div>
          <h3><span>Q</span>uality Assurance</h3>
          <p>Rigorous testing and quality assurance procedures are implemented to guarantee bug-free and secure applications.</p>
        </div>
        <div>
          <h3><span>O</span>ngoing Support</h3>
          <p>We offer post-launch support, maintenance, and updates to keep your application up-to-date and running smoothly.</p>
        </div>
      </div>

      <div className="full top">
        <p>Whether you're a startup with a groundbreaking idea or an established enterprise looking to streamline your operations, our application development services are tailored to meet your specific goals and budget. Let us help you transform your concept into a powerful digital reality.</p>
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
  )
}

export default App;
