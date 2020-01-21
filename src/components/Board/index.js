import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './styles.css'

export default function Board({ disabled, dimension, cards, flipped, solved, handleClick }) {
  return (<div className="board">
    {cards.map((card) => {
      <Card
        key={card.id}
        id={card.id}
        type={card.type}
        height={dimension / 4.5}
        width={dimension / 4.5}
        back={card.back}
        front={card.front}
        flipped={flipped.includes(card.id)}
        solved={solved.includes(card.id)}
        handleclick={handleclick}
        // disabled needs to include solved w/associated id otherwise you'll be able to click cards that have already been solved
        disabled={disabled || solved.includes(card.id)}
      />
    }
    )
    }
  </div>
  )
}

Board.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
}