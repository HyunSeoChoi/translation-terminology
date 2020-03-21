import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

const SearchDiv = styled.div`
  position: absolute;
  top: 50%;
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

class App extends Component {
  render() {
    return (
      <Container>
        <SearchDiv>
          <SearchInput type="text" placeholder="단어 입력" />
          <SearchButton>검색</SearchButton>
        </SearchDiv>
      </Container>
    );
  }
}

export default App;
