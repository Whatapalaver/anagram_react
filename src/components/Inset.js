import React from "react";
import AnagramList from './AnagramList';
import './Inset.css';

class Inset extends React.Component {
  state = {
    dictionary: ['zone', 'zone', 'act', 'cat', 'tac', 'art',
                 'rat', 'tar', 'spar', 'rasp', 'pars', 'raps', 'shed'
                ],
    word: "",
    orderedDictionary: {},
    results: []
  };

  componentWillMount() {
    this.getGroupedDictionary()
  }
  componentDidMount() {
    this.returnAnagram()
  }

  getGroupedDictionary() {
    let groupedDictionary = {}
    this.state.dictionary.forEach((word) => {
    const orderedWord = this.alphabeticOrder(word);
    if (groupedDictionary[orderedWord]) {
      return groupedDictionary[orderedWord].push(word);
    }
    groupedDictionary[orderedWord] = [word];
  });
    this.setState({orderedDictionary: groupedDictionary}) ;
  }

  alphabeticOrder(word) {
    let orderedWord = word.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    return orderedWord;
  };

  returnAnagram() {
    let orderedTestWord = this.alphabeticOrder(this.state.word)
    let potentialAnagrams = this.state.orderedDictionary[orderedTestWord]
    if (!potentialAnagrams || potentialAnagrams.length === 1) {
      console.log(`There are no anagrams for ${this.word}`)
      this.setState({results: []});
    } else {
      console.log(`Here are the anagrams for ${this.word}: `, potentialAnagrams.join(', '))
      this.setState({results: [potentialAnagrams]});
      // return potentialAnagrams.join(', ')
    };
  };

  handleSubmit = async e => {
    e.preventDefault();
    // stuff required
  };

  render() {
    return (
      <div>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit} className="form">
          <p>
            <strong>Enter word to anagramise...</strong>
          </p>
          <input
            className="input"
            type="text"
            value={this.state.word}
            onChange={e => this.setState({ word: e.target.value })}
          />
          <button className="submit" type="submit">Submit</button>
          <span className="reset-button">
            <i className="fa fa-reply" />
          </span>
        </form>
        <AnagramList />
      </div>
    );
  }
}

export default Inset;
