import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://saugatdahal2214.github.io/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://saugatdahal2214.github.io/" target="_blank" rel="noreferrer"><h2>Closal</h2></a>
                <p>Developed a fully functional dummy eCommerce website using HTML, CSS, and JavaScript, showcasing key features such as product listing, shopping cart functionality, and responsive design.</p>
            </div>
            <div className="project">
                <a href="https://www.hospitaldirghayu.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.hospitaldirghayu.com/" target="_blank" rel="noreferrer"><h2>Dirghayu Guru Hospital</h2></a>
                <p>Designed, developed, and launched a comprehensive web-based platform for Dirghayu Hospital using Laravel, improving
                operational efficiency</p>
            </div>
            <div className="project">
                <a href="https://github.com/SaugatDahal2214/Used-Car-Marketplace-with-Price-Prediction" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SaugatDahal2214/Used-Car-Marketplace-with-Price-Prediction" target="_blank" rel="noreferrer"><h2>Price Prediction System</h2></a>
                <p>Utilized the Scikit-learn library to implement a linear regression model, achieving 85% prediction
accuracy for car prices based on key features from the dataset.
Developed a full-stack application using the MERN stack
to create a seamless, user-friendly interface for the car marketplace.
</p>
            </div>
            <div className="project">
                <a href="https://github.com/SaugatDahal2214/ReservationCancellationPrediction" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SaugatDahal2214/ReservationCancellationPrediction" target="_blank" rel="noreferrer"><h2>Hotel Reservation System</h2></a>
                <p>Integrated the machine learning model with the full-stack application using Laravel, allowing realtime price predictions within the platform</p>
            </div>
            <div className="project">
                <a><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>Sai Shankar Multi Services</h2></a>
                <p>Work In Progress for Health Care Service Provider</p>
            </div>
        </div>
    </div>
    );
}

export default Project;