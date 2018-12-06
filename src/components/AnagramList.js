import React from "react";
import AnagramListItem from './AnagramListItem'
import './AnagramList.css'

class AnagramList extends React.Component {
  state = {
    
  };


  render() {
    return (
      <div className="anagramlist">
        <AnagramListItem />
      </div>
    );
  }
}

export default AnagramList;
