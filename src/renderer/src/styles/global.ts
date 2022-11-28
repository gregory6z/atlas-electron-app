import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box; 
  }

 
  body{
    background: ${(props) => props.theme["blue-300"]};
  
  }

  
   /* body,input, textarea, button{
    font-family: "Nunito" ;
    font-size: 1rem;
    font-weight:400;
  } */

`
