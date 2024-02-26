import {styled} from 'styled-components'

export const ContactWrap=styled.div`
width:100%;
margin-top:70px;
padding-bottom:60px;
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
.text-input{
    display:flex;
    gap:20px;
}
.input1{
    padding:10px 4px;
    /* padding:10px 30px; */
        /* width:140px;
        margin-right:10px;
        margin-left:10px;
        margin-bottom:10px; */
        width:100%;
        margin-bottom:10px; 
        border-radius:8px;
        border:none;
    }
.input2{
    padding:10px 2px;
    /* padding:10px 33px;
    width:358px;
    margin-bottom:10px;
    border-radius:10px; */
    width:100%;
    border-radius:8px;
    margin-bottom:10px;

        border:none;
}
.text{
   
    margin-bottom:10px;
    border-radius:8px;
    width:100%;
    height:100px;
        border:none;
}
button{
    padding:10px 3px;
   
    border-radius:8px;
        border:none;
    width:100%;
}
.Iconsz{
    /* padding-top:30px;
    margin-left:30px; */
    display:flex;
    margin-top:20px;
    gap:30px;
    .icons{
        font-size:25px;
    }
}


@media screen and (max-width:478px) {
    .Form-s{
        width:100%;
    }
    .text{
        /* width:40%; */
    }
}
`