import React from "react";
import Movie from "./Movie.jsx";

class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1, title: "The Beguiled", url: "http://www.imdb.com/title/tt5592248/"
        },
        {
          id: 2, title: "War for the Planet of the Apes", url: "http://www.imdb.com/title/tt3450958/"
        },
        {
          id: 3, title: "Cars 3", url: "http://www.imdb.com/title/tt3606752/"
        },
        {
          id: 4, title: "Jagga Jasoos", url: "http://www.imdb.com/title/tt4129428/"
        },
        {
          id: 5, title: "David Lynch: The Art of Life", url: "http://www.imdb.com/title/tt1691152/"
        }
      ]
    }
  }

  render() {

    const movieNodes = this.state.data.map((movie) => {
      return (
        <Movie url={movie.url} key={movie.id}>{movie.title}</Movie>
      )
    })

    return (
      <div className="list">
        {movieNodes}
      </div>
    )
  }

}

export default List;
