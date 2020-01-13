import React, { Component } from 'react';
// importing the componenets
import data from './data.json'
import Nav from './components/Nav'
import './App.css';

class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    strangers: [],
    clicked: []
  }
  componentDidMount() {

    this.setState({ strangers: data })
  }
  // the login the function etc
  handleclick = name => {
    console.log(name)
    // verify if the name was in the array (indexof)   this.state.clicked.indesOf(name) === -1  not clicked  before  == the login is to push the name inside the array, increase the sscore and if topscore is less than score it means we have new topscore  // shuffle
    // if clicked ()
// this.setState({
  score:
  topscore:
  strangers: this.shuffle(this.state.strangers),
  clicked: this.state.clicked.concat(name)
})

  }
  render() {
    return (
      <div className="App">
        <Nav
          score={this.state.score}
          topscore={this.state.topscore}
        />

        {this.state.strangers.map(person =>
          <img src={person.img} onClick={() => this.handleclick(person.name)}></img>
        )
        }

      </div>
    );
  }
}
export default App;
