const main = () => {
  if (document.querySelector('.game-name')) {
    document.querySelector('.game-name').textContent = 'Shuffle a Deck!!!'
  }
}
 
const faceUp = []

for (let i = 0; 1 < 1++) {
  const _li = document.createElement ('li')
  _li.textContent = faceUp[i];
  document.querySelector('.cards').appendChild(_li)
} 


/*
 const mySection = document.createElement('section')
mySection.textContent = 'Hello, World'
document.querySelector('.container').appendChild(mySection)

document.addEventListener('DOMContentLoaded', main) */
