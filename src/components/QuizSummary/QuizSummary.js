import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import CountUp from "react-countup"
import StyledQuizSummary, { AnswerSummary } from "./StyledQuizSummary"

import { faSyncAlt, faChevronDown, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import gameFinished from "../../assets/sounds/gameFinished.wav"

const QuizSummary = ({ history, isFinished, score, questions, wrongAnswersDeleted, correctAnswerSelected, hintCount }) => {
  const [toggleStats, setToggleStats] = useState(false)

  if (window.performance) {
    if (performance.navigation.type === 1) {
      history.push("/")
      window.location.reload()
    }
  }

  let answeredQuestions = null
  const answerChecker = [...questions].map(ques => ques.answers.map(ans => ans.isSelected && answeredQuestions++))

  const toggleStatsHandler = () => {
    setToggleStats(prevState => !prevState)
  }

  const homePagePushHandler = () => {
    history.push("/")
    window.location.reload()
  }

  return (
    <StyledQuizSummary toggleStats={toggleStats}>
      <audio autoPlay src={gameFinished}></audio>
      <h1 className='score'>
        {isFinished && <CountUp end={score} duration={4} />} <span>/100</span>
      </h1>

      <div className='summaryButtons'>
        <button className='summaryButton summaryChavronDownButton' onClick={toggleStatsHandler}>
          <FontAwesomeIcon className='summaryIcons summaryChavronDown' icon={faChevronDown} /> Stats
        </button>
        <button className='summaryButton summarySyncAltButton' onClick={homePagePushHandler}>
          <FontAwesomeIcon className='summaryIcons summarySyncAlt' icon={faSyncAlt} /> Play Again
        </button>
      </div>
      <CSSTransition in={toggleStats} timeout={300} mountOnEnter unmountOnExit classNames='questionsSummary-fade'>
        <div className='questionsSumamry'>
          <div className='stats'>
            <p>
              <span>Correct Answer:</span> <span>{score / 10}</span>
            </p>
            <p>
              <span>Wrong Answer:</span> <span>{10 - score / 10 - (10 - answeredQuestions)}</span>
            </p>
            <p>
              <span>Unanswered Questions:</span> <span>{10 - answeredQuestions}</span>
            </p>
            <p>
              <span>'Two' Lifeline:</span> <span>{wrongAnswersDeleted ? "1" : "-"}</span>
            </p>
            <p>
              <span>Hint Lifeline:</span> <span>{3 - hintCount === 0 ? "-" : 3 - hintCount}</span>
            </p>
            <p>
              <span>Correct Answer Lifeline:</span> <span>{correctAnswerSelected ? "1" : "-"}</span>
            </p>
          </div>
          <h1 className='questionSummaryHeader'>Questions</h1>
          {questions.map(ques => (
            <React.Fragment key={ques.id}>
              <h3 className='questionSummary'>
                {ques.id + 1}-){" "}
                {ques.question
                  .replace(/&amp;/g, "&")
                  .replace(/&#039;/g, "'")
                  .replace(/&shy;/g, " ")
                  .replace(/&quot;/g, '"')}
              </h3>
              <ul>
                {ques.answers.map(
                  ans =>
                    (ans.isSelected || ans.isCorrect) && (
                      <AnswerSummary ans={ans} key={ans.answer}>
                        {ans.answer
                          .replace(/&amp;/g, "&")
                          .replace(/&#039;/g, "'")
                          .replace(/&shy;/g, " ")
                          .replace(/&quot;/g, '"')}
                        {ans.isSelected ? ans.isCorrect ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} /> : ans.isCorrect && <FontAwesomeIcon icon={faCheck} />}
                      </AnswerSummary>
                    )
                )}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </CSSTransition>
    </StyledQuizSummary>
  )
}

export default QuizSummary
