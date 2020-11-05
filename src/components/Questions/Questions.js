import React from "react"

import StyledQuestions, { Answers } from "./StyledQuestions"
import { faPooStorm, faLightbulb, faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import jokerUsed from "../../assets/sounds/joker.wav"
import gameStarted from "../../assets/sounds/gameStarted.wav"

const Question = ({
  ques,
  nextQuestion,
  prevQuestion,
  selectAnswerHandler,
  finishQuiz,
  remainedTime,
  deleteTwoWrongAnswersHandler,
  wrongAnswersDeleted,
  hintHandler,
  hintCount,
  correctAnswerHandler,
  correctAnswerSelected,
  sound,
  history,
  currentQuestion,
  isTimeFinished
}) => {
  if (window.performance) {
    if (performance.navigation.type === 1) {
      history.push("/")
      window.location.reload()
    }
  }
  return (
    <StyledQuestions remainedTime={remainedTime * 1.666666666} ques={ques}>
      <audio autoPlay src={gameStarted}></audio>
      {sound && remainedTime <= 59 && <audio autoPlay src={jokerUsed}></audio>}
      {isTimeFinished && (
        <div className='modal'>
          <div className='modalContent'>
            <h1 className='modalTitle'>Time Finished!</h1>
            <button className='modalFinishButton' onClick={() => finishQuiz(history)}>
              See Your Result
            </button>
          </div>
        </div>
      )}
      <div className='questionsHeader'>
        <div className='remainedTime'>{remainedTime}</div>
        <div className='questionInformations'>
          <div className='questionCategory'>Category: {ques.category.includes(":") ? ques.category.split(":")[1] : ques.category}</div>
          <div className='questionsDifficulty'>Difficulty: {ques.difficulty.toUpperCase().slice(0, 1) + ques.difficulty.slice(1)}</div>
        </div>
        <div className='questionJokers'>
          <button className='fiftyfifty' onClick={() => deleteTwoWrongAnswersHandler(ques.id)} disabled={ques.answers.length < 2 || wrongAnswersDeleted}>
            <FontAwesomeIcon icon={faPooStorm} /> Two
          </button>
          <button className='hint' onClick={() => hintHandler(ques.id)} disabled={ques.answers.length < 2 || hintCount < 1}>
            <FontAwesomeIcon icon={faLightbulb} /> Hint <span className='hintCount'>{hintCount}</span>
          </button>
          <button className='selectCorrectAnswer' onClick={() => correctAnswerHandler(ques.id)} disabled={correctAnswerSelected}>
            <FontAwesomeIcon icon={faClipboardCheck} /> Correct
          </button>
        </div>
      </div>

      <div className='questionContent'>
        <div className='question'>
          {ques.question
            .replace(/&amp;/g, "&")
            .replace(/&#039;/g, "'")
            .replace(/&shy;/g, " ")
            .replace(/&quot;/g, '"')}
        </div>
        <div className='answers'>
          <ul className='answerList'>
            {ques.answers.map(ans => (
              <Answers className='answer' key={ans.answer} isSelected={ans.isSelected} onClick={() => selectAnswerHandler(ques.id, ans.id)}>
                {ans.answer
                  .replace(/&amp;/g, "&")
                  .replace(/&#039;/g, "'")
                  .replace(/&shy;/g, " ")
                  .replace(/&quot;/g, '"')}
              </Answers>
            ))}
          </ul>
        </div>
      </div>

      <div className='questionButtons'>
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={nextQuestion} disabled={currentQuestion === 9}>
          Next
        </button>
        <button onClick={() => finishQuiz(history)}>Finish</button>
      </div>
      <div className='questionFooter'>
        <div className='instructions'>
          <p>*'Two' button removes 2 wrong answers. You have one chance.</p>
          <p>*'Hint' button removes 1 wrong answer. You have three chances.</p>
          <p>*'Correct' button selects correct answer. you have one chance.</p>
        </div>
        <div className='currentQuestionNumber'>{currentQuestion + 1}/10</div>
      </div>
    </StyledQuestions>
  )
}

export default Question
