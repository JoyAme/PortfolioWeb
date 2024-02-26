import { createGlobalStyle } from "styled-components";
import { styled} from "styled-components";


export const Global=createGlobalStyle`
*{
    margin:0;
    padding:0;
    /* background:#FAFAFB; */
    box-sizing:border-box;
}


`
export const Container=styled.div`
    width:80%;
    margin:auto;
`