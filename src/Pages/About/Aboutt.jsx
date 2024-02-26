import React from 'react'
import { AboutWrap } from './Aboutstyle';
import { Container } from '../../GlobalStyle';
import back from '../../assest/images/black.png'
import emoji from '../../assest/images/emoji.png'
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";


const About = () => {
  
  return (
 <>
 <AboutWrap>
  <Container>
 <div className='Row'>
  <div className='info'>
    <h1>Hi I Am <span>Joy Ame</span></h1>
    <h4>Frontend developer with high level of experience in web Design and Developement </h4>
    <button className='btn'>Hire Me</button>
    <div className='Icon'>
    <FaGithub className='icons'/>
    <RiLinkedinFill  className='icons'/>
    <FaInstagram className='icons'/>
    </div>
  </div>
  <div className='images'>
    <img src={emoji} alt='emoji' className='emoji'/>
    <div className='blur'></div>
    <img src={back} alt='back'className='curve'/>
    <h5>Webdeveloper</h5>
  </div>
 </div>
  </Container>
 </AboutWrap>
 
 </>
  )



};




export default About
