import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h2>Some of my Projects Projects</h2>
    <ul>
      <li>
        <a href="https://github.com/kryptokinght/NipponTour"><h3>Nippon Tour</h3></a>
        <p>A site to view tour places in Japan, add more, remove some, write reviews for a place, and more... 
          Built using ExpressJs</p>
      </li>
      <li>
        <a href="https://github.com/kryptokinght/InstagramCatch"><h3>Instagram Catch</h3></a>
        <p>A Chrome Extension that helps you in downloading Instagram pics and videos in one click only.</p>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
