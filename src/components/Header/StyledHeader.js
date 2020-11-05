import styled, { keyframes } from "styled-components"

export const Rotate = keyframes`
  from{transform: rotate(0)}
  to{ transform: rotate(360deg)}
`
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 12rem;
  padding-top: 2.6rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300%;
    background-color: rgba(25, 42, 86, 1);
    border-radius: 34%;
    transform: translateY(-70%);
    box-shadow: 0 0.75rem 1.5rem rgba(25, 42, 86, 1);
  }

  & > svg {
    color: #dfe6e9;
    font-size: 4rem;
    margin-right: 2rem;
  }

  & > svg:last-child {
    font-size: 2rem;
    font-weight: 300;
    animation: ${Rotate} 6s infinite linear;
  }

  & > h1 {
    font-size: 4rem;
    color: #dfe6e9;
    letter-spacing: 2px;
    font-weight: 300;
    margin-right: 0.4rem;
  }

  & > * {
    z-index: 1;
  }
`

export default StyledHeader
