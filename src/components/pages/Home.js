import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import '../style/portfolio.css';
import '../utils/home-helper.js';

export default function Home() {
  // const [displayName, setDisplayName]= useState("")
  // useEffect(() => {spliting()
  // })
  // function spliting() {
  //   const name_chars = "Olsen Ogouchi".split('');
  //   const name_display_interval = setInterval(() => {
  //     if (name_chars.length > 0) {

  //       setDisplayName(displayName +=name_chars.shift())
  //     } else {
  //       clearInterval(name_display_interval);
  //     }
  //   }, 600);
  //    }



  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="home-content-1" > Hello my name is </div>

          <div id="name-display" className="home-content-2">
            <Typewriter
              options={{
                strings: 'Olsen Ogouchi',
                autoStart: true,
                loop: true,
              }}
            /></div>
          <div className="home-content-3">And I am a <span class="design1" id="description-display">Full Stack Web Developer</span></div>
        </div>

      </div>
    </section>
  );
}
