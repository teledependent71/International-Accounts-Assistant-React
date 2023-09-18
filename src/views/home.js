import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Accounts Assistant</title>
        <meta property="og:title" content="International Accounts Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
