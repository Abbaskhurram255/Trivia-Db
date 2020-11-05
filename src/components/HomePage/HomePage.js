import React from "react"

import { faBook, faGlobeAmericas, faHourglassStart, faLaptopCode, faFilm, faVolleyballBall, faBug, faEgg, faBalanceScale, faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StyledHomePage, { CategorySelect, DifficultySelect } from "./StyledHomePage"

import ping from "../../assets/sounds/coin.wav"

const HomePage = ({
  inputSubmitHandler,
  inputChangeHandler,
  history,
  name,
  quizStartCountDown,
  categorySelectHandler,
  difficultySelectHandler,
  category,
  difficulty,
  storedName,
  renameHandler,
  sound,
  isFinished
}) => {
  let inputArea = (
    <div className='inputForm'>
      <input id='name' className='input' type='text' placeholder='Name' autoComplete='off' onChange={e => inputChangeHandler(e)} />
      <label htmlFor='name' className='inputLabel'>
        Name
      </label>
      <button className='inputButton'>START</button>
    </div>
  )
  if (storedName) {
    inputArea = (
      <div className='inputForm'>
        <span className='userInformation'>
          <FontAwesomeIcon icon={faPencilAlt} onClick={renameHandler} />
          {storedName}
        </span>
        <button className='inputButton'>START</button>
      </div>
    )
  }

  let homePageContent = null
  if (quizStartCountDown >= 5 && isFinished === false) {
    homePageContent = (
      <>
        <h2 className='optionHeader'>
          <span>CATEGORIES</span>
        </h2>
        <div className='CategorySelect'>
          <CategorySelect category={category} categoryNum={9} onClick={() => categorySelectHandler(9)}>
            <FontAwesomeIcon icon={faGlobeAmericas} /> General
          </CategorySelect>
          <CategorySelect category={category} categoryNum={23} onClick={() => categorySelectHandler(23)}>
            <FontAwesomeIcon icon={faHourglassStart} /> History
          </CategorySelect>
          <CategorySelect category={category} categoryNum={18} onClick={() => categorySelectHandler(18)}>
            <FontAwesomeIcon icon={faLaptopCode} /> Computer
          </CategorySelect>
          <CategorySelect category={category} categoryNum={11} onClick={() => categorySelectHandler(11)}>
            <FontAwesomeIcon icon={faFilm} /> Film
          </CategorySelect>
          <CategorySelect category={category} categoryNum={10} onClick={() => categorySelectHandler(10)}>
            <FontAwesomeIcon icon={faBook} /> Books
          </CategorySelect>
          <CategorySelect category={category} categoryNum={21} onClick={() => categorySelectHandler(21)}>
            <FontAwesomeIcon icon={faVolleyballBall} /> Sports
          </CategorySelect>
        </div>
        <h2 className='optionHeader'>
          <span>DIFFICULTY</span>
        </h2>
        <div className='difficultySelect'>
          <DifficultySelect difficulty={difficulty} difficultyLevel={"easy"} onClick={() => difficultySelectHandler("easy")}>
            <FontAwesomeIcon icon={faEgg} /> Easy
          </DifficultySelect>
          <DifficultySelect difficulty={difficulty} difficultyLevel={"medium"} onClick={() => difficultySelectHandler("medium")}>
            <FontAwesomeIcon icon={faBalanceScale} /> Medium
          </DifficultySelect>
          <DifficultySelect difficulty={difficulty} difficultyLevel={"hard"} onClick={() => difficultySelectHandler("hard")}>
            <FontAwesomeIcon icon={faBug} /> Hard
          </DifficultySelect>
        </div>
        <form onSubmit={event => inputSubmitHandler(event, history)}>{inputArea}</form>
      </>
    )
  }

  let quizStartContent = null
  if (quizStartCountDown < 5 && isFinished === false) {
    quizStartContent = (
      <div className='quizStartContent'>
        {sound && quizStartCountDown >= -1 && <audio autoPlay src={ping}></audio>}
        <h1 className='quizStartHeader'>Good Luck {storedName ? storedName : name}!</h1>
        <p className='quizStartCountDown'>{quizStartCountDown >= 0 && quizStartCountDown}</p>
        <p className='quizStartReady'>{quizStartCountDown < 0 && "Ready!"}</p>
      </div>
    )
  }

  return (
    <StyledHomePage>
      {homePageContent}
      {quizStartContent}
    </StyledHomePage>
  )
}

export default HomePage
