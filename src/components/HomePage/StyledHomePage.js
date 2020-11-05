import styled, { keyframes, css } from "styled-components"

const StyledHomePage = styled.main`
  color: red;

  .optionHeader {
    font-size: 1.8rem;
    color: rgba(53, 59, 72, 1);
    width: 95%;
    text-align: center;
    border-bottom: 2px solid rgba(53, 59, 72, 1);
    line-height: 0.1rem;
    margin: 2rem auto;

    & > span {
      background: white;
      padding: 0 1rem;
      border: 2px solid rgba(53, 59, 72, 1);
    }
  }

  & > div {
    text-align: center;
  }

  & > div > button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 1rem 0;
    margin: 1rem;
    border: 1px solid rgba(39, 60, 117, 1);
    box-shadow: 0 0.6rem 1.2rem rgba(39, 60, 117, 0.6);
    font-family: "Fredoka One", cursive;
    font-size: 1.3rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
      color: white;
      background-color: rgba(39, 60, 117, 1);
    }

    &:focus {
      outline: none;
    }

    & > svg {
      font-size: 3.2rem;
      margin-bottom: 1.4rem;
    }
  }

  .userInformation {
    display: inline-block;
    width: 60%;
    height: 5rem;
    text-align: left;
    padding: 1.3rem;
    color: black;
    background-color: white;
    letter-spacing: 1px;
    box-shadow: 0 0.4rem 0.8rem rgba(53, 59, 72, 0.4);
    font-size: 1.9rem;
    font-weight: bold;

    & > svg {
      color: rgba(39, 60, 117, 1);
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  .inputForm {
    text-align: center;
    padding: 3rem;
    position: relative;
  }

  .input {
    width: 60%;
    display: inline-block;
    height: 5rem;
    padding: 1.3rem;
    margin-left: 2rem;
    border: none;
    box-shadow: 0 0.4rem 0.8rem rgba(53, 59, 72, 0.3);
    font-family: inherit;
    font-size: 1.6rem;
    &:focus {
      outline: none;
    }
  }

  .input:placeholder-shown + .inputLabel {
    top: 43%;
    visibility: hidden;
    opacity: 0;
  }

  .inputLabel {
    position: absolute;
    top: 10%;
    left: 17%;
    font-size: 1.6rem;
    color: black;
    visibility: visible;
    opacity: 1;
    transition: all 0.2s;

    @media (max-width: 38em) {
      left: 16%;
    }
  }

  .inputButton {
    height: 5.1rem;
    border: none;
    color: white;
    background-color: rgba(39, 60, 117, 1);
    clip-path: polygon(100% 0, 100% 38%, 100% 150%, 0 100%, 26% 0);
    box-shadow: 0 0.4rem 0.8rem rgba(53, 59, 72, 0.3);
    padding: 1.3rem 2rem 1.3rem 4rem;
    transform: translateX(-4rem);
    letter-spacing: 2px;
    font-size: 1.7rem;
    font-family: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      background-color: rgba(194, 54, 22, 1);
    }
  }

  .quizStartContent {
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: rgba(25, 42, 86, 1);
    font-size: 2.5rem;

    .quizStartCountDown {
      font-size: 20rem;
      font-weight: bold;
      margin-top: 2rem;
    }
    .quizStartReady {
      font-size: 5rem;
      font-weight: bold;
      margin-top: 8rem;
    }
  }
`

export const SelectAnimation = keyframes`
  0% {transform: scale(1)}
  45% {transform: scale(1.15)}
  100% {transform: scale(1.075)}
`

export const CategorySelect = styled.button`
  color: ${({ category, categoryNum }) => (category === categoryNum ? "white" : "rgba(25, 42, 86, 1)")};
  background-color: ${({ category, categoryNum }) => (category === categoryNum ? "rgba(39, 60, 117,1.0)" : "rgba(251, 197, 49,1.0)")};
  animation: ${({ category, categoryNum }) =>
    category === categoryNum &&
    css`
      ${SelectAnimation} .3s linear
    `};
  animation-fill-mode: forwards;
`

export const DifficultySelect = styled.button`
  color: ${({ difficulty, difficultyLevel }) => (difficulty === difficultyLevel ? "white" : "rgba(25, 42, 86, 1)")};
  background-color: ${({ difficulty, difficultyLevel }) => (difficulty === difficultyLevel ? "rgba(39, 60, 117,1.0)" : "rgba(251, 197, 49,1.0)")};
  animation: ${({ difficulty, difficultyLevel }) =>
    difficulty === difficultyLevel &&
    css`
      ${SelectAnimation} .3s linear
    `};
  animation-fill-mode: forwards;
`

export default StyledHomePage
