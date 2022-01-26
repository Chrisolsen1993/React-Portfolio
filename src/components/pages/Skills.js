import React from 'react';
import '../style/portfolio.css';

export default function Skills() {
  const profile = require("../../assets/images/avatar.jpeg");
  return (
    <section className="skills" id="skills">
    <div className="max-width">
        <h2 className="title1">My skills</h2>
        <div className="skills-content">
            <div class="column left">
                
                <p>I​’m​ experienced in multiple web technologies including HTML/CSS, JavaScript, MySQL and Express.</p>
               
            </div>
            <div className="column right">
                <div className="bars">
                    <div class="info">
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div className="line html"><span className="dot"></span></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>CSS</span>
                        <span>60%</span>
                    </div>
                    <div className="line css"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div className="line js"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Express</span>
                        <span>85%</span>
                    </div>
                    <div className="line express"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>MySQL</span>
                        <span>70%</span>
                    </div>
                    <div className="line mysql"></div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}