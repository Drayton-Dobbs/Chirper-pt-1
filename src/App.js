import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
constructor (props) {
  super(props);


    this.state = {
      cards: [{
        id: 1,
        text: 'Whole bunch of nothing'
      },
      {
        id: 2,
        text: 'little bit of something'
      }],
      
    }
    this.clickButton=this.clickButton.bind(this)
    
}


  onInputChange = (text) => {
    this.setState({text})
    
    //this.render(Card);
  }

  clickButton (text) {
    // this.setState({
    //   cards: [...this.state.cards, {text}],
     
    // });
    this.setState({
              cards: [...this.state.cards,
                  { text, id: this.state.cards.length + 1 },
              ],
          });
  } 
  render() {
    return (
      <div className="App">
          <h1>
             Chirper 
             <p>Hello, Chirpers!</p>
             <input 
               placeholder="Chirp it up"
              onChange = {(event) => this.onInputChange(event.target.value) }
             />
             <button 
             onClick={() => {
              console.log('iufg')
              this.clickButton(this.state.text);
             }}
             >
               Post
              
            </button>
            {this.state.cards.map((card, index) => {
                return <Card key={`card-${index}`} text={card.text} />
            })}
            <Card card={this.state.cards} />
          </h1>
      </div>
    );
  }
}




export default App;
