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
          showing: false
        },
        {
          id: 2,
          pic: "/public/images/hal9000.jpg",
          name: "HAL-9000",
          showing: false
        },
        {
          id: 3,
          pic: "/public/images/johnny5.jpg",
          name: "Johnny 5",
          showing: false
        },
        {
          id: 4,
          pic: "/public/images/pris.jpg",
          name: "Pris",
          showing: false
        },
        {
          id: 5,
          pic: "/public/images/robocop.jpg",
          name: "Robocop",
          showing: false
        },
        {
          id: 6,
          pic: "/public//images/t800.jpg",
          name: "T-800",
          showing: false
        },
        {
          id: 7,
          pic: "/public/images/walle.jpg",
          name: "Wall-E",
          showing: false
        }
      ],
      theDroidURLookingFor: null
    }
    this.flipCard = this.flipCard.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  startGame(event) {
    event.preventDefault();

    const currentAllCards = this.state.allCards;
    const selectedCard = currentAllCards[Math.floor(Math.random() * currentAllCards.length)]

    this.setState({ theDroidURLookingFor: selectedCard});
    this.flipAllCards();
  }

  flipAllCards() {
    const currentAllCards = this.state.allCards;

    const flippedAllCards = currentAllCards.map((card) => {
        card.showing = true;
        return card;
    })
    this.setState({ allCards: flippedAllCards})

  }

  flipCard(cardID) {
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

    const gameStatus = `${!this.state.theDroidURLookingFor ? "":"TARGET SELECTED, COMMENCE PUNY HU-MAN LOGIC"}`

    return(
      <div>
        <h1>ESTABLISH WHAT, HU-MAN.</h1>
        <QuestionLayer
          allCards={this.state.allCards}
          flipCard={this.flipCard}
          startGame={this.startGame}
          gameStatus={gameStatus}
          ></QuestionLayer>
      </div>
    )
  }
}



export default Controller;
