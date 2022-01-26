import React from 'react';
import '../style/portfolio.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (


   // <!-- Headers -->
    <header class="header">
    
           <h1>Olsen Ogouchi</h1> 
        
      <nav class="navbar">
        <div class ="max-width">
            <div class="logo"><a href="#" class="port" >Portfo<span class="design">lio.</span></a></div>
          <ul class="nav-link">
            <li>
                <a href="#home"
                onClick={() => handlePageChange('Home')}
                className="a-nav"> Home </a>
            </li>
              <li>
                  <a href="#About-me" 
                  onClick={() => handlePageChange('About')}
                  className="a-nav"> About me </a>
              </li>
              <li>
                  <a href="#projects" 
                  onClick={() => handlePageChange('Projects')}
                  className="a-nav">Projects </a>
              </li>
              <li>
              
                <a href="#skills" 
                onClick={() => handlePageChange('Skills')}
                className="a-nav">Skills </a>
            </li>
              <li>
                  <a href="#contact" 
                  onClick={() => handlePageChange('Contacts')}
                  className="a-nav">Contact Me </a>
              </li>
              <li>
                  <a href="https://docs.google.com/document/d/1EmSmiOf9eGJIdYdcUKgfW5vnZAasDbMYjGCdiW2hZ58/edit" target="_blank" class="a-nav">Resume</a>
              </li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
        </div>
        </div>
      </nav>
    </header>





  //   <ul className="nav nav-tabs">
  //     <li className="nav-item">
  //       <a
  //         href="#home"
  //         onClick={() => handlePageChange('Home')}
  //         // This is a conditional (ternary) operator that checks to see if the current page is "Home"
  //         // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
  //         className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
  //       >
  //         Home
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#about"
  //         onClick={() => handlePageChange('About')}
  //         // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
  //         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
  //       >
  //         About
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#blog"
  //         onClick={() => handlePageChange('Blog')}
  //         // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
  //         className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
  //       >
  //         Blog
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#contact"
  //         onClick={() => handlePageChange('Contact')}
  //         // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
  //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
  //       >
  //         Contact
  //       </a>
  //     </li>
  //   </ul>
   );
}

export default NavTabs;
