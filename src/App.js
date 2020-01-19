import React, { Component} from 'react';
import {Character, Footer, Header,Message, Wrapper} from "./components/index";
import characters from "./characters.json";
import './App.css';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    characters,
    characterSelect: [],
    score: 0,
    highScore: 0,
    message: ""
  };

  clicked = id => {
    let prevState = this.state.characterSelect;
    let score = this.state.score;
    let highScore = this.state.highScore;

    this.makeShuffle()
    if(this.state.characterSelect.includes(id)) {
      this.setState({
        score: 0,
        highScore: highScore,
        characterSelect: [],
        message: "LOSER. Already clicked that one. Click images to play again."
      })
      return;
    };
    if(!this.state.characterSelect.includes(id)) {
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }
      prevState.push(id);

      if(prevState.length === 6){
        this.setState({
          score: 0,
          highScore: score,
          message: "WINNER. Click images to play again.",
          characterSelect: []
        })
        return;
      } else { 
        this.setState({
          score: score,
          highScore: highScore,
          characterSelect: prevState,
          message: ""
        })
        return;
      };
    }
  }

  makeShuffle(){
    this.setState({characters: shuffle(characters)});
  };

  render () {
    return (
      <>
      <Header state={this.state} />
      <Message state={this.state}/>
      <Wrapper>
       {this.state.characters.map( character => (
        <Character 
         image={character.image}
         alt={character.id}
         id={character.id}
         clicked={this.clicked}
         />
       ))}
      </Wrapper>
      <Footer />
      </>
    )
  }

}

export default App;
