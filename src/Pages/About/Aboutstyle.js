import {styled} from 'styled-components'


export const AboutWrap=styled.div`
   width:100%;
   margin-top:100px;
span{
 color:#FCA61F;
 font-size:45px;
}
.Row{
  display:flex;
  align-items:center;
  gap:30px;
}
.info{
  flex:0.6;
}
.images{
  flex:0.6;
  position:relative;
}
.images h5{
  background:white;
  padding:25px 20px;
  font-size:15px;
  position:absolute;
  border-radius:7px;
  color:black;
  /* border:5px solid #FCA61F; */
  box-shadow: 2px 5px 0 3px #FCA61F;
  top:0;
  right:50px;
}
.Icon{
  display:flex;
  align-items:center;
  gap:10px;
  margin-top:120px;
}
.icons{
  font-size:40px;
  color:#FCA61F;

}
.blur {
  background: #edd0ff; // Make sure this color has an opacity of less than 1
 filter: blur(212px); // This be the blur
  height: 14rem;
  width: 22rem;
  position:absolute;
  border-radius:50%;
z-index:-9px;
  
}
.emoji{
  width:90px;
  border-radius:999px;
  position:absolute;
  top:0;
  left:0;
  /* box-shadow:0 7px 0 0px black; */
}
.curve{
  width:100%;
  object-fit:cover;
}
.info h1{
  width:190px;
  font-size:40px;
}
.btn{
  border-radius:19px;
  background:#FCA61F;
  color:white;
  border:none;
  padding:8px 20px;
}
@media screen and (max-width:478px){
  .Row{
    display:flex;
    flex-direction:column;
    gap:40px;
  }
  .curve{
  width:50vh; /* object-fit:contain; */
}
.emoji{
  width:40px;
  border-radius:999px;
  position:absolute;
  top:0;
  left:0;
  /* box-shadow:0 7px 0 0px black; */
}
.images h5{
  background:white;
  padding:10px 20px;
  font-size:12px;
  color:black;
  position:absolute;
  border-radius:7px;
  /* border:5px solid #FCA61F; */
  box-shadow: 2px 5px 0 3px #FCA61F;
  top:0;
  right:0;
}
}
`