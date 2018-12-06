import React from "react";
import AnagramListItem from './AnagramListItem'
import './AnagramList.css'

class AnagramList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return (
      <div className="anagramlist">
        <ul>{this.props.results.map(function(item) { return <AnagramListItem item={item}/> })}</ul>
      </div>
    );
  }
}

export default AnagramList;
