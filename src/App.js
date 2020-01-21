import React, { useState, useEffect } from 'react';
// import data from './data.json'
import Board from './components/Board'
import initializeDeck from './components/Deck'
// import Nav from './components/Nav'
// import './App.css';

// class App extends Component {

//   state = {
//     score: 0,
//     topscore: 0,
//     lineart: [],
//     clicked: []
//   }
//   componentDidMount() {
//     this.setState({ lineart: data })
//   }
// the login the function etc
// handleClick = name => {
//   console.log(name)
// verify if the name was in the array (indexof)   
// this.state.clicked.indexOf(name) === -1
// not clicked  before  == the login is to push the name inside the array, increase the sscore and if topscore is less than score it means we have new topscore  // shuffle
// if clicked ()
// this.setState({
// score:
// topscore:
// lineart: this.shuffle(this.state.lineart)
//   clicked: this.state.clicked.concat(name)
// }
//   render() {
//     return (
//       <div className="App">
//         <Nav
//           score={this.state.score}
//           topscore={this.state.topscore}
//         />
//         {this.state.lineart.map(lineart =>
//           <img src={lineart.img} onClick={() => this.handleclick(lineart.name)}></img>
//         )
//         }
//       </div>
//     )
//   }
// }

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  // keeps selected + matching cards facing up
  const [solved, setSolved] = useState([])
  // disables board after selecting two cards so you don't select three cards and set default so it's starts off with the board not disabled
  const [disabled, setDisabled] = useState(false)

  // an arrow function that runs when this effect happens -replaces componentDidMount
  useEffect(() => {
    resizeBoard()
    // call setState & pass initial value to call a function to generate deck of cards
    setCards(initializeDeck())
  },
    //ensure effect does not get called every time the app renders - give a 2nd argument which will be value to watch to see if effect needs to be called again
    [])

  useEffect(() => {
    preloadImages()
  }, cards)

  // picks up change when the browser resizes
  useEffect(() => {
    // listen to the event "resize" and call the 'resizeBoard' function
    const resizeListener = document.addEventListener('resize', resizeBoard)
    // returns what we want to clean up/ equal to component unmount
    return () => window.removeEventListener('resize', resizeListener)
  })
  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.jpg`
      new Image().src = src
    })
  }
  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }
  const sameCardClicked = (id) => flipped.includes(id)
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    )
    )
  }
  return (
    <div>
      <h2> Find a macthing pair of cards!</h2>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  )
}






