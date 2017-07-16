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
          showing: false,
          walks: false,
          leds: true,
          brains: true,
          kills: true,
          thumbs: false
        },
        {
          id: 1,
          pic: "/public/images/ed209.jpg",
          name: "ED-209",
          showing: false,
          walks: true,
          leds: false,
          brains: false,
          kills: true,
          thumbs: false
        },
        {
          id: 2,
          pic: "/public/images/hal9000.jpg",
          name: "HAL-9000",
          showing: false,
          walks: false,
          leds: true,
          brains: false,
          kills: true,
          thumbs: false
        },
        {
          id: 3,
          pic: "/public/images/johnny5.jpg",
          name: "Johnny 5",
          showing: false,
          walks: false,
          leds: false,
          brains: false,
          kills: false,
          thumbs: true
        },
        {
          id: 4,
          pic: "/public/images/pris.jpg",
          name: "Pris",
          showing: false,
          walks: true,
          leds: false,
          brains: true,
          kills: true,
          thumbs: true
        },
        {
          id: 5,
          pic: "/public/images/robocop.jpg",
          name: "Robocop",
          showing: false,
          walks: true,
          leds: false,
          brains: true,
          kills: false,
          thumbs: true
        },
        {
          id: 6,
          pic: "/public//images/t800.jpg",
          name: "T-800",
          showing: false,
          walks: true,
          leds: true,
          brains: false,
          kills: true,
          thumbs: true
        },
        {
          id: 7,
          pic: "/public/images/eve.jpg",
          name: "Eve",
          showing: false,
          walks: false,
          leds: true,
          brains: false,
          kills: false,
          thumbs: false
        }
      ],
      theDroidURLookingFor: null,
      answer: "",
      attributeToCheck: ""
    }
    this.flipCard = this.flipCard.bind(this);
    this.startGame = this.startGame.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  startGame(event) {
    event.preventDefault();

    const currentAllCards = this.state.allCards;
    const selectedCard = currentAllCards[Math.floor(Math.random() * currentAllCards.length)]

    this.setState({ theDroidURLookingFor: selectedCard});
    this.flipAllCards();

    const questionWrapper = document.getElementById('question-wrapper');
    questionWrapper.style.display = "block";
  }

  flipAllCards() {
    const currentAllCards = this.state.allCards;

    const flippedAllCards = currentAllCards.map((card) => {
        card.showing = true;
        return card;
    })
    this.setState({ allCards: flippedAllCards})
  }

  submitQuestion(event) {
    event.preventDefault();
    console.log("submitQuestion hit");

    const targetDroid = this.state.theDroidURLookingFor;
    const currentAttributeToCheck = this.state.attributeToCheck;
    console.log("targetDroid[currentAttributeToCheck]", targetDroid[currentAttributeToCheck]);
    if(targetDroid[currentAttributeToCheck] == true){
      console.log("AFFIRMATIVE");
    } else {
      console.log("NEGATIVE");
    }
  }

  selectQuestion(event) {
    // const currentQuestion = this.state.questionToAnswer;
    this.setState({ attributeToCheck: event.target.value})

    console.log("selectQuestion hit", event.target.value);
  }

  flipCard(cardID) {
    const currentAllCards = this.state.allCards;

    if(!this.state.theDroidURLookingFor) return null;

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
          submitQuestion={this.submitQuestion}
          selectQuestion={this.selectQuestion}
          answer={this.state.answer}
          ></QuestionLayer>
      </div>
    )
  }
}



export default Controller;
