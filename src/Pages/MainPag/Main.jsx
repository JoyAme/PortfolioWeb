
// import back from '../../assest/images/black.png'
// import emoji from '../../assest/images/emoji.png'
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MainWrap } from './Mainstyle';
import { Container } from "../../GlobalStyle";



const Main = () => {
  return (
    <div>
       <>
 <MainWrap>
  <Container>
 <div className='Row'>
  <div className='info'>
    <div>
    <h1>Hi I'm Joy Ame</h1>
    <hr className='line'></hr>
    </div>
   <div className='info-joy'>
    <h3>I build  creative and Responsive user interface<br></br> with seamless functionalities  </h3>
    <h4>I bring to life  beautiful and interactive website ensuring wonderful
       user experience and that it's optimize for various device. and users.give me 
       an opportunity to embark on this journey with you as we redifine user website experience </h4>
       <hr className='line1'></hr>
       </div>
    <div className='link'>
    <Link to='/'>See portfolio</Link>
    <FaArrowRightLong className='arrow-right'/>
    </div>

    <div className='Icon'>
    <FaGithub className='icons'/>
    <RiLinkedinFill  className='icons'/>
    <FaInstagram className='icons'/>
    </div>
  </div>


  {/* <div className='images'>
    <img src={emoji} alt='emoji' className='emoji'/>
    <div className='blur'></div>
    <img src={back} alt='back'className='curve'/>
    <h5>Webdeveloper</h5>
  </div> */}
 </div>
  </Container>
 </MainWrap>
 
 </>
    </div>
  )
}

export default Main
