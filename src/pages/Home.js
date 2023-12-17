import React, { useState, useEffect } from 'react';

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GmailIcon from "@material-ui/icons/Email"

import "../styles/Home.css"

function Home() {
  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/orion-hill-4a288115b/';
  };

  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/ohill17';
  };

  const emailToCopy = 'orionhill084@gmail.com';
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setIsCopied(true);

      // Reset the "copied" status after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Orion Hill</h2>
        <div className='prompt'> 
        <p>
          A computer programming major with a passion for front-end web design
        </p>
        <LinkedInIcon onClick={redirectToLinkedIn} style={{ cursor: 'pointer' }} />
        <GitHubIcon onClick={redirectToGitHub} style={{ cursor: 'pointer' }} />
        <GmailIcon onClick={copyToClipboard} style={{ cursor: 'pointer' }} />
        {isCopied && <span className='copied-message'>Copied!</span>}
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