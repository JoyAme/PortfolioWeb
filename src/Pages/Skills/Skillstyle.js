import { styled } from "styled-components";

export const SkillWrap=styled.div  `

width:100%;
margin-top:120px;
img{
    width:35px;
    object-fit:contain;
}
.info-skill{
    display:flex;
    gap:40px;
    align-items:center;
    position:relative;
    justify-content:space-around;
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
       flex:0.4;

 
 
}
.right-side{
   flex:0.3;
}

.Row-1{
    display:flex;
    gap:20px;
}



.icons{
    translate:scale(0.6);
    background:white;
    color:black;
    flex:0.4;
    cursor: pointer;
//    width:200px;
//    height:300px;
    //  height:40vw; 
    box-shadow:3px 3px 3px 3px cyan;
    border-radius:19px;
    padding:20px 10px;
    .icon-body{
        width:50%;
        margin:auto;
        text-align:center;
    }
    .icons-name{
        font-size:14px;
    }
    .icons-house{
        font-size:35px;
    }

}


.Row-3{
    display:grid;
    grid-template-columns:repeat(2,260px);
   
    
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
    display:block;
    
}
.left-side{
    position:relative;
    left:30px;
    /* right:860px; */
}
.Row-1{
   display:flex;
   flex-direction:column;
   row-gap:40px;
}
.Row-3{
    display:grid;
    grid-template-columns:repeat(2,200px);
   
    
}
.icons{
  flex:0.4;
  flex-grow:0;
}
}

`
