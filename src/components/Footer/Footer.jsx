import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import github_icon from '../../assets/github.png'
import instagram_icon from '../../assets/instagram.png'
import pinterest_icon from '../../assets/pinterest-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          {/* <img src={footer_logo} alt="" /> */}
          <h1 className='footer-name'><b>VEDANT</b></h1>
          <p>I'm Vedant, Java Full Stack Developer.Passionate about designing beautiful web interface. Based in Pune</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='footer-social-icons'>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src={pinterest_icon} alt="Pinterest" className="social-icon" />
        </a>
      </div>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2025 Vedant. All rights reserved</p>
        <div className='footer-bottom-right'>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
