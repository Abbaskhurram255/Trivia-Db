import styled from "styled-components"
import error from "../../../assets/Images/404.jpg"

const StyledError = styled.div`
  width: 90%;
  min-height: 90vh;
  margin: -3rem auto;
  background-color: rgba(245, 246, 250, 1);

  .errorContent {
    padding: 2rem 0;
    margin-left: 2rem;
    .errorCode {
      font-size: 4rem;
      color: #939393;
      font-weight: bold;
    }

    & > h1 {
      font-size: 3rem;
      margin: 2rem 0;
    }

    & > h2 {
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
  .errorImage {
    background-image: url(${error});
    background-size: cover;
    background-position: top;
    width: 100%;
    min-height: 90vh;
  }
`
export default StyledError
