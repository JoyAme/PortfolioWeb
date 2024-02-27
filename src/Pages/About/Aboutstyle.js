import {styled} from 'styled-components'

export const AboutWrap=styled.div`
width:100%;
margin-top:100px;
/* color:white; */


.intro{

    h5{
        text-transform:uppercase;
        font-size:40px;
    }
    p{
        font-size:18px;
        margin-top:10px;
        width:480px;
    }
}


.images{
    text-align:right;
 margin-top:50px;
    /* flex:0.4; */
 
  /* flex:0.6;
  text
  position:relative; */
  position: relative;
}
.images h5{
  background:white;
  padding:20px 15px;
  font-size:13px;
  position:absolute;
  border-radius:7px;
  color:black;
  /* border:5px solid #FCA61F; */
  box-shadow: 2px 5px 0 3px #FCA61F;
  top:0;
  right:0;
}
.emoji{
  width:90px;
  border-radius:999px;
  position:absolute;
  top:0;
  right:40%;
  /* box-shadow:0 7px 0 0px black; */
}
.curve{
 width:40%;
 margin-top:30px;
  object-fit:contain;
}
.blur{

}
@media screen and (max-width:478px) {
    .intro{

h5{
    
    font-size:20px;
}
p{
    font-size:14px;
   width:300px;
}


}
.images{
    text-align:center;
}
.images h5{
  padding:5px 10px;
  font-size:10px;
 
}
.emoji{
    width:40px;
    position: relative;
}
}
`