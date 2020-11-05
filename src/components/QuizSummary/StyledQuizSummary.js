import styled from "styled-components"

const StyledQuizSummary = styled.section`
  .score {
    text-align: center;

    font-size: 20rem;
    color: rgba(194, 54, 22, 1);

    & > span:not(:first-child) {
      font-size: 2rem;
      margin-left: -5rem;
    }
  }
  .summaryButtons {
    text-align: center;

    .summaryButton {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 1rem;
      width: 15rem;
      font-family: inherit;
      font-size: 1.6rem;
      letter-spacing: 1px;
      margin: 0 1rem;
      color: white;
      background-color: rgba(25, 42, 86, 1);
      border: none;
      box-shadow: 0 0.5rem 1rem rgba(25, 42, 86, 1);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 0.8;
      }

      &:focus {
        outline: none;
      }
    }

    .summaryIcons {
      margin-right: 1rem;
      font-size: 2rem;
      transition: all 0.6s;
    }

    .summaryChavronDown {
      transform: ${({ toggleStats }) => (toggleStats ? "rotate(180deg)" : "rotate(0)")};
    }
  }
  .summarySyncAltButton:hover .summarySyncAlt {
    transform: rotate(360deg);
  }

  .questionsSumamry {
    text-align: left;
    padding: 2rem;
    backface-visibility: hidden;
  }

  .questionsSummary-fade-enter-active {
    opacity: 0;
    transform: scale(0.9);
  }
  .questionsSummary-fade-enter-done {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.3s;
  }
  .questionsSummary-fade-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s;
  }

  .questionSummary {
    font-size: 1.8rem;
    font-weight: 500;
    padding-top: 0.6rem;
    border-top: 2px solid rgba(25, 42, 86, 1);
    &:not(:first-child) {
      margin-bottom: 1rem;
    }
  }

  .questionSummaryHeader {
    font-size: 2rem;
  }

  .stats {
    width: 24rem;
    font-size: 1.6rem;
    margin: 1rem auto;

    & > p {
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
      border-bottom: 1px solid rgba(47, 54, 64, 0.5);
    }
  }
`
export const AnswerSummary = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 1.6rem;
  margin-left: 0.3rem;
  padding: 0.7rem 1rem;
  width: 40rem;
  background-color: ${props => (props.ans.isSelected ? (props.ans.isCorrect ? "rgba(251, 197, 49,1.0)" : "rgba(194, 54, 22,1.0)") : props.ans.isCorrect && "rgba(25, 42, 86,1.0)")};
  color: ${props => (props.ans.isSelected ? (props.ans.isCorrect ? "black" : "white") : props.ans.isCorrect && "white")};

  &:last-child {
    margin-bottom: 1rem;
  }
`

export default StyledQuizSummary
