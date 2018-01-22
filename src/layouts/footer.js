import React, { PropTypes } from 'react';
import Link from 'gatsby-link';

const Footer = props => {
	return (
    	<footer>
    		<section>
    			<p className="price main">$125<span>/hour</span></p>
    			<span className="or">or</span>
    			<article>
    				<p className="hours">8<span>hrs</span></p>
    				<p className="price main">$1k<span>/month</span></p>
    			</article>
    			<article>
    				<p className="hours">24<span>hrs</span></p>
    				<p className="price main">$2k<span>/month</span></p>
    			</article>
    			<article>
    				<p className="hours">40<span>hrs</span></p>
    				<p className="price main">$3k<span>/month</span></p>
    			</article>
    			<a href="mailto:kyle@theinitgroup.com?subject=Design/Development" className="main-btn">Contact</a>
    		</section>
    	</footer>
	);
};

export default Footer;