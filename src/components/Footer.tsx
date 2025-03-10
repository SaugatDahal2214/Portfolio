import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/SaugatDahal2214" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/saugat-dahal-471312211/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
         </footer>
  );
}

export default Footer;