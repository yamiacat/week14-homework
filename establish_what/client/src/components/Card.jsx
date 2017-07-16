import React from 'react';

export const Card = (props) => {

  if (!props) return null;


  return(
    <div className="card-wrapper" onClick={(e) => {props.flipCard(props.value)}}>
      <img src={props.pic}></img>
      <p className="card-name">{props.name}</p>
    </div>
  )
}
