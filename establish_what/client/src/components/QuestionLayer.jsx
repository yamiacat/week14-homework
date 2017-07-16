import React from 'react';
import CardRenderer from './CardRenderer.jsx';

class QuestionLayer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>
        <CardRenderer allCards={this.props.allCards} flipCard={this.props.flipCard}></CardRenderer>
        <h2>OPERATIONS:</h2>

        <div id="start-button-wrapper">
          <form onSubmit={this.props.startGame} id="start-button">
            <input type="submit" value="INITIATE LEISURE CALCULATION"></input>
          </form>
          <p id="game-status">{this.props.gameStatus}</p>
        </div>

        <div id="question-wrapper">
          <p id="question-prefix">
            DOES THE TARGET...
          </p>
          <form onSubmit={this.props.submitQuestion}>
            <select onChange={this.props.selectQuestion} id="question-select" required >
              <option value="">SELECT OPTION</option>
              <option value="walks">USE INEFFICIENT BIPEDAL LOCOMOTION?</option>
              <option value="leds">HAVE AWESOME GLOWING LEDS FOR AN OPTIC SYSTEM?</option>
              <option value="brains">HAVE A SQUISHY ORGANIC BRAIN?</option>
              <option value="kills">HEROICALLY MURDER INNOCENT HU-MANS?</option>
              <option value="thumbs">HAS THOSE OPPOSABLE DIGITS YOU'RE SO PROUD OF?</option>
            </select>
            <input type="submit" value="INPUT"></input>
          </form>
        </div>

        <div id="answer-wrapper">
          <h3>
            OUTPUT:
          </h3>
          <h3>
            {this.props.answer}
          </h3>
        </div>

        <div id="guess-wrapper">
          <form onSubmit={this.props.submitGuess}>
            <input type="submit" value="SUBMIT FEEBLE GUESS"></input>
          </form>
        </div>


      </div>
    )
  }
}

export default QuestionLayer;
