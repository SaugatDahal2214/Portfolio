import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDigitalOcean, faWordpress } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "PHP",
    "Laravel",
    "Python",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "Postman"
];

const labelsSecond = [
    "Apache Hadoop",
    "PySpark",
    "Pandas",
    "ML",
    "Snowflake",
    "Python",
    "SQL",
    "Tableu",
    "Pandas",
    "Selenium",
    "AWS"
];

const labelsThird = [
    "Meta Business Suite",
    "Wordpress",
    "Google Search Console",
    "Mailchimp",
    "Google Ads",
    "Meta Ads",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Laravel. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDigitalOcean} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>I have worked with data collection, processing, and management, focusing on web scraping, data storage using MySQL, and data analysis. Currently, working as a Data Analyst at Deerhold Nepal, I am actively involved in the Data Management projects for US Healthcare</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWordpress} size="3x"/>
                    <h3>Digital Marketing</h3>
                    <p>I have experience in content management, SEO, and data-driven marketing strategies. During my internship at Himalayan Circuit, I managed their WordPress blog site, optimizing content for search engines and user engagement.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;