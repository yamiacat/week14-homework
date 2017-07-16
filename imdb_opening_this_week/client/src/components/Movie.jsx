import React from "react";

class Movie extends React.Component {
  render() {
    return(
      <div className="movie">
        <a href={this.props.url}>{this.props.children}</a>
      </div>
    )
  }

}

export default Movie;
