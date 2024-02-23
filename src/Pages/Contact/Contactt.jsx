import { Container } from "../../GlobalStyle"
import { ContactWrap } from "./Contactsyle"
import { FaTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
    <ContactWrap>
      <Container>
    <div>
      <h5>Hire Me</h5>
      <h1>Contact Me.</h1>
      <h6>Lorem, ipsum dolor sit amet 
        consectetur adipisicing elit.<br></br> Et
         quia veritatis, ut reiciendis nesciunt aliquam!</h6>
    </div>

    <div className="Hero">
        <div className="Form-s">
          <form >
            <div className="text-input">
              <input typeof="text" className="input1" placeholder="First Name"/>
              <input typeof="text" className="input1" placeholder="Last Name"/>
              
            </div>

            <input typeof="email" className="input2" placeholder="Email"/>
            <div>
            <textarea typeof="text" className="text" placeholder="How can i be of help?"/>
            </div>
            <button type="submit">Send</button>
          </form>

          <div className="Iconsz">
          <FaGithub className="icons"/>
          <AiFillLinkedin className="icons"/>
          <FaTwitter className="icons"/>
          </div>
        </div>
     
    </div>
    </Container>
    </ContactWrap>
    </>
  )
}

export default Contact
