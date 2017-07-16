import React from 'react';
import {Card} from './Card.jsx';

class CardRenderer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const currentCards = this.props.allCards.map((card, index) => {
      return <Card key={card.id} pic={card.pic} name={card.name}></Card>
    });


    return(
      <div id="all-cards-wrapper">
        {currentCards}
      </div>
    )

  }

}


export default CardRenderer;
