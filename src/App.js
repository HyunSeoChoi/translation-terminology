import React, { Component } from "react";
import styled from "styled-components";
import Main from "./Components/Main";
import Search from "./Components/Search";
import en2kr from "./Languages/en2kr";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(https://img.onestore.co.kr/thumbnails/img_sac/0_0_A20_40/data6/android/201412/27/SE201412131811506170004506/0000680735/img/preview/0000680735_DP000105.png);
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const TextButton = styled.button`
  position: absolute;
  top: 2%;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 4%;
  border: 1px solid #1b5ac2;
  outline: none;
  background: #fff;
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
    if (!word) {
      alert("최소 한 글자 이상 입력해주세요");
      return;
    }
    this.setState({
      word: word,
      data: en2kr.terms.filter(el => {
        return el.original_word.includes(word.toLowerCase());
      })
    });
  };

  render() {
    return (
      <Container>
        <Background>
          <TextButton
            onClick={() =>
              window.open(
                "https://github.com/HyunSeoChoi/translation-terminology/blob/master/CONTRIBUTING.md",
                "_blank"
              )
            }
          >
            단어 추가하기
          </TextButton>
          <Main handleSearch={this.handleSearch} />
          <Search data={this.state.data} />
        </Background>
      </Container>
    );
  }
}

export default App;
