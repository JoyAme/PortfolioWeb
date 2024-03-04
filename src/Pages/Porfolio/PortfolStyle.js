import { styled } from "styled-components";

export const PorfolioWrap=styled.div`
width:100%;
margin-top:90px;
/* display:flex;
flex-direction:column;
text-align:center; */
/* z-index:1000; */
a{
    color:black;
    text-decoration:none;
    font-size:16px;
    background:red;
    padding:2px 10px;
    border-radius:10px;
}
.git{
    color:black;
    background:none
}
.project-s{
    margin-top:40px;
    display:flex;
    flex-wrap:wrap;
    /* grid-template-columns:repeat(3,380px); */
    column-gap:20px;
    row-gap:20px;
}
.pro-info h1{
    font-size:50px;
    margin-top:10px;
}
.contain{
    padding:20px 30px;
}
img{
    width:100%;
    /* padding:20px 30px; */
    height:15vw;
    object-fit:cover;
    border-radius:10px;
    animation:move .4s linear;
    box-shadow:3px 5px 3px 5px black;
}
.title{
    margin-top:20px;
}
.Lang{
    margin-top:15px;
}
.contain{
    /* width:90%;
    text-align:center; */
}
img:hover{
    /* z-index:100; */
    animation: scale 0.4s linear;
    animation-fill-mode:forwards;
   
}

@keyframes move {
    0%{
        -webkit-transform:scale(1.1);
        transform:scale(1.1)
    }
    100%{
        -webkit-transform:scale(1.0);
        transform:scale(1.0)
    }
}

@keyframes scale {
    0%{
        -webkit-transform:scale(1.0);
        transform:scale(1.0)
    }
    100%{
        -webkit-transform:scale(1.1);
        transform:scale(1.1)
    }
}



.project{
    position:relative;
    width:22vw;
    background:whitesmoke;
    /* background:white; */
    border-radius:4px;
    /* box-shadow:3px 1px 3px 1px white; */
    height:49vh;
    color:black;
    transition: opacity 0.15s ease-in-out 0s, height 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s;
    // background: linear-gradient(to right,#66ffe700,#66ffe7,#ff25be,#9925ff,#66ffe700);
    // /* height:100%; */
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
padding-bottom:10px;

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
    justify-content:space-between;
   margin-top:5px;
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
  text-align:left;
.project-s{
    margin-top:40px;
    /* display:flex;
    flex-wrap:wrap; */
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
}
.pro-info h1{
    font-size:35px;
}
.pro-info h5{
    font-size:16px;
}
    .project{
    width:40vw;
    height:100%;
 
}
img{
    height:30vw;
}
.Lang{
    font-size:10px;
}
.title{
    font-size:12px;
}
.overlay{
    width:40vw;
   
}
.overlay h4{
    font-size:10px;
}
a{
   padding:0px 3px;
    font-size:10px;
    color:black;
}
.git{
    color:black;
    font-size:14px;
    background:none
}
}
`