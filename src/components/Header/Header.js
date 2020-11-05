import React from "react"

import { faAmericanSignLanguageInterpreting, faCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StyledHeader from "./StyledHeader"

const Header = () => {
  return (
    <StyledHeader>
      <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />
      <h1>Trivia Db Quiz</h1>
      <FontAwesomeIcon icon={faCrosshairs} />
    </StyledHeader>
  )
}

export default Header
