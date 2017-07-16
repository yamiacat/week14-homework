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

        <form onSubmit={this.props.startGame}>
          <input type="submit" value="COMMENCE CALCULATION"></input>
        </form>
        <p id="game-status">{this.props.gameStatus}</p>
      </div>
    )
  }

}

export default QuestionLayer;
