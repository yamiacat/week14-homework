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
          <form onSubmit={this.props.askQuestion}>
            <select id="question-select" required >
              <option value="">SELECT OPTION</option>
              <option value="walks">USE INEFFICIENT BIPEDAL LOCOMOTION?</option>
              <option value="leds">HAVE GLOWING LEDS FOR AN OPTIC SYSTEM</option>
              <option value="brains">HAVE A SQUISHY ORGANIC BRAIN</option>
              <option value="kills">REGULARLY MURDER INNOCENT HU-MANS</option>
            </select>
            <input type="submit" value="INPUT"></input>
          </form>
        </div>

      </div>
    )
  }

}

export default QuestionLayer;
