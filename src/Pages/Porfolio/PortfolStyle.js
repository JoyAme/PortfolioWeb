import { styled } from "styled-components";

export const PorfolioWrap=styled.div`
width:100%;
margin-top:90px;
/* z-index:1000; */
.project-s{
    margin-top:40px;
    display:flex;
    flex-wrap:wrap;
    /* grid-template-columns:repeat(3,380px); */
    column-gap:20px;
    row-gap:20px;
}
img{
    width:100%;
    height:15vw;
    object-fit:cover;
    border-radius:12px;
}
.project{
    position:relative;
    width:23vw;
    /* height:100%; */
    /* display:flex;
    justify-content:center; */
}
.overlay{
  background:rgb(0, 0, 0,0.4);
  width:23vw;
  height:100%;
  position:absolute;
  top:0;
  color:white;
  display:flex;
  align-items:flex-end;
justify-content:space-around;
  left:0;
  right:0;
  bottom:0;
  border-radius:19px;
 transition:0.6s;
 opacity:0;


 .arrow{
    background-color:red;
    color:white;
    padding:10px;
    border-radius:999px;
 }
}
.github{
    display:flex;
    cursor: pointer;
    gap:20px;
    align-items:center;
     h6{
        background:transparent;
    color:white;
    padding: 2px 10px;
    border-radius:999px;
    }
  }
.overlay:hover{
    opacity:1;
}





/* mobile Responsiveness */
@media screen and (max-width:478px){
.project-s{
    margin-top:40px;
    display:grid;
    grid-template-columns:repeat(2,180px);
    gap:20px;
}
    .project{
    width:40vw;
    height:100%;
 
}
.overlay{
    width:40vw;
   
}
}
`