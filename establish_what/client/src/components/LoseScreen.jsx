import React from 'react';

export const LoseScreen = (props) => {

  if (!props) return null;
  if (props.no == true) return null;


  return(
    <div id="lose-modal">
      <div id="lose-wrapper">
        <h1>YOU LOSE, HUM-AN!</h1>
        <form onSubmit={this.props.playAgain} className="play-again">
          <input type="submit" value="PLAY AGAIN"></input>
        </form>
      </div>
    </div>
  )
}
