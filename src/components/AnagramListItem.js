import React from "react";
import './AnagramListItem.css'

class AnagramListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="anagramList">
        <li>{this.props.item}</li>
      </div>
    );
  }
}

export default AnagramListItem;