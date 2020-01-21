function shuffle(array) {
  const _array = array.slice(0)
  for (let i = 0, i < array.length - 1, i++) {
    let randomIndex = Math.floor(Math.random) * (i + 1)
    let temp = _array[i]
    _array[i] = _array[randomIndex]
    _array[randomIndex] = temp
  }
  return _array
}

export default function initializeDeck(params) {
  // unique identifier for each card
  let id = 0
  // array of card images
  const cards = ['diamond', 'mandala', 'prism', 'reverse', 'triangle', 'trifecta']
    // allows to build a new array based on each iteration
    .reduce((acc, type) => {
      // push object into array
      acc.push({
        id: id++,
        type
      })
      // duplicate row of 6 cards
      acc.push({
        id: id++,
        type
      })
      return acc
    }, [])

  // return shuffle of cards array before we turn back to app
  return shuffle(cards)
} 