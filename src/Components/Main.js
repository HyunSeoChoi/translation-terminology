import React, { Component } from "react";
import styled from "styled-components";

const SearchDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -200px;
  margin-top: -20px;
  height: 40px;
  width: 400px;
  border: 1px solid #1b5ac2;
  background: #ffffff;
`;

const SearchInput = styled.input`
  font-size: 16px;
  width: 325px;
  padding: 10px;
  border: 0px;
  outline: none;
  float: left;
`;

const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: 0px;
  background: #1b5ac2;
  outline: none;
  float: right;
  color: #ffffff;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
  }

  handleSearch = () => {
    if (this.state.word != null) {
      this.props.handleSearch(this.state.word);
    }
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <SearchDiv>
        <SearchInput
          type="text"
          name="word"
          onChange={this.handleOnChange}
          placeholder="단어 입력"
          value={this.state.word}
        />
        <SearchButton onClick={this.handleSearch}>검색</SearchButton>
      </SearchDiv>
    );
  }
}

export default Main;
