import React from 'react';
import '../style/portfolio.css';

export default function About() {
  const profile = require("../../assets/images/avatar.jpeg");
  return (
    <section className="about-me-section" id="About-me">
    <div className="max-width">
        <h2 className="title1">About Me </h2>
        <div className="about-content">
            <div className="column left">
                <img  src={profile} alt="" className="avatar"/>
            </div>
            <div className="column right"> 
                <div class="text">I am Olsen and I'm a <span>Developer</span> </div>
                <p className="aboutP">I'​m​ a full stack Web Developer living in Atlanta Georgia. <br/> I have a serious passion for the BackEnd so does for the FrontEnd as well.<br/> My Goal is to keep creating those beautiful web applications that can fix everyday problems.</p>
            </div>
        </div>
    </div>
    </section>
  );
}
