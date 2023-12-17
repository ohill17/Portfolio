import React from 'react'

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GmailIcon from "@material-ui/icons/Email"

import '../styles/Footer.css'

function Footer() {
  const redirectToLinkedIn = () => {
    // Replace 'https://www.linkedin.com/' with the actual LinkedIn profile URL
    window.location.href = 'https://www.linkedin.com/in/orion-hill-4a288115b/';
  };
  const redirectToGitHub = () => {
    // Replace 'https://www.linkedin.com/' with the actual LinkedIn profile URL
    window.location.href = 'https://www.linkedin.com/in/orion-hill-4a288115b/';
  };
  const redirectToEmail = () => {
    // Replace 'https://www.linkedin.com/' with the actual LinkedIn profile URL
    window.location.href = 'orionhill084@gmail.com';
  };
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon onClick={redirectToLinkedIn} style={{ cursor: 'pointer' }} />
        <GitHubIcon onClick={redirectToGitHub}style={{ cursor: 'pointer' }} />
        <GmailIcon onClick={redirectToEmail}style={{ cursor: 'pointer' }} />
      </div>

      <p> &copy; 2023 Orion Hill</p>
      </div>
  )
}

export default Footer