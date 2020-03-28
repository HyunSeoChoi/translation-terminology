import React, { Component } from "react";
import styled from "styled-components";

const Td = styled.th`
  width: 300px;
  padding: 10px;
  background: #ffffff;
  border-bottom: 1px solid #ccc;
`;

class WordItem extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <Td>{this.props.original_word}</Td>
          <Td>{this.props.translated_word}</Td>
        </tr>
      </tbody>
    );
  }
}

export default WordItem;
