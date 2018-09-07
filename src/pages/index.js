import React from 'react';
import Link from 'gatsby-link';
import Rellax from 'react-rellax';

const IndexPage = () => (
	<div id="home">
		<Rellax as="section" className="rellax" data-rellax-speed="-2"></Rellax>
		<section>
			<article>
				<span id="Logo"></span>
				<blockquote>
					We’re a collective of creative problem solvers, digital nomads, lifetime travelers, and pioneers of creative space. We’re in it for it, or not in it at all.
					<cite></cite>
				</blockquote>
			</article>
			<article>
				<a href="https://realeyezapparel.com" target="_BLANK" id="Realeyez" alt="Realeyez Apparel"></a>
				<a href="https://beheard.la" target="_BLANK" id="Heard" alt="Heard"></a>
				<a href="https://giv.deals/how-it-works" target="_BLANK" id="Giv" alt="Giv"></a>
				<a href="http://thetoastedpost.com" target="_BLANK" id="Toasted" alt="The Toasted Post"></a>
			</article>
		</section>
	</div>
)

export default IndexPage
