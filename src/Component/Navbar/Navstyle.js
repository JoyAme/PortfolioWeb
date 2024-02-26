import { styled} from "styled-components";

export const Navbar=styled.div`
width:100%;
position:fixed;
top:0;
left:0;
right:0;
.nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
   
    ul{
       display:flex;
       gap:30px;
       li{
        list-style:none;
       }
      
    }
    a{
        text-decoration:none;
        font-size:20px;
        color:grey;
       }
       .btn{
        border-radius:19px;
        background:#F3BE61;
       /* box-shadow:  2px 10px rgb(243, 222, 186 ) ; */
        border:none;
        padding:5px 10px;
        color:white;
        a{
            color:white;
            font-size:18px;
        }
       }
}

`