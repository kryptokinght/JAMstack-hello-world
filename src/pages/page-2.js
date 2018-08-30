import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h2>Some of my Projects Projects</h2>
    <ul>
      <li>
        <a href="https://github.com/kryptokinght/NipponTour"><h4>Nippon Tour</h4></a>
        <p>A site to view tour places in Japan, add more, remove some, write reviews for a place, and more... 
          Built using ExpressJs</p>
      </li>
      <li>
        <a href="https://github.com/kryptokinght/InstagramCatch"><h4>Instagram Catch</h4></a>
        <p>A Chrome Extension that helps you in downloading Instagram pics and videos in one click only.</p>
      </li>
      <li>
        <a href="https://github.com/kryptokinght/weather-react-app"><h4>React-Weather-App</h4></a>
        <p>Shows live weather data of the major Indian cities which you enter</p>
      </li>
      <li>
        <a href="https://github.com/kryptokinght/react-youtube-clone"><h4>React-Youtube-clone</h4></a>
        <p>Makes use of the Youtube API to load search results instantly as you type in.</p>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
