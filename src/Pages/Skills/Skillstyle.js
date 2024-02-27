import { styled } from "styled-components";

export const SkillWrap=styled.div  `

width:100%;
margin-top:120px;
padding-bottom:80px;
font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
img{
    width:35px;
    object-fit:contain;
}
.info-skill{
    display:flex;
    /* gap:20px; */
    align-items:center;
    position:relative;
    justify-content:space-around;
}
.skill h1{
    font-size:50px;
    margin-top:10px;
    margin-bottom:10px;
}
span{
    padding:0 70px;
    border-radius:999px;
    height:40%;
    /* width:100%; */
    background:black;
}
.left-side{
    /* position:fixed; */
       /* flex:0.3; */

 
 
}
.right-side{
   /* flex:0.3; */
}

.Row-1{
    display:flex;
    gap:20px;
}

.tech h1{
    margin-top:20px;
}

.icons{
  display:flex;
  align-items:center;
    background:white;
    color:black;
    /* flex:0.6; */
   margin-bottom:40px;
    cursor: pointer;
    //    height:300px;
    width:100%;
     height:14vw; 
    box-shadow:3px 3px 3px 3px cyan;
    border-radius:19px;
    padding:20px 40px;
    .icon-body{
        width:50%;
        margin:auto;
        text-align:center;
    }
    .icons-name{
        font-size:14px;
    }
    .icons-house{
        font-size:38px;
    }

}


.Row-3{
    display:grid;
    grid-template-columns:repeat(2,260px);
    row-gap:40px;
    margin-top:50px;
    
}
.skill-type{
   display:flex;
   gap:10px;
  
   align-items:center;
   .skill-type h4{
        font-size:20px;
   }
}


@media screen and (max-width:478px){
    .info-skill{
    display:flex;
    flex-direction:column;
    gap:40px;
    align-items:flex-start;
    
}

.skill h1{
    font-size:25px;
}
.lorem{
    font-size:12px;
}
.left-side{
    position:relative;
   
    /* left:30px; */
    /* right:860px; */
}
.Row-1{
   display:flex;
   flex-direction:column;
   row-gap:20px;
}
.Row-3{
    display:grid;
    grid-template-columns:repeat(2,200px);
   
    
}
.icons{
    width:90%;
    height:45vw; 
  /* flex:0.4;
  flex-grow:0; */
}
}

`
