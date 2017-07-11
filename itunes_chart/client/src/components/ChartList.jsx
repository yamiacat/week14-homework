import React from "react";
import {Entry} from "./Entry.jsx";

class ChartList extends React.Component {

  render() {

    if(!this.props.allEntries.feed) return null;

    const chartEntries = this.props.allEntries.feed.entry.map((entry) => {
      // console.log("entry in map", entry['im:artist'].label);
      return <Entry song={entry}></Entry>
      console.log("entry", entry);
    });

    return(
      <ol>
        {chartEntries}
      </ol>
    )
  }

}

export default ChartList
