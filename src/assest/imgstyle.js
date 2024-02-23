import {styled} from 'styled-components';

export const Imgwrap=styled.div`
background:#111;
height:100vh;
.wrapper span{
    position:fixed;
    bottom:-180px;
    height:50px;
    width:50px;
    z-index:1000;
    background-color:#18191f;
    box-shadow: 0 0 50px  #0072ff,
                0 0 100px #0072ff,
                0 0 150px #0072ff,
                0 0 200px #0072ff;
    animation: animate 10s linear infinite;
}
.wrapper span:nth-child(1){
    left:60px;
    animation-delay:0.6s;
}
.wrapper span:nth-child(2){
    left:10%;
    animation-delay:3s;
    width:60px;
    height:60px;
}
.wrapper span:nth-child(3){
    left:20%;
    animation-delay:2s;
}
.wrapper span:nth-child(4){
    left:30%;
    animation-delay:5s;
    width: 80px;
    height:80px;
}
.wrapper span:nth-child(5){
    left:40%;
    animation-delay:1s;
    
}
.wrapper span:nth-child(6){
    left:50%;
    animation-delay:7s;
}
.wrapper span:nth-child(7){
    left:60%;
    animation-delay:6s;
    width: 100px;
    height:100px;
}
.wrapper span:nth-child(8){
    left:70%;
    animation-delay:8s;
   
}
.wrapper span:nth-child(9){
    left:80%;
    animation-delay:6s;
    width: 90px;
    height:90px;
}
.wrapper span:nth-child(10){
    left:90%;
    animation-delay:4s;
   
}

@keyframes animate {
    0%{
        transform:translateY(0);
        opacity: 1;
    }
    80%{
        opacity: .7;
    }
    100%{
        transform:translateY(-800px) rotate(360deg);
        opacity:0;
    }
}

`