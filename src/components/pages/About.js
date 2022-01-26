import React from 'react';
import '../style/portfolio.css';

export default function About() {
  const profile = require("../../src/assets/images/avatar.jpeg");
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
                <p>I'​m​ a full stack developer living in Atlanta Georgia. In terms of hobbies, I am a huge fun of video game especially FIFA. My favorite sport is soccer and i love to travel. I also enjoy creating beautiful web applications that can fix everyday problems.</p>
            </div>
        </div>
    </div>
    </section>
  );
}
