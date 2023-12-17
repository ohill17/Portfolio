import React from 'react'

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GmailIcon from "@material-ui/icons/Email"

import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Orion Hill</h2>
        <div className='prompt'> 
        <p>
          A computer programming major with a passion for front-end web design
        </p>
        <LinkedInIcon />
        <GitHubIcon />
        <GmailIcon />
        
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className="list">
          <li className='item'>
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, ES6, NPM, BootStrap </span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>.NET, MySql </span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>Javascript, C# </span>
          </li>
        </ol>
        </div>
    </div>
  )
}

export default Home