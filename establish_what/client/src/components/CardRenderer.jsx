import React from 'react';
import {Card} from './Card.jsx';

class CardRenderer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const currentCards = this.props.allCards.map((card, index) => {
      let picURL = "";
      let name = "???";

      if(card.showing === true) {
        picURL = card.pic
        name = card.name
      } else {
        picURL = "/public/images/cardback.jpg"
      }

      return <Card key={card.id} value={card.id} pic={picURL} name={name} flipCard={this.props.flipCard}></Card>
    });


    return(
      <div className="all-cards-wrapper">
        {currentCards}
      </div>
    )
  }
}


export default CardRenderer;
