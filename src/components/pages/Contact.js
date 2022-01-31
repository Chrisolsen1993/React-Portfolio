import React from 'react';
import '../style/portfolio.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
    <div className="max-width">
        <h2 className="title1">Contact me</h2>
        <div className="contact-content">
            <div className="column left">
            
                <p>To know more about me or to get in touch with me feel free to Email me or fill the form below Thanks.</p>
                <div className="icons">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <div className="info">
                            <div className="head">Name</div>
                            <div className="sub-title">Olsen Ogouchi</div>
                        </div>
                    </div>
                <a href="mailto:chrisolsen1993@gmail.com">
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">Email Me</div>
                            <div className="sub-title">chrisolsen1993@gmail.com</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/Chrisolsen1993" target="_blank" >
                    <div className="row">
                        <i className="fab fa-github"></i>
                        <div className="info">
                            <div className="head">Github</div>
                            <div className="sub-title">Chrisolsen1993</div>
                        </div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/olsen-ogouchi-2164ab186/" target="_blank" id="contact-linkedin"> 
                    <div className="row">
                        <i className="fab fa-linkedin"></i>
                        <div className="info">
                            <div className="head">Linkedin</div>
                            <div className="sub-title">Olsen Ogouchi</div>
                        </div>
                    
                    </div>
                </a>
                </div>
            </div>
            <div className="column right">
                <div className="text">Message me</div>
                <form action="#">
                    <div className="fields">
                        <div className="field name">
                            <input type="text" placeholder="Name" required/>
                        </div>
                        <div className="field email">
                            <input type="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="field">
                        <input type="text" placeholder="Subject" required/>
                    </div>
                    <div className="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                    </div>
                    <div className="button-area">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

  );
}
