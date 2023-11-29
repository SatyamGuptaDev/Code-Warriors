import React from 'react';
import './web.css';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';


function Contact() {
  return (
    <>
    <div className="contact-body">

      <nav className="home-nav-about">

          <NavLink to='/' style={{textDecoration: "none", color:"white"}}>Home</NavLink>
          <NavLink to='/about' style={{textDecoration: "none", color:"white"}}>About</NavLink>
          <NavLink to='/project' style={{textDecoration: "none", color:"white"}}>Project</NavLink>
          <NavLink to='/contact' style={{textDecoration: "none", color:"white"}}>Contact</NavLink>
      </nav>

        <main>
          <div className="title">Contact us</div>
          <div className="title-info">We'll get back to you soon!</div>

          <form action="" method="" className="form">
            <div className="input-group">
              <input type="text" name="first_name" id="first-name" placeholder="First name" />
              <label htmlFor="first-name">First name</label>
            </div>

            <div className="input-group">
              <input type="text" name="last_name" id="last-name" placeholder="Last Name" />
              <label htmlFor="last-name">Last name</label>
            </div>

            <div className="input-group">
              <input type="email" name="e-mail" id="e-mail" placeholder="e-mail" />
              <label htmlFor="e-mail">e-mail</label>
            </div>

            <div className="textarea-group">
              <textarea name="message" id="message" rows="2" placeholder="Message"></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <div className="button-div">
              <button type="submit">Send</button>
            </div>
          </form>
        </main>

        <footer>

          <h1>CODE WARRIORS</h1>
  
         
        </footer>
      </div>

    </>
  );
}

export default Contact;