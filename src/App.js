import React, { Component} from 'react';
import {Character, Footer, Header, Wrapper} from "./components/index";
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
    let prevState = this.state.characterSelect.slice();
    let score = this.state.score;
    let highScore = this.state.highScore;

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
          message: "WINNER. Click to play again.",
          characterSelect: []
        })
        return;
      }
    }
    
    if(this.state.characterSelect.includes(id)) {
      this.setState({
        score: 0,
        highScore: highScore,
        characterSelect: [],
        messege: "LOSER. Already clicked that one. Click to play again."
      })
      return;
    };

    this.setState({
      score:score,
      highScore: highScore,
      clickedCharacter: prevState,
      message: ""
    });

    this.makeShuffle()
  }

  makeShuffle(){
    this.setState({characters: shuffle(characters)});
  };

  render () {
    return (
      <>
      <Header state={this.state} />
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
