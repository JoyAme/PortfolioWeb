import { Container } from "../../GlobalStyle"
import { PorfolioWrap } from "./PortfolStyle"
import { FaLocationArrow } from "react-icons/fa6";

import { BackGround, Data, Overlay } from "../../assest/Data";


const Portfo = () => {
  return (
    <>
    <PorfolioWrap>
    <Container>
    <div>
        <h5>what i have been upto.</h5>
       <h1>MY PROJECTS</h1>
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
const {img}=map
 return(
<div className="project" key={id}>
        <div >
          <img src={img} alt='name'/>
        </div>

{
  Overlay.map((map,id)=>{
    const {name}=map
    return(
        <div className="overlay" key={id}>
        <h4>{name}</h4>
          <div className="github">
            <div><FaLocationArrow className="arrow"/></div>
          <h6>Github</h6>
          </div>
          
          </div>
           )
          })
}
       
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
