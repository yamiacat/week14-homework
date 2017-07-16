import React from 'react';
import CardRenderer from './CardRenderer.jsx';

class QuestionLayer extends React.Component {

  render() {

    return(
      <div>
        <CardRenderer></CardRenderer>
        <h2>CALCULATE YOUR QUERY:</h2>
      </div>
    )
  }

}

export default QuestionLayer;
