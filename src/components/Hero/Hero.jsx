import React from 'react'
import './Hero.css'
import profile_img1 from '../../assets/profile_img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/cv.pdf'

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile_img1} alt="" />
      <h1><span>I'm Vedant Ligade,</span> frontend developer based in Pune</h1>
      <p>I'm Vedant, Java Full Stack Developer.Passionate about designing beautiful web interface. Based in Pune </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={cv} target='_blank'>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
