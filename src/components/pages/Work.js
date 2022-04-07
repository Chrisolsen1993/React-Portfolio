import React, { useState } from 'react';
import Popup from './Popup';

export default function Work() {
    const dayImg = require("../../assets/images/day-planner.png");
    const jobsImg = require("../../assets/images/jobs.png");
    const materialImg = require("../../assets/images/mat.png");
    const techImg = require("../../assets/images/blog.png");
    const teamImg = require("../../assets/images/Team.png");
    const toyImg = require("../../assets/images/Toy.png");

    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);

    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title1">My Projects</h2>

                <div className="projects-content Owl-project">
                <div className="card">
                        <div className="box">
                        <div className="popupContainer"
                                onMouseEnter={() => setIsShown5(true)}
                                onMouseLeave={() => setIsShown5(false)}>
                           <img src={toyImg} alt="Code-Quiz projects" class="quiz" /> 
                            <div className="project-title">Toys-Planet</div>
                            <div className="textBox5">
                            <p> One-stop shop where users  swap their used or unused toys with other users.  </p>
                            </div>

                            <Popup trigger={isShown5}>
                            <div className="banner ">
                                    <div className="bold">Toys-Planet</div>
                                    <div>---------</div>
                                    <span className="highlight"> Node / React<br/> Graphql/ Mongoose<br/> JSON Web Token</span>
                                    </div>
                                <div className="buttonLink">
                                   <a href="https://obscure-journey-81724.herokuapp.com/" target="_blank"> <button className="button-area button1" type="button" >Deployment</button></a>
                                   <a href="https://github.com/Chrisolsen1993/Toysplanet" target="_blank">  <button className="button-area" type="button" >Github Code</button></a>
                                </div>
                            </Popup>
                        </div>
                        </div>
                    </div>
               


                    
                    <div className="card">
                        <div className="box">
                        <div className="popupContainer"
                                onMouseEnter={() => setIsShown1(true)}
                                onMouseLeave={() => setIsShown1(false)}>

                             <img src={jobsImg} alt="JOBS-4-MORE Generator" class="jobs" />
                            
                                <div className="project-title">JOBS 4 MORE</div>
                                <div className="textBox1 textBox11">
                                <p> Look up a job by tech industry and experience level that best suit your skillset</p>
                                </div>
                                <Popup trigger={isShown1}>
                                    <div className="popJob">
                                <div className="banner ">
                                    <div className="bold">Job-4-More</div>
                                    <div>---------</div>
                                    <span className="highlight">JavaScript <br/> Local-Storage<br/>Api</span>
                                    </div>
                                <div className="buttonLink">
                                <a href="https://matthewjflanagan.github.io/JOBS-4-MORE/" target="_blank">  <button className="button-area button1" type="button" >Deployment</button></a>
                                <a href="https://github.com/Chrisolsen1993/JOBS-4-MORE" target="_blank">    <button className="button-area" type="button" >Github Code</button></a>
                                </div>
                                </div>
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="popupContainer"
                                onMouseEnter={() => setIsShown2(true)}
                                onMouseLeave={() => setIsShown2(false)}>
                            <img src={materialImg} alt="mat projects" class="mat" /> 
                          
                            <div class="project-title">Materials-Trader</div>
                            <div className="textBox2">
                            <p> Peer-to-peer bulk recycling network, facilitating the exchange of waste materials</p>
                            </div>
                            <Popup trigger={isShown2}>
                            <div className="banner ">
                                    <div className="bold">Materials-Trader</div>
                                    <div>---------</div>
                                    <span className="highlight">Handlbars / Mysql<br/> Express / Sequelize<br/>Bcrypt</span>
                                    </div>
                                <div className="buttonLink">
                                <a href="https://materials-trader.herokuapp.com/" target="_blank">    <button className="button-area button1" type="button" >Deployment</button></a>
                                <a href="https://github.com/djdyer/materials-trader" target="_blank">     <button className="button-area" type="button" >Github Code</button> </a>
                                </div>
                            </Popup>

                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="box">
                        <div className="popupContainer"
                                onMouseEnter={() => setIsShown3(true)}
                                onMouseLeave={() => setIsShown3(false)}>
                            <img src={techImg} alt="blog projects" class="blog" /> 
                            <div className="project-title">Tech-Blog</div>
                            <div className="textBox1 textBox12">
                            <p className="wrap"> An app that allow a user to make a post regarding any Tech subject.</p>
                            </div>
                            <Popup trigger={isShown3}>
                            <div className="banner ">
                                    <div className="bold">Tech-Blog</div>
                                    <div>---------</div>
                                    <span className="highlight">Node.js / MVC<br/> Express / Sequelize<br/>Bcrypt</span>
                                    </div>
                                <div className="buttonLink">
                                <a href="https://frozen-brook-84861.herokuapp.com/" target="_blank">    <button className="button-area button1" type="button" >Deployment</button> </a>
                                <a href="https://github.com/Chrisolsen1993/Tech-Blog" target="_blank">    <button className="button-area" type="button" >Github Code</button></a>
                                </div>
                            </Popup>
                        </div>
                        </div>
                    </div>




                    <div className="card">
                        <div className="box">
                        <div className="popupContainer"
                                onMouseEnter={() => setIsShown4(true)}
                                onMouseLeave={() => setIsShown4(false)}>
                            <img src={teamImg} alt="Weather-Dashboard projects" class="weather" /> 
                            <div className="project-title">Team-Generator</div>
                            <div className="textBox1 textBox12">
                            <p> An Application that generate a team profile based on the user input</p>
                            </div>
                            <Popup trigger={isShown4}>
                            <div className="banner ">
                                    <div className="bold">Team-Profile-Generator</div>
                                    <div>---------</div>
                                    <span className="highlight"> OOP-Javascript<br/> Inquirer-Node.js / TDD-Jest<br/> Bootstrap / CSS</span>
                                    </div>
                                <div className="buttonLink">
                                <a href="https://watch.screencastify.com/v/fMielrRVx4pShcI7LTGr" target="_blank">      <button className="button-area button1" type="button" >Deployment</button></a>
                                <a href="https://github.com/Chrisolsen1993/Team-Profile-Generator" target="_blank">     <button className="button-area" type="button" >Github Code</button></a>
                                </div>
                            </Popup>
                        </div>
                        </div>
                    </div>
                    
                  <div className="card">
                        <div className="box">
                             <div className="popupContainer"
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}>
                            <img src={dayImg} alt="day-planner projects" class="day-planner" />
                           
                                <div className="project-title">Day-Planner</div>
                                <div className="textBox1">
                                    <p> Calendar application that allows a user to save events for each hour of the day.  </p>
                                </div>
                                <Popup trigger={isShown}>
                                    <div className="banner">
                                    <div className="bold">Day-Planner</div>
                                    <div>---------</div>
                                    <span className="highlight">JavaScript<br/> Data-Attributes</span>
                                    </div>
                                    
                                    <div className="buttonLink">
                                    
                                    <a href="https://chrisolsen1993.github.io/Work-Day-Scheduler/" target="_blank">     <button className="button-area button1" type="button" >Deployment</button></a>
                                    <a href="https://github.com/Chrisolsen1993/Work-Day-Scheduler" target="_blank">   <button className="button-area" type="button" >Github Code</button> </a>
                                    </div>
                                </Popup>

                                {/* <div className="mouse">
                    {isShown && (<button className="button-area button1" type="button" >Deployment</button>)}
                    {isShown && (<button className="button-area" type="button" >Github Code</button>)}
                    </div> */}
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>

    );
}
