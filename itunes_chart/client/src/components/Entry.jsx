import React from "react";

export const Entry = (props) => {
  console.log("props.song", props.song);
  if(!props.song['im:artist'].label) return null;

  return(
    <div>
      <li>{props.song['im:artist'].label} - {props.song['im:name'].label}</li>
    </div>
  )
}
