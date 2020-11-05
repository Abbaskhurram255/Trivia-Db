import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media (max-width: 55em){
      font-size: 54%;
    }
    
  }
  body {
    font-family: "Rubik", sans-serif;
  }
`
const StyledApp = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, white, rgba(220, 221, 225, 1));
  box-shadow: 0 1rem 2rem rgba(25, 42, 86, 1);
`

export default StyledApp
