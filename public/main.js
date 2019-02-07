const main = () => {
  if (document.querySelector('.game-name')) {
    document.querySelector('.game-name').textContent = 'Shuffle a Deck!!!'
  }

  let deck = []

  const valuesOfCards = [
    'Ace',
    'King',
    'Queen',
    'Jack',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ]
  const suitsOfCards = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

  // Build Deck

  for (let value = 0; value < valuesOfCards.length; value++) {
    for (let suits = 0; suits < suitsOfCards.length; suits++) {
      let values = valuesOfCards[value]
      let suit = suitsOfCards[suits]
      deck.push('the ' + values + ' of ' + suit)
    }
  }

  // Shuffle Deck

  for (let shuffle = 51; shuffle >= 0; shuffle--) {
    const random = Math.floor(Math.random() * (shuffle + 1))

    // Swap card at position shuffle with the card at position random

    let cardAtPositionShuffle = deck[shuffle]
    let cardAtPositionRandom = deck[random]

    // Put the card at position shuffle at position random
    deck[shuffle] = cardAtPositionRandom

    // Put the card at position random at position shuffle
    deck[random] = cardAtPositionShuffle

    console.log(deck)
  }

  console.log(deck)

  return deck

  // Deal Deck

  for(
    let deck = Math.floor(Math.random() * cardAtPositionShuffle.length)
     return cardAtPositionShuffle.splice(card, 1)[0]
}



  /*
 const mySection = document.createElement('section')
mySection.textContent = 'Hello, World'
document.querySelector('.container').appendChild(mySection) */

// i = shuffle

document.addEventListener('DOMContentLoaded', main)
