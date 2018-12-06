import React from "react";
import AnagramList from './AnagramList';
import './Inset.css';

//import the wordlist
const dictionary = require('../dictionary.js');
//convert wordlist string to array
const dictionaryArray = dictionary.strData.split(/\s/);

class Inset extends React.Component {
  state = {
    // dictionary: ['zone', 'zone', 'act', 'cat', 'tac', 'art',
    //              'rat', 'tar', 'spar', 'rasp', 'pars', 'raps', 'shed'
    //             ],
    dictionary: dictionaryArray,
    word: "",
    orderedDictionary: {},
    results: []
  };

  componentWillMount() {
    this.getGroupedDictionary()
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
      this.setState({results: ['Sorry - No anagrams available!']});
    } else {
      console.log(`Here are the anagrams for ${this.word}: `, potentialAnagrams.join(', '))
      this.setState({results: potentialAnagrams});
    };
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.returnAnagram()
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
          {/* <span className="reset-button">
            <i className="fa fa-reply" />
          </span> */}
        </form>
        <AnagramList results={this.state.results}/>
      </div>
    );
  }
}

export default Inset;
