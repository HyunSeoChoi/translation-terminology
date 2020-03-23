import React, { Component } from "react";

class WordItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.original_word}</td>
        <td>{this.props.translated_word}</td>
      </tr>
    );
  }
}

export default WordItem;
