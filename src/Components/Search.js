import React, { Component } from "react";
import WordItem from "./Cards/WordItem";

class Search extends Component {
  render() {
    const resultList = this.props.data.map(
      ({ id, original_word, translated_word }) => (
        <WordItem
          key={id}
          original_word={original_word}
          translated_word={translated_word}
        />
      )
    );

    return (
      <table border="1">
        <th>영어</th>
        <th>한국어</th>
        {resultList}
      </table>
    );
  }
}

export default Search;
