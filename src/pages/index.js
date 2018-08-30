import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>My name is Minanshu Singh aka <a href="https://github.com/kryptokinght/"><strong>kryptokinght</strong></a>. </p>
    <p> 
      I am a full stack web developer 
      mainly focusing on React, Express and Mongodb. I have contributed in the 
      webpack.js.org website and looking forward to contribute in more open source open
      projects.
    </p>
    <p></p>
    <Link to="/page-2/">My Projects</Link>
  </div>
)

export default IndexPage
