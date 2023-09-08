import React, {useState, useEffect} from 'react';
import PhoneNumeberInput from '@bebeau/phone-number-input';

const Services = (props: {
  service: string;
}) => {
  const [service, setService] = useState<string>('website');

  useEffect(() => {
    if (props.service) {
      setService(props.service);
    }
  }, [props]);

  return (
    <div className="page">
      <div className="desc">
        {service === 'website' && (
          <>
            <h3>Website Design & Development</h3>
            <p>Are you looking to establish a strong online presence or revamp your existing website? Our professional website development services are designed to create stunning, user-friendly, and highly functional websites tailored to your unique needs.</p>

            <p>Our team of experienced web developers combines creative design with cutting-edge technology to deliver websites that not only look impressive but also perform flawlessly. Whether you need a simple informational site, an e-commerce platform, a blog, or a complex web application, we have the expertise to bring your vision to life.</p>

            <p>Our comprehensive website development services include:</p>

            <h4>Custom Web Design</h4>
            <p>We create visually appealing and responsive designs that captivate your audience and provide a seamless user experience across all devices.</p>

            <h4>Front-End Development</h4>
            <p>Our developers use the latest HTML, CSS, and JavaScript techniques to ensure your website looks and functions flawlessly.</p>

            <h4>Back-End Development</h4>
            <p>We build robust, scalable, and secure back-end systems that power your website's functionality, ensuring it can handle your growing business needs.</p>

            <h4>E-Commerce Solutions</h4>
            <p>If you're selling products or services online, we can develop e-commerce websites with secure payment gateways, inventory management, and user-friendly shopping experiences.</p>

            <h4>Content Management Systems (CMS)</h4>
            <p>We integrate easy-to-use CMS platforms like WordPress, Drupal, or custom solutions, allowing you to update and manage your content effortlessly.</p>

            <h4>SEO Optimization</h4>
            <p>Our websites are built with search engine optimization (SEO) best practices in mind to help you rank higher in search results and attract more organic traffic.</p>

            <h4>Performance and Security</h4>
            <p>We prioritize website speed and security, implementing measures to protect your site from cyber threats and ensure optimal performance.</p>

            <h4>Ongoing Support</h4>
            <p>Our commitment doesn't end with the launch. We offer ongoing support, maintenance, and updates to keep your website running smoothly.</p>

            <p>Whether you're a small business, a startup, or a large enterprise, our website development services are tailored to meet your specific goals and budget. Let us help you create a powerful online presence that engages your audience and drives results.</p>

            <p>Contact us today to discuss your project and take the first step towards a remarkable online presence.</p>

          </>
        )}
        {service === 'dev' && (
          <>dev</>
        )}
        {service === 'product' && (
          <>product</>
        )}
        {service === 'ui' && (
          <>ui</>
        )}
        {service === 'identity' && (
          <>identity</>
        )}
      </div>
    </div>
  )
}

export default Services;
