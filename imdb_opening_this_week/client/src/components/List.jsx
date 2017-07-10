import React from "react";
import Movie from "./Movie.jsx";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
      </div>
    )
  }

}

export default List;
