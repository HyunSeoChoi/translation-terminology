import React, { Component } from "react";
import styled from "styled-components";
import Main from "./Components/Main";
import Search from "./Components/Search";
import en2kr from "./Languages/en2kr";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
  width: 100%;
  height: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      data: []
    };
  }

  handleSearch = word => {
    this.setState({
      word: word,
      data: en2kr.terms.filter(el => {
        return el.original_word.includes(word);
      })
    });
  };

  render() {
    return (
      <Container>
        <Main handleSearch={this.handleSearch} />
        <Search data={this.state.data} />
      </Container>
    );
  }
}

export default App;
