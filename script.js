const body = document.querySelector('body')
const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
const guessInput = document.querySelector('.guess')
const massage = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const number = document.querySelector('.number')
const highscoreEl = document.querySelector('.highscore')



let score = 20
let hightscore = 0



let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)
checkBtn.addEventListener('click', () => {
    if (guessInput.value == randomNumber) {
        massage.textContent = 'You are win!!!'
        number.textContent = randomNumber
        body.style.background = '#63dd6d'
        
        if (score > hightscore) {
            hightscore = score
            highscoreEl.textContent = hightscore
        }
    }else if (guessInput.value > randomNumber) {
        massage.textContent = 'Too Height'
        score--
        score.textContent = score
    }else if (guessInput.value < randomNumber) {
        massage.textContent = 'Too Low'
        score--
        score.textContent = scoreEl
    }
 else {
    massage.textContent = 'No number'
   }
})

againBtn.addEventListener('click', () => {
    body.style.background = '#222'
    score = 20
    highscoreEl = 0
    massage.textContent = 'Start guesing...'
    score.textContent = 20
    number.textContent = '?'
    guessInput.value = ''
    randomNumber = Math.floor(Math.random() * 20) + 1
})