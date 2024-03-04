import { styled} from "styled-components";

export const Navbar=styled.div`
font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
width:100%;
position:fixed;
top:0;
left:0;
right:0;
z-index: 1000;
padding:20px 0px;
.Ja{
    color:white;
    font-size:25px;
        text-decoration:none;
}
.navv{
    display:flex;
    justify-content:space-around;
    align-items:center;
    /* background:white; */
    /* border-radius:19px; */
   
}

.nav{
    display:flex;
    justify-content:space-between;
    gap:40px;
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
.hamburger{
    display:none;
}

@media screen and (max-width:478px) {
    /* position: relative; */
    .nav{
        .btn{
            
            a{
                color:grey;
                font-size:28px;
            }
    
} 
    }

 

}

@media screen and (max-width:768px) {
    .navv{
        align-items:flex-start;
        justify-content:space-between
    }
    .hamburger{
    display:block;
    font-size:45px;
    position:absolute;
    right:19px;
    color:white;
    cursor: pointer;
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
.navv{
    text-align:start;
}
.nav{
        display:flex;
        

        flex-direction:column;
       position:absolute;
       right:30px;
       top:40px;
        background: #F0F0F5;
        padding:20px 25px;
        border-radius:19px;
        gap:20px;
        margin-top:40px;
        animation: scale 0.4s linear;
    animation-fill-mode:forwards;
        display:none;
            a{
                font-size:16px;
            }
            .btn{
                background:none;
              margin-top:10px;
                a{
                    font-size:16px;
                }
            }
        ul{
            display:flex;
        flex-direction:column;
       gap:30px;
      
    }
    }
.show{
display:block;
    
} 
/* .link:hover{
        color:black;
    } */

}
`