import React, { Component } from "react";
import styled from "styled-components";
import Main from "./Components/Main";
import Search from "./Components/Search";
import en2kr from "./Languages/en2kr";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg);
  background-size: cover;
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
