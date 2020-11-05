import React from "react"
import StyledError from "./StyledError"

const ErrorPage = () => {
  return (
    <StyledError>
      <div className='errorContent'>
        <div className='errorCode'>404 Error</div>
        <h1>Sorry, we can’t seem to find what you’re looking for.</h1>
        <h2>You've landed on a URL that doesn't seem to exist on Trivia Db Quiz. Here's some options:</h2>
        <h2>You could try a search up in the header, that should turn up whatever you were looking for.</h2>
      </div>
      <div className='errorImage'></div>
    </StyledError>
  )
}

export default ErrorPage
