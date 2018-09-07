import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from './footer';
import Header from './header';

import '../assets/sass/style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link rel="canonical" href="http://theinitgroup.com" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The INiT Group - Creative Problem Solving" />
      <meta
        property="og:description"
        content="We’re a collective of creative problem solvers, digital nomads, lifetime travelers, and pioneers of creative space. We’re in it for it, or not in it at all."
      />
      <meta property="og:url" content="http://theinitgroup.com/" />
      <meta property="og:site_name" content="INiT" />
      <meta property="fb:app_id" content="496408310403833" />
      <meta
        property="og:image"
        content="http://theinitgroup.com/src/assets/img/default_facebook.jpg"
      />
      <meta
        property="og:image:secure_url"
        content=""
      />

      <meta itemprop="name" content="The INiT Group - Creative Problem Solving" /> 
      <meta 
        itemprop="description" 
        content="We’re a collective of creative problem solvers, digital nomads, lifetime travelers, and pioneers of creative space. We’re in it for it, or not in it at all." /> 
      <meta itemprop="image" content="http://theinitgroup.com/src/assets/img/default_google.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="We’re a collective of creative problem solvers, digital nomads, lifetime travelers, and pioneers of creative space. We’re in it for it, or not in it at all."
      />
      <meta name="twitter:title" content="The INiT Group - Creative Problem Solving" />
      <meta name="twitter:site" content="@theinitgroup" />
      <meta
        name="twitter:image"
        content="http://theinitgroup.com/src/assets/img/default_twitter.jpg"
      />
    </Helmet>
    <Header />
      {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
