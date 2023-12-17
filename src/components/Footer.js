import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
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
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon onClick={redirectToLinkedIn} style={{ cursor: 'pointer' }} />
        <GitHubIcon onClick={redirectToGitHub} style={{ cursor: 'pointer' }} />
        <GmailIcon onClick={copyToClipboard} style={{ cursor: 'pointer' }} />
        {isCopied && <span className='copied-message'>Copied!</span>}
      </div>

      <p>&copy; 2023 Orion Hill</p>
    </div>
  );
}

export default Footer;