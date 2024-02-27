import {styled} from 'styled-components'


export const MainWrap=styled.div`
   width:100%;
   margin-top:100px;
   font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
 
  a{
    color:white;

  }
  hr.line{
    width:40%;
    margin-bottom:20px;
    height:1px;
    border:none;
    margin:auto;
    background: linear-gradient(to right,#66ffe700,#66ffe7,#ff25be,#9925ff,#66ffe700);
   }
   hr.line1{
    margin-top:50px;
    width:50%;
    height:1px;
    border:none;
    margin:auto;
    background: linear-gradient(to right,#66ffe700,#66ffe7,#ff25be,#9925ff,#66ffe700);
   }
span{
 color:#FCA61F;
 font-size:45px;
}

.link{
  margin-top:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
  a{
    font-size:20px;
  }
  .arrow-right{
    font-size:16px;
  }
}
.Row{
  display:flex;
  align-items:center;
  gap:30px;
}
.info{
  /* flex:0.6; */
text-align:center;
margin:auto;
}
.info-joy{
  margin-top:30px;
  
h4{
  width:450px;
  margin-bottom:20px;
  font-size:14px;
}
h3{
  font-size:18px;
  margin-bottom:10px;
}
}

.Icon{
  display:flex;
  justify-content:center;
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

.info h1{
 
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
  .info-joy{

   h3{
  
  font-size:16px;
}
h4{
 font-size:14px;
}

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
.icons{
  font-size:20px;
  color:#FCA61F;

}
}
`