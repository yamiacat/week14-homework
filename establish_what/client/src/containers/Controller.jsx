import React from 'react';
import QuestionLayer from '../components/QuestionLayer.jsx';

class Controller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allCards: [
        {
          id: 0,
          pic: "/public/images/dalek.jpg",
          name: "Dalek",
          showing: false
        },
        {
          id: 1,
          pic: "/public/images/ed209.jpg",
          name: "ED-209",
          showing: true
        },
        {
          id: 2,
          pic: "/public/images/hal9000.jpg",
          name: "HAL-9000",
          showing: true
        },
        {
          id: 3,
          pic: "/public/images/johnny5.jpg",
          name: "Johnny 5",
          showing: true
        },
        {
          id: 4,
          pic: "/public/images/pris.jpg",
          name: "Pris",
          showing: true
        },
        {
          id: 5,
          pic: "/public/images/robocop.jpg",
          name: "Robocop",
          showing: true
        },
        {
          id: 6,
          pic: "/public//images/t800.jpg",
          name: "T-800",
          showing: true
        },
        {
          id: 7,
          pic: "/public/images/walle.jpg",
          name: "Wall-E",
          showing: true
        }
      ]
    }
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(cardID) {
    console.log("flipCard triggered", cardID);
    const currentAllCards = this.state.allCards;

    if(currentAllCards[cardID].showing == true) {
      currentAllCards[cardID].showing = false;
      this.setState({currentAllCards});
    } else {
      currentAllCards[cardID].showing = true;
      this.setState({currentAllCards});
    }
  }

  render() {

    return(
      <div>
        <h1>ESTABLISH WHAT, HU-MAN.</h1>
        <QuestionLayer allCards={this.state.allCards} flipCard={this.flipCard}></QuestionLayer>
      </div>
    )

  }

}



export default Controller;
