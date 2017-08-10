import React from 'react';

export const WinScreen = (props) => {

  if (!props) return null;
  if (props.no == true) return null;


  return(
    <div id="win-modal">
      <div id="win-wrapper">
        <h1>YOU WIN!</h1>
        <form onSubmit={this.props.playAgain} className="play-again">
          <input type="submit" value="PLAY AGAIN"></input>
        </form>
      </div>
    </div>
  )
}
