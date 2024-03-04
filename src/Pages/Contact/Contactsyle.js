import {styled} from 'styled-components'

export const ContactWrap=styled.div`
width:100%;
margin-top:70px;
font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
.Form-s{
   padding-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
   /* text-align:center;
   background:green; */
   width:40%;
   margin:auto;
}
.contact-info{
    margin-top:120px;
}
.contact-info h1{
    margin-top:10px;
    font-size:50px;
}
.contact-info h6{
    margin-top:30px;
    font-size:16px;
    width:250px;
}
input{
    background:rgba(255,255,255,0);
   
}
.text-input{
    display:flex;
    gap:20px;
}
.input1{
    padding:15px 4px;
    /* padding:10px 30px; */
        /* width:140px;
        margin-right:10px;
        margin-left:10px;
        margin-bottom:10px; */
        width:100%;
        margin-bottom:10px; 
        border-radius:8px;
        border:1px solid  #B5C5C6 ;
    }
.input2{
    padding:15px 2px;
    /* padding:10px 33px;
    width:358px;
    margin-bottom:10px;
    border-radius:10px; */
    width:100%;
    border-radius:6px;
    margin-bottom:10px;

    border:1px solid  #B5C5C6 ;
}
.text{
   
    margin-bottom:10px;
    border-radius:8px;
    width:100%;
    height:100px;
    background:none;
    border:1px solid  #B5C5C6 ;
}
::placeholder{
    font-size:14px;
    padding:5px;
    color:white;
}
button{
    padding:15px 3px;
   font-size:16px;
    border-radius:8px;
    background:none;
    border:1px solid  #B5C5C6 ;
    width:100%;
    color:white;
}
.Iconsz{
    /* padding-top:30px;
    margin-left:30px; */
    display:flex;
    margin-top:20px;
    align-items:center;
    gap:30px;
    .icons{
        color:#FCA61F;
        cursor: pointer;
        font-size:25px;
    }
}


@media screen and (max-width:478px) {
    .Form-s{
        width:100%;
    }
    .contact-info h6{
        font-size:12px;
    }
    .text{
        /* width:40%; */
    }
}
`