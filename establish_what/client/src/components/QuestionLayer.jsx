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
        <h2>CALCULATE YOUR QUERY:</h2>
      </div>
    )
  }

}

export default QuestionLayer;
