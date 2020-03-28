import React, { Component } from "react";
import WordItem from "./Cards/WordItem";
import styled from "styled-components";

const TableDiv = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -300px;
  height: 40px;
  width: 600px;
  background: #ffffff;

  @media (max-width: 600px) {
    width: 402px;
    margin-left: -201px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: center;
  line-height: 1.5;
`;
const Th = styled.th`
  width: 300px;
  padding: 10px;
  font-weight: bold;
  color: #fff;
  background: #1b5ac2;
`;

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
      <TableDiv>
        <Table border="1">
          <tbody>
            <tr>
              <Th>영어</Th>
              <Th>한국어</Th>
            </tr>
          </tbody>
          {resultList}
        </Table>
      </TableDiv>
    );
  }
}

export default Search;
