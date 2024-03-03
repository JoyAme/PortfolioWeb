import React, { useState } from 'react'
import { Container } from '../../GlobalStyle'
import { AboutWrap } from './Aboutstyle'
import back from '../../assest/images/black.png'
import obas from '../../assest/images/obas.jpg'
import AboutTime from './AboutTime'

const AboutPage = () => {
    const [red,setRed]=useState("goat")
    
  return (
    <div>
        <AboutWrap>
      <Container>
        <div className='intro'>
            <div>
        <h5>Introduction.</h5>
        <p>I'm a skilled front-end developer,i have worked on projects which
         includes both individual and collaboratively,i am proficient in using Html,css, javascript and reactjs I'm a quicklearner
          and i am open to learning to acquire growth.I'm a developer with a passion for  creating beautiful 
          website with great user experiences.i have collaborately worked in teams to create efficient, scalable,
           and user-friendly solutions that solve real-world problems. 
        I am passionate about improvement, always checking out the latest trends in development and best practices for coding.</p>
        <div className='basic-info'>
          <div>
            <h4>Name</h4>
            <p>Joy Ame</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>joyobasame@gmail.com</p>
          </div>
          <div>
            <h4>Education</h4>
            <p> Certification:<br></br>React Js developer<br></br>(udemy)</p>
          </div>
          <div>
            <h4>Employment</h4>
            <p>Open</p>
          </div>
        </div>
        </div>
         <div className='images'>
                {/* <img src={emoji} alt='emoji' className='emoji'/> */}
                <div className='blur'>
                  <img src={obas} alt='obas' className='obas'/>
                {/* <img src={back} alt='back'className='curve'/> */}
                </div>
                <h5>Webdeveloper</h5>
         </div>
         <AboutTime/>
  </div>
      </Container>
      </AboutWrap>
    </div>
  )
}

export default AboutPage
