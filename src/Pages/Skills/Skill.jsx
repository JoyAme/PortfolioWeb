import React from 'react'
import { Container } from '../../GlobalStyle'
import { Data, skillSet  } from '../../assest/Data'
import { SkillWrap } from './Skillstyle'

const Skill = () => {
  return (
    <>
    <SkillWrap>
    <Container>
    <div className='info-skill'>

          <div className='left-side'>
            <h4>Services</h4>
            <div className='skill'>
                  <h1>MY SKILLSET?</h1>
                 <hr className='line'></hr>
                  </div>
                  {/* <h5 className='lorem'>Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit.<br></br> Similique,
                    doloremque? Impedit
                    reiciendis ducimus?</h5> */}
            </div>


              <div className='right-side'>
                <div className='Row-1'>
              {
                    Data.map((icons,index)=>{
                      const {icon,name}=icons
                      return(
                        <div className='icons' key={index}> 
                        <div className='icon-body'>
                          <h1 className='icons-house'>{icon}</h1>
                          <h1 className='icons-name'>{name}</h1>
                          </div>
                        </div>
                      )
                    })
            }
                  </div>

                  <div className='Row-2'>
                    <h4>Tools</h4>
                    <div className='tech'>
                      <h1>TECHNOLOGIES</h1>
                      <hr className='line'></hr>
                    </div>
                    {/* <span></span> */}
                  </div>

                  <div className='Row-3'>
                    {
                      skillSet.map((skill,index)=>{
                        const {img, title}=skill
                        return(
                          <div className='skill-type' key={index}>
                            <img src={img} alt='name'/>
                            <h4>{title}</h4>
                          </div>
                        )
                      })
                    }
                  </div>

              
                </div>
              
              </div>




    </Container>
    </SkillWrap>

    </>
  )
}

export default Skill
