import { Container } from "../../GlobalStyle"
import { PorfolioWrap } from "./PortfolStyle"
// import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { BackGround } from "../../assest/Data";


const Portfo = () => {
  return (
    <>
    <PorfolioWrap>
    <Container>
    <div className="pro-info">
        <h5> see what i have been upto.</h5>
       <h1>MY PROJECTS..</h1>
    </div>

    <div className="project-s">
      
      {/* <div className="project">
        <div >
          <img src={Screen} alt='name'/>
        </div>
        <div className="overlay">

        <h4>nameopen</h4>

          <div className="github">
            <div><FaLocationArrow className="arrow"/></div>
         <h6>Github</h6>
         
          </div>
          
          </div>
      </div> */}




{
 BackGround.map((map,id)=>{
const {img,title,link,GitLink,language}=map
 return(
<div className="project" key={id}>
        <div className="contain">
          <img src={img} alt='name'/>
        

 {/* {
  Overlay.map((map,id)=>{

    const {name}= map;

    return( */}
        {/* <div className="overlay"> */}
        <h5 className="Lang">{language}</h5>
          <div className="github">
            <div>
              <a href={link} target="_blank" rel="noreferrer">Live-Link</a>
              {/* <h6 className="arrow">Live-link{link}</h6> */}
              </div>
          <a className='git' href={GitLink} target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          <h4 className="title">{title}</h4>
          </div>
          {/* </div> */}
           {/* )
          })
} */}
       
  </div>


      )

      
       

})
}


    </div>
    </Container>
    </PorfolioWrap>
    </>
  )
}

export default Portfo
