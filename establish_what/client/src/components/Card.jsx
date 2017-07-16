import React from 'react';

export const Card = (props) => {

  if (!props) return null;

  return(
    <div id="card-wrapper">
      <img src={props.pic}></img>
      <p>{props.name}</p>
    </div>
  )
}
