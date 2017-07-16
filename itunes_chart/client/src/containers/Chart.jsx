import React from "react";
import ChartList from "../components/ChartList.jsx";

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allEntries: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = () => {
      if(request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({allEntries: data});
    }
    request.send();
  }


  render() {
    return(
      <div>
        <h1>iTunes Chart, for some reason</h1>
        <ChartList allEntries={this.state.allEntries}></ChartList>
      </div>
    )
  }

}


export default Chart;
