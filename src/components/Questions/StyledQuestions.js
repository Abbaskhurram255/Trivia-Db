import styled, { keyframes } from "styled-components"

const StyledQuestions = styled.section`
  padding: 0 3rem 0.1rem 3rem;
  min-height: calc(100vh - 21vh);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  .questionsHeader {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.7rem;

    @media (max-width: 43.75em) {
      flex-wrap: wrap;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      top: -1rem;
      left: 0;
      width: ${({ remainedTime }) => remainedTime && `${remainedTime}%`};
      height: 5px;
      background-color: ${({ remainedTime }) => (remainedTime > 15 ? "rgba(47, 54, 64, 1)" : "rgba(194, 54, 22, 1)")};
      transition: all 0.2s;
    }

    .questionInformations {
      font-size: 1.3rem;
      letter-spacing: 0.5px;
      width: 20rem;
    }

    .remainedTime {
      font-size: 2.7rem;
      transition: all 0.2s;
      width: 5rem;
      transform: ${({ remainedTime }) => (remainedTime > 15 ? "none" : "scale(1.8) translateX(0.3rem)")};
      color: ${({ remainedTime }) => (remainedTime > 15 ? "black" : "rgba(194, 54, 22,1.0)")};
    }

    .questionJokers {
      display: flex;

      @media (max-width: 43.75em) {
        width: 100%;
        justify-content: center;
        margin-top: 2rem;
      }

      & > button {
        width: 8rem;
        padding: 0.6rem 0;
        border-radius: 5px;
        margin: 0 0.3rem;
        color: white;
        background-color: rgba(194, 54, 22, 1);
        border: none;
        font-family: inherit;
        cursor: pointer;
        transition: all 0.1s;

        &:hover {
          transform: translateY(-1px);
        }

        &:active {
          transform: translateY(-0.5px);
        }
        &:focus {
          outline: none;
        }
        &:disabled {
          opacity: 0.4;
          transform: none;
          cursor: not-allowed;
        }
        & > svg {
          margin-right: 0.2rem;
        }

        @media (max-width: 43.75em) {
          &:hover {
            transform: none;
          }
        }

        @media (hover: none) {
          &:hover {
            transform: none;
          }
        }
      }

      .hint {
        position: relative;
        text-align: left;
        padding-left: 1rem;
      }

      .hintCount {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        font-size: 1.2rem;
        display: inline-block;
        text-align: center;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        color: rgba(194, 54, 22, 1);
        background-color: rgba(251, 197, 49, 1);
        font-weight: bold;
      }
    }
  }

  .questionContent {
    position: relative;

    .question {
      font-size: 2.3rem;
      font-weight: 500;
      margin: 0.5rem 2rem;
      min-height: 6rem;
      z-index: 2;
    }

    &::before {
      content: open-quote;
      top: -3rem;
      left: 2rem;
      color: #192a56;
      font-size: 17rem;
      position: absolute;
      font-family: sans-serif;
      z-index: 1;
      opacity: 0.1;
    }
  }

  .questionButtons {
    margin-top: auto;
    display: flex;
    justify-content: center;

    & > button {
      width: 19%;
      padding: 0.8rem;
      margin: 0.8rem;
      font-size: 1.6rem;
      font-family: inherit;
      color: rgba(47, 54, 64, 1);
      font-weight: bold;
      background-color: rgba(251, 197, 49, 1);
      border: 2px solid rgba(47, 54, 64, 1);
      box-shadow: 0 0.75rem 1.5rem rgba(47, 54, 64, 1);
      border-radius: 3px;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.1s;

      &:hover {
        transform: translateY(-3px);
        background-color: rgba(251, 197, 49, 0.8);
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(47, 54, 64, 1);
        background-color: rgba(251, 197, 49, 0.6);
      }

      &:focus {
        outline: none;
      }

      &:disabled {
        opacity: 0.5;
        transform: none;
        cursor: not-allowed;
      }

      @media (max-width: 43.75em) {
        width: 28.5%;
        &:hover {
          transform: none;
        }
      }

      @media (hover: none) {
        &:hover {
          transform: none;
        }
      }
    }
  }

  .questionFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
  }

  .instructions {
    text-align: left;
    font-size: 0.9rem;
  }

  .currentQuestionNumber {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(2px) brightness(80%);
    color: rgba(25, 42, 86, 1);
    z-index: 5;

    .modalContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 80vh;
      width: 75%;
      background-color: rgba(251, 197, 49, 1);
    }

    .modalTitle {
      font-size: 4rem;
    }

    .modalFinishButton {
      width: 40%;
      padding: 0.8rem;
      margin: 2rem 0.8rem;
      font-size: 1.6rem;
      font-family: inherit;
      color: rgba(47, 54, 64, 1);
      font-weight: bold;
      background-color: rgba(251, 197, 49, 1);
      border: 2px solid rgba(47, 54, 64, 1);
      box-shadow: 0 0.75rem 1.5rem rgba(47, 54, 64, 1);
      border-radius: 3px;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.1s;

      &:hover {
        transform: translateY(-3px);
        background-color: rgba(251, 197, 49, 0.8);
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(47, 54, 64, 1);
        background-color: rgba(251, 197, 49, 0.6);
      }

      &:focus {
        outline: none;
      }

      @media (max-width: 43.75em) {
        width: 70%;
      }
    }
  }

  .answerList {
    width: 70%;
    margin: 0 auto;
    padding: 0 3rem;
    overflow: hidden;

    @media (max-width: 43.75em) {
      width: 90%;
      padding: 0 1rem;
    }
  }
`

export const Answer1Animation = keyframes`
  from {opacity:0.5; transform: translateX(-3rem)}
  to {opacity: 1; transform: translateX(0);}
`
export const Answer2Animation = keyframes`
  from {opacity:0.5; transform: translateX(-6rem)}
  to {opacity: 1; transform: translateX(0);}
`
export const Answer3Animation = keyframes`
  from {opacity:0.5; transform: translateX(-9rem)}
  to {opacity: 1; transform: translateX(0);}
`
export const Answer4Animation = keyframes`
  from {opacity:0.5; transform: translateX(-12rem)}
  to {opacity: 1; transform: translateX(0);}
`

export const Answers = styled.li`
  position: relative;
  list-style-type: none;
  font-size: 1.5rem;
  color: ${({ isSelected }) => (isSelected ? "white" : "rgba(25, 42, 86, 1)")};
  background-color: rgba(251, 197, 49, 1);
  padding: 1.3rem 0;

  margin: 1rem auto;
  border-radius: 3px;
  border: 1px solid rgba(25, 42, 86, 1);
  cursor: pointer;
  z-index: 1;
  transition: all 0.6s;

  &:nth-child(1) {
    animation: ${Answer1Animation} 0.2s;
  }
  &:nth-child(2) {
    animation: ${Answer2Animation} 0.4s;
  }
  &:nth-child(3) {
    animation: ${Answer3Animation} 0.6s;
  }
  &:nth-child(4) {
    animation: ${Answer4Animation} 0.8s;
  }

  &:hover {
    color: white;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ isSelected }) => (isSelected ? "100%" : "0.5rem")};
    z-index: -1;
    background-color: rgba(25, 42, 86, 1);
    transform: ${({ isSelected }) => (isSelected ? "scaleY(1)" : "scaleY(0)")};
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }
`
export default StyledQuestions
