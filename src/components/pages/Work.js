import React from 'react';

export default function Work() {
    const dayImg = require("../../assets/images/day-planner.png");
    const jobsImg = require("../../assets/images/jobs.png");
    const materialImg = require("../../assets/images/mat.png");
    const techImg = require("../../assets/images/blog.png");
    const wheatherImg = require("../../assets/images/wheather.png");
    const codeImg = require("../../assets/images/quiz.png");
  return (
    <section class="projects" id="projects">
    <div class="max-width">
        <h2 class="title1">My Projects</h2>
        
        <div class="projects-content Owl-project">
            <div class="card">
                <div class="box">
                    <a href="https://chrisolsen1993.github.io/Work-Day-Scheduler/" target="_blank"> <img src={dayImg}alt="day-planner projects" class="day-planner"/> </a>
                    <div class="project-title">Day-Planner</div>
                    <p> Calendar application that allows a user to save events for each hour of the day.  </p>
                    
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <a href="https://chrisolsen1993.github.io/JOBS-4-MORE/" target="_blank"> <img src={jobsImg} alt="JOBS-4-MORE Generator" class="jobs"/></a>
                    <div class="project-title">JOBS 4 MORE</div>
                    <p> Look up a job by industry and experience level that best suit your skillset</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <a href="https://materials-trader.herokuapp.com/" target="_blank"> <img src={materialImg} alt="mat projects" class="mat"/> </a>
                    <div class="project-title">Materials-Trader</div>
                    <p> An emerging peer-to-peer bulk recycling network</p>
                    
                </div>
            </div>


            <div class="card">
                <div class="box">
                <a href="https://frozen-brook-84861.herokuapp.com/" target="_blank"> <img src={techImg} alt="blog projects" class="blog"/> </a>
                    <div class="project-title">Tech-Blog</div>
                    <p class="wrap"> An app that allow a user to make a post regarding any Tech subject.</p>
                    
                </div>
            </div>




            <div class="card">
                <div class="box">
                    <a href="https://chrisolsen1993.github.io/Weather-Dashboard/" target="_blank"> <img src={wheatherImg} alt="Weather-Dashboard projects" class="weather"/> </a>
                    <div class="project-title">Weather-Dashboard</div>
                    <p> Application that allow users to search the weather condition in multiple cities.</p>
                    
                </div>
            </div>
            <div class="card">
                <div class="box"><a href="https://chrisolsen1993.github.io/Code-Quiz/" target="_blank"> <img src={codeImg} alt="Code-Quiz projects" class="quiz" /> </a>
                    <div class="project-title">Code-Quiz</div>
                    <p> Timed quiz on JavaScript fundamentals that stores high scores.  </p>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
