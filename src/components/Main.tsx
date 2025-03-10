import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
         <img src={profileImage} alt="Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SaugatDahal2214" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saugat-dahal-471312211/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Saugat Dahal</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/SaugatDahal2214" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saugat-dahal-471312211/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;