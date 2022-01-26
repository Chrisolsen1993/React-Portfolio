import React from 'react';

export default function Home() {
  return (
    <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                   <div className="home-content-1">Hello my name is</div>
                   <div id="name-display" className="home-content-2"></div>
                   <div  className="home-content-3">And I am a <span class="design1" id="description-display">Full Stack Web Developer</span></div>
                </div>

            </div>
        </section>
  );
}
