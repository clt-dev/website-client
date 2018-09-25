import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from './footer';
import Header from './header';

import '../assets/sass/style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>The INiT Group</title>
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

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-4879883-8"></script>

      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-4879883-8');
      `}</script>

      <script>{`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2055850057979112');
        fbq('track', 'PageView');`}
      </script>

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
